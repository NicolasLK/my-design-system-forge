import "../styles/components/loading-overlay.css"
import { Spinner } from "./Spinner"

interface ILoadingOverlayProps {
    active: boolean
    message?: string
}

export const LoadingOverlay = ({ active, message }: ILoadingOverlayProps) => {
    return (
        <>
            <div className={`loading-overlay ${active ? "active" : ""}`}>
                <div className="loading-overlay-content">
                    <Spinner size="large" variant="primary" />
                    {message && <p className="loading-message">{message}</p>}
                </div>
            </div>
        </>
    )
}
