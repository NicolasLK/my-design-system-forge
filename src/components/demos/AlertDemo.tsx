import {
    AlertDescription,
    AlertIcon,
    AlertRoot,
    AlertTitle,
} from '@/components/ui/feedback/alert';
import { Divider } from '@/components/ui/foundations/divider';
import {
    AlertCircleIcon,
    AlertTriangleIcon,
    CheckCircleIcon,
    InfoIcon,
} from './IconsDemo';

export const AlertDemo = () => {
    return (
        <div className="u-flex u-flex-col u-items-start u-gap-6 u-w-full">
            {/* Subtle (Default) */}
            <div className="u-flex u-flex-col u-gap-4 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Subtle (Default):
                </span>
                
                <AlertRoot severity="info">
                    <AlertIcon><InfoIcon /></AlertIcon>
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                        This is an informational alert to guide users.
                    </AlertDescription>
                </AlertRoot>

                <AlertRoot severity="success">
                    <AlertIcon><CheckCircleIcon /></AlertIcon>
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>
                        Operation completed successfully!
                    </AlertDescription>
                </AlertRoot>

                <AlertRoot severity="warning">
                    <AlertIcon><AlertTriangleIcon /></AlertIcon>
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>
                        Please be careful with your next actions.
                    </AlertDescription>
                </AlertRoot>

                <AlertRoot severity="error">
                    <AlertIcon><AlertCircleIcon /></AlertIcon>
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        Something went wrong. Please try again.
                    </AlertDescription>
                </AlertRoot>
            </div>

            <Divider spacing="small" />

            {/* Solid Variant */}
            <div className="u-flex u-flex-col u-gap-4 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Solid Variant:
                </span>
                
                <AlertRoot severity="info" variant="solid">
                    <AlertIcon><InfoIcon /></AlertIcon>
                    <AlertTitle>New Update Available</AlertTitle>
                    <AlertDescription>
                        A new software version is available for download.
                    </AlertDescription>
                </AlertRoot>

                <AlertRoot severity="error" variant="solid">
                    <AlertIcon><AlertCircleIcon /></AlertIcon>
                    <AlertTitle>Critical Error</AlertTitle>
                    <AlertDescription>
                        Unable to connect to the server.
                    </AlertDescription>
                </AlertRoot>
            </div>

            <Divider spacing="small" />

            {/* Outline Variant */}
            <div className="u-flex u-flex-col u-gap-4 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Outline Variant:
                </span>
                
                <AlertRoot severity="success" variant="outline">
                    <AlertIcon><CheckCircleIcon /></AlertIcon>
                    <AlertTitle>Profile Updated</AlertTitle>
                    <AlertDescription>
                        Your profile settings have been saved.
                    </AlertDescription>
                </AlertRoot>

                <AlertRoot severity="warning" variant="outline">
                    <AlertIcon><AlertTriangleIcon /></AlertIcon>
                    <AlertTitle>Storage Low</AlertTitle>
                    <AlertDescription>
                        You are running low on storage space.
                    </AlertDescription>
                </AlertRoot>
            </div>
        </div>
    );
};
