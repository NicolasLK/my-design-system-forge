import { ToastProvider, useToast } from '@/contexts/components/toast/ToastContext';
import { ToastViewport } from '@/components/ui/feedback/toast';
import { Button } from '@/components/ui/form-controls/button';
import { Divider } from '@/components/ui/foundations/divider';

const ToastTrigger = () => {
    const { toast } = useToast();

    return (
        <div className="u-flex u-flex-col u-items-start u-gap-6">
            <div className="u-flex u-gap-4">
                <Button 
                    onClick={() => toast({ 
                        title: 'Info', 
                        description: 'This is an informational message.', 
                        severity: 'info' 
                    })}
                >
                    Show Info
                </Button>

                <Button 
                    variant="primary" // Assuming success variant exists or similar
                    onClick={() => toast({ 
                        title: 'Success', 
                        description: 'Operation completed successfully!', 
                        severity: 'success' 
                    })}
                >
                    Show Success
                </Button>

                <Button 
                    variant="outline" // Assuming warning variant exists
                    onClick={() => toast({ 
                        title: 'Warning', 
                        description: 'Please be careful with this action.', 
                        severity: 'warning' 
                    })}
                >
                    Show Warning
                </Button>

                <Button 
                    variant="destructive"
                    onClick={() => toast({ 
                        title: 'Error', 
                        description: 'Something went wrong.', 
                        severity: 'error' 
                    })}
                >
                    Show Error
                </Button>
            </div>

            <Divider spacing="small" />

            <div className="u-flex u-gap-4">
                <Button 
                    variant="outline"
                    onClick={() => toast({ 
                        title: 'With Action', 
                        description: 'Do you want to undo this?', 
                        severity: 'info',
                        action: (
                            <Button size="sm" variant="ghost" onClick={() => alert('Undone!')}>
                                Undo
                            </Button>
                        )
                    })}
                >
                    With Action
                </Button>

                <Button 
                    variant="outline"
                    onClick={() => toast({ 
                        title: 'Persistent Toast', 
                        description: 'This toast will stay until you dismiss it.', 
                        severity: 'info',
                        duration: Infinity
                    })}
                >
                    Persistent
                </Button>
            </div>
        </div>
    );
};

export const ToastDemo = () => {
    return (
        <ToastProvider>
            <ToastTrigger />
            <ToastViewport />
        </ToastProvider>
    );
};
