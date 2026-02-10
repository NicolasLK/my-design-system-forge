import { cn } from '@/lib/utils/cn';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import { useId, useState, type ChangeEvent, type DragEvent } from 'react';
import { Tag } from '../data-display/tag';
import { Input } from '../form-controls/input';
import { Label } from '../foundations/label';
import './file-input.css';

interface IFileInputProps {
    label?: string;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    onChange?: (files: File[]) => void;
    size?: ComponentSize;
    className?: string;
    full?: boolean;
}

export const FileInput = ({
    label,
    accept,
    multiple = false,
    disabled = false,
    onChange,
    size = 'md',
    className,
    full = false,
}: IFileInputProps) => {
    const [filesData, setFilesData] = useState<File[]>([]);
    const [dragActive, setDragActive] = useState(false);

    const classSize = getComponentSize(size, 'fileinput');
    const isFull = full || className?.includes('fileinput-full');

    const fileInputId = useId();

    const handleFiles = (incomingFiles: FileList | File[]) => {
        const incomingFilesArray = Array.from(incomingFiles as FileList);

        let fileArray: File[];

        if (multiple) {
            // Se for multi, adiciona ao array existente
            fileArray = [...filesData, ...incomingFilesArray];
        } else if (incomingFilesArray.length > 0) {
            // Se não for multi, pega apenas o primeiro
            fileArray = [incomingFilesArray[0]];
        } else {
            // Se não houver arquivos, retorna
            fileArray = [];
        }

        const uniqueFiles = Array.from(
            new Map<string, File>(
                fileArray.map((f) => [`${f.name}-${f.size}`, f]),
            ).values(),
        );

        setFilesData(uniqueFiles);
        onChange?.(uniqueFiles);
    };

    /**
     * Função para remover um arquivo pelo nome
     */
    const removeFile = (name: string) => {
        const updatedFiles = filesData.filter((f) => f.name !== name);
        setFilesData(updatedFiles);
        onChange?.(updatedFiles);

        /**
         * Limpar o valor do input file nativo para permitir upload do mesmo arquivo
         */
        const inputElement = document.getElementById(
            fileInputId,
        ) as HTMLInputElement;
        if (inputElement) {
            inputElement.value = '';
        }
    };

    // --- Drag Handlers ---
    const onDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(true);
    };

    const onDragLeave = () => setDragActive(false);

    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(false);
        if (!disabled && e.dataTransfer.files.length > 0) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) handleFiles(e.target.files);
    };

    /**
     * Adiciona feedback visual de desabilitado
     */
    const wrapperProps = disabled ? { 'data-disabled': true } : {};

    /**
     * Nomes para a lista
     */
    // const fileNames = filesData.map(f => f.name);

    return (
        <>
            <div
                data-slot="fileinput-root"
                className={cn(
                    'fileinput-root',
                    isFull && 'fileinput-full',
                    className,
                )}
                {...wrapperProps}
            >
                {label && <Label htmlFor={fileInputId}>{label}</Label>}

                <div
                    data-slot="fileinput-dropzone"
                    className={cn(
                        'fileinput-dropzone',
                        classSize,
                        dragActive && !disabled && 'dragactive',
                        disabled && 'disabled',
                    )}
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                >
                    <Input
                        id={fileInputId}
                        label=""
                        type="file"
                        multiple={multiple}
                        accept={accept}
                        disabled={disabled}
                        onChange={onFileChange}
                        className="fileinput-native-input"
                        inputSize={size}
                    />

                    <p className="fileinput-text">
                        Arraste arquivos aqui {multiple ? 'ou' : ''}
                        <br />
                        <span className="fileinput-link">
                            clique para selecionar
                        </span>
                    </p>
                </div>

                {filesData.length > 0 && (
                    <div
                        data-slot="fileinput-list-wrapper"
                        className="fileinput-list-wrapper"
                    >
                        <p className="fileinput-list-label">
                            Arquivos selecionados:
                        </p>
                        <div className="fileinput-tags-container">
                            {filesData.map((file) => (
                                <Tag
                                    key={`${file.name}-${file.size}`}
                                    size={size}
                                    closable={!disabled}
                                    onClose={() => removeFile(file.name)}
                                >
                                    {file.name}
                                </Tag>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
