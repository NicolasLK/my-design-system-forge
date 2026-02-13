import { genUid } from '@/models/gen-uid';
import {
    createContext,
    useCallback,
    useContext,
    useState,
    type ReactNode,
} from 'react';

export type ToastSeverity = 'info' | 'success' | 'warning' | 'error';

export interface IToast {
    id: string;
    title?: string;
    description?: string;
    severity?: ToastSeverity;
    action?: ReactNode;
    duration?: number;
}

interface IToastContext {
    toasts: IToast[];
    toast: (props: Omit<IToast, 'id'>) => void;
    dismiss: (id: string) => void;
}

const ToastContext = createContext<IToastContext | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<IToast[]>([]);

    const toast = useCallback((props: Omit<IToast, 'id'>) => {
        const id = genUid(8);
        const newToast = { ...props, id };
        
        setToasts((prev) => [...prev, newToast]);

        if (props.duration !== Infinity) {
            setTimeout(() => {
                dismiss(id);
            }, props.duration || 5000);
        }
    }, []);

    const dismiss = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ toasts, toast, dismiss }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
