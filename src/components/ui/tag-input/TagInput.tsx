import { Tag } from '@/components/ui/data-display/tag/Tag';
import { cn } from '@/lib/utils/cn';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import { useState, type KeyboardEvent } from 'react';
import { Input } from '../form-controls/input';
import './tag-input.css';

/* ============================================================
 * 🟦 ROOT
 * ============================================================ */
interface ITagInputProps {
    label?: string;
    placeholder?: string;
    defaultTags?: string[];
    disabled?: boolean;
    onChange?: (tags: string[]) => void;
    size?: ComponentSize;
    className?: string;
    full?: boolean;
}

export const TagInput = ({
    label,
    placeholder = 'Digite e pressione Enter',
    defaultTags = [],
    disabled = false,
    onChange,
    size = 'md',
    className,
    full = false,
}: ITagInputProps) => {
    const [tags, setTags] = useState<string[]>(defaultTags);
    const [inputValue, setInputValue] = useState('');

    const classSize = getComponentSize(size, 'taginput');

    /**
     * Verifica se o componente deve ser full width
     */
    const isFull = full || className?.includes('taginput-full');

    const addTag = (value: string) => {
        const tag = value.trim();
        if (!tag || tags.includes(tag)) return;

        const updated = [...tags, tag];
        setTags(updated);
        onChange?.(updated);
    };

    const removeTag = (tag: string) => {
        const updated = tags.filter((t) => t !== tag);
        setTags(updated);
        onChange?.(updated);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag(inputValue);
            setInputValue('');
        } else if (
            e.key === 'Backspace' &&
            inputValue === '' &&
            tags.length > 0
        ) {
            // Se Backspace for pressionado sem input, remove a última tag (Comportamento comum)
            e.preventDefault();
            const lastTag = tags[tags.length - 1];
            removeTag(lastTag);
        }
    };

    const inputLabel = label || placeholder || 'Tag Input';

    return (
        <>
            <div
                data-slot="taginput-root"
                data-disabled={disabled}
                className={cn(
                    'taginput-root',
                    disabled && 'disabled',
                    isFull && 'taginput-full',
                    className,
                )}
            >
                {label && <label className="taginput-label">{label}</label>}

                <div
                    data-slot="taginput-box"
                    className={cn('taginput-box', classSize)}
                >
                    {tags.map((tag) => (
                        // Utiliza o componente interno Tag (que será estilizado com tokens)
                        <Tag
                            key={tag}
                            size={size}
                            closable={!disabled}
                            onClose={() => {
                                removeTag(tag);
                            }}
                        >
                            {tag}
                        </Tag>
                    ))}

                    <Input
                        label={inputLabel}
                        inputSize={size}
                        className="taginput-input-field"
                        placeholder={tags.length === 0 ? placeholder : ''}
                        value={inputValue}
                        disabled={disabled}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                        onKeyDown={handleKeyDown}
                        error={false}
                        fullWidth={false}
                        data-slot="taginput-input"
                    />
                </div>
            </div>
        </>
    );
};
