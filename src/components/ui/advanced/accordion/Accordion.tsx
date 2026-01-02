import { cn } from '@/lib/utils/cn';
import { type ComponentProps, type ReactNode } from 'react';
import { Divider } from '../../foundations/divider';
import './accordion.css';

/* ============================================================
 * 🟦 ROOT
 * ============================================================ */

type AccordionRootTypes = 'single' | 'multiple';

interface IAccordionRootProps {
    type?: AccordionRootTypes;
    defaultValue?: string | string[];
}

export const AccordionRoot = ({
    className,
    ...props
}: ComponentProps<'div'> & IAccordionRootProps) => {
    return (
        <>
            <div
                data-slot="accordion"
                className={cn('accordion', className)}
                {...props}
            />
        </>
    );
};

/* ============================================================
 * 🟦 ITEM
 * ============================================================ */
interface IAccordionItemProps {
    value: string;
    open?: boolean;
}

export const AccordionItem = ({
    className,
    ...props
}: ComponentProps<'div'> & IAccordionItemProps) => {
    return (
        <>
            <div
                data-slot="accordion-item"
                data-state={props.open ? 'open' : 'closed'}
                data-value={props.value}
                className={cn('accordion-item', className)}
                {...props}
            ></div>
        </>
    );
};

/* ============================================================
 * 🟦 TRIGGER
 * ============================================================ */
interface IAccordionTriggerProps extends ComponentProps<'button'> {
    children: ReactNode;
    icon?: ReactNode;
    onToggle?: () => void;
    open?: boolean;
}

export const AccordionTrigger = ({
    className,
    children,
    icon,
    onToggle,
    open,
    ...props
}: IAccordionTriggerProps) => {
    return (
        <>
            <button
                role="button"
                aria-expanded={open}
                onClick={onToggle}
                data-slot="accordion-trigger"
                data-state={open ? 'open' : 'closed'}
                className={cn('accordion-trigger', className)}
                {...props}
            >
                <span className="accordion-title">{children}</span>

                <span className="accordion-icon">
                    {icon ? icon : open ? '−' : '+'}
                </span>
            </button>
        </>
    );
};

/* ============================================================
 * 🟦 CONTENT
 * ============================================================ */
interface IAccordionContentProps extends ComponentProps<'div'> {
    open?: boolean;
    children: ReactNode;
}

export const AccordionContent = ({
    className,
    children,
    open,
    ...props
}: IAccordionContentProps) => {
    return (
        <>
            <div
                data-slot="accordion-content"
                data-state={open ? 'open' : 'closed'}
                className={cn('accordion-content', className)}
                {...props}
            >
                <Divider spacing="small" />
                <div className="accordion-content-inner">{children}</div>
            </div>
        </>
    );
};
