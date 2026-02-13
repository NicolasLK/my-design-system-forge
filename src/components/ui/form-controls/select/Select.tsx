import { SelectProvider, useSelectContext } from '@/contexts/components/select/SelectContext';
import { cn } from '@/lib/utils/cn';
import { getComponentSize, type ComponentSize } from '@/models/get-component-size';
import { useClickOutside } from '@/models/hooks/useClickOutside';
import { useControllableState } from '@/models/hooks/useControllableState';
import {
    forwardRef,
    useEffect,
    useRef,
    useState,
    type ButtonHTMLAttributes,
    type ComponentProps,
    type HTMLAttributes,
    type LiHTMLAttributes,
    type ReactNode,
    type RefObject,
} from 'react';
import './select.css';

/* ============================================================
 * 🟦 ROOT
 * ============================================================ */
interface ISelectRootProps {
    children: ReactNode;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    error?: boolean;
    placeholder?: string;
    className?: string;
    selectSize?: ComponentSize;
}

export const SelectRoot = ({
    children,
    value: valueProp,
    defaultValue,
    onValueChange,
    open: openProp,
    defaultOpen,
    onOpenChange,
    disabled = false,
    error = false,
    placeholder,
    className,
    selectSize = 'md',
}: ISelectRootProps) => {
    const [value, setValue] = useControllableState(
        valueProp,
        defaultValue || '',
        onValueChange
    );

    const [open, setOpen] = useControllableState(
        openProp,
        defaultOpen || false,
        onOpenChange
    );

    // Store labels for value mapping
    const [labels, setLabels] = useState<Record<string, string>>({});

    const registerOption = (val: string, label: string) => {
        setLabels((prev) => ({ ...prev, [val]: label }));
    };

    const unregisterOption = (val: string) => {
        setLabels((prev) => {
            const next = { ...prev };
            delete next[val];
            return next;
        });
    };

    const getLabel = (val: string) => labels[val];

    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref as RefObject<HTMLElement | null>, () => setOpen(false), open);

    const sizeClass = getComponentSize(selectSize, 'select');

    return (
        <SelectProvider
            value={{
                value,
                onValueChange: setValue,
                open,
                onOpenChange: setOpen,
                disabled,
                error,
                placeholder,
                registerOption,
                unregisterOption,
                getLabel,
            }}
        >
            <div
                ref={ref}
                data-slot="select-root"
                data-state={open ? 'open' : 'closed'}
                className={cn('select-root', sizeClass, className)}
            >
                {children}
            </div>
        </SelectProvider>
    );
};

/* ============================================================
 * 🟦 TRIGGER
 * ============================================================ */
interface ISelectTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}

export const SelectTrigger = forwardRef<HTMLButtonElement, ISelectTriggerProps>(
    ({ className, children, ...props }, ref) => {
        const { open, onOpenChange, disabled, error } = useSelectContext();

        return (
            <button
                ref={ref}
                type="button"
                data-slot="select-trigger"
                aria-expanded={open}
                aria-haspopup="listbox"
                disabled={disabled}
                data-error={error}
                onClick={() => {
                    if (!disabled) onOpenChange(!open);
                }}
                className={cn(
                    'select-trigger',
                    error && 'select-trigger-error',
                    className
                )}
                {...props}
            >
                {children}
                <span className={cn('select-arrow', open && 'rotate')}>▾</span>
            </button>
        );
    }
);
SelectTrigger.displayName = 'SelectTrigger';

/* ============================================================
 * 🟦 VALUE
 * ============================================================ */
interface ISelectValueProps {
    placeholder?: string;
    className?: string;
}

export const SelectValue = ({ placeholder: placeholderProp, className }: ISelectValueProps) => {
    const { value, getLabel, placeholder: contextPlaceholder } = useSelectContext();
    const placeholder = placeholderProp || contextPlaceholder;
    
    const label = value ? getLabel(value) : undefined;
    const displayText = label || value || placeholder;
    const isPlaceholder = !value && !!placeholder;

    return (
        <span
            data-slot="select-value"
            className={cn(
                'select-value',
                isPlaceholder && 'select-placeholder',
                className
            )}
        >
            {displayText}
        </span>
    );
};

/* ============================================================
 * 🟦 CONTENT
 * ============================================================ */
interface ISelectContentProps extends HTMLAttributes<HTMLUListElement> {
    children: ReactNode;
}

export const SelectContent = forwardRef<HTMLUListElement, ISelectContentProps>(
    ({ className, children, ...props }, ref) => {
        const { open } = useSelectContext();

        if (!open) return null;

        return (
            <ul
                ref={ref}
                role="listbox"
                data-slot="select-content"
                data-state={open ? 'open' : 'closed'}
                className={cn('select-content', className)}
                {...props}
            >
                {children}
            </ul>
        );
    }
);
SelectContent.displayName = 'SelectContent';

/* ============================================================
 * 🟦 ITEM (OPTION)
 * ============================================================ */
interface ISelectItemProps extends LiHTMLAttributes<HTMLLIElement> {
    value: string;
    children: ReactNode;
    disabled?: boolean;
}

export const SelectItem = forwardRef<HTMLLIElement, ISelectItemProps>(
    ({ className, value, children, disabled, ...props }, ref) => {
        const {
            value: selectedValue,
            onValueChange,
            onOpenChange,
            registerOption,
            unregisterOption,
        } = useSelectContext();

        // Register label on mount
        useEffect(() => {
            const label = typeof children === 'string' ? children : String(children); // Simplificação
            registerOption(value, label);
            return () => unregisterOption(value);
        }, [value, children, registerOption, unregisterOption]);

        const isSelected = selectedValue === value;

        const handleSelect = () => {
            if (disabled) return;
            onValueChange(value);
            onOpenChange(false);
        };

        return (
            <li
                ref={ref}
                role="option"
                data-slot="select-item"
                aria-selected={isSelected}
                data-selected={isSelected}
                data-disabled={disabled}
                onClick={handleSelect}
                className={cn(
                    'select-item',
                    isSelected && 'select-item-selected',
                    disabled && 'select-item-disabled',
                    className
                )}
                {...props}
            >
                {children}
                {isSelected && <span className="select-check">✓</span>}
            </li>
        );
    }
);
SelectItem.displayName = 'SelectItem';

/* ============================================================
 * 🟦 LABEL (GROUP)
 * ============================================================ */
export const SelectLabel = ({ className, children, ...props }: ComponentProps<'div'>) => {
    return (
        <div className={cn('select-label', className)} {...props}>
            {children}
        </div>
    );
};