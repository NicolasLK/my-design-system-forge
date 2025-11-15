import { useState, type DragEvent } from "react"
import "../styles/components/fileinput.css"

interface IFileInputProps {
    label?: string
    accept?: string
    multiple?: boolean
    disabled?: boolean
    onChange?: (files: File[]) => void
}

export const FileInput = ({
    label,
    accept,
    multiple = false,
    disabled = false,
    onChange
}: IFileInputProps) => {

    const [fileNames, setFileNames] = useState<string[]>([])
    const [dragActive, setDragActive] = useState(false)

    const handleFiles = (files: FileList) => {
        const fileArray = Array.from(files)
        setFileNames(fileArray.map(f => f.name))
        onChange?.(fileArray)
    }

    const onDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragActive(true)
    }

    const onDragLeave = () => setDragActive(false)

    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragActive(false)
        if (!disabled && e.dataTransfer.files.length > 0) {
            handleFiles(e.dataTransfer.files)
        }
    }

    return (
        <>
            <div className={`fileinput-wrapper ${disabled ? "disabled" : ""}`}>
                {label && <label className="fileinput-label">{label}</label>}

                <div
                    className={`fileinput-dropzone ${dragActive ? "dragactive" : ""}`}
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                >
                    <input
                        type="file"
                        multiple={multiple}
                        accept={accept}
                        disabled={disabled}
                        onChange={(e) => e.target.files && handleFiles(e.target.files)}
                    />

                    <p className="fileinput-text">
                        Arraste arquivos aqui<br />
                        <span>ou clique para selecionar</span>
                    </p>
                </div>

                {fileNames.length > 0 && (
                    <ul className="fileinput-list">
                        {fileNames.map(name => (
                            <li key={name}>{name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}
