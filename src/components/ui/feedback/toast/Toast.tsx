import { useToast, type IToast } from '@/contexts/components/toast/ToastContext';
import { cn } from '@/lib/utils/cn';
import { getComponentColor } from '@/models/get-component-color';
import './toast.css';

/* ============================================================
 * 🍞 Toast Component (Individual)
 * ============================================================ */

interface ToastProps extends Omit<IToast, 'duration'> {
    onClose: () => void;
}

export const Toast = ({
    id,
    title,
    description,
    severity = 'info',
    action,
    onClose,
}: ToastProps) => {
    const severityClass = getComponentColor(severity, 'toast-border');
    const iconColorClass = getComponentColor(severity, 'toast-icon');

    return (
        <div
            role="status"
            aria-live="polite"
            className={cn('toast', severityClass)}
            data-severity={severity}
        >
            <div className="toast-content">
                {title && <strong className="toast-title">{title}</strong>}
                {description && <p className="toast-description">{description}</p>}
            </div>
            
            {action && <div className="toast-action">{action}</div>}

            <button
                onClick={onClose}
                className="toast-close"
                aria-label="Close"
            >
                ✕
            </button>
        </div>
    );
};

/* ============================================================
 * 📋 Toast Viewport (List Container)
 * ============================================================ */

export const ToastViewport = () => {
    const { toasts, dismiss } = useToast();

    return (
        <div className="toast-viewport">
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    {...toast}
                    onClose={() => dismiss(toast.id)}
                />
            ))}
        </div>
    );
};