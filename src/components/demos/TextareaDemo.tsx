import { Textarea } from '@/components/ui/form-controls/textarea';
import { Divider } from '@/components/ui/foundations/divider';

export const TextareaDemo = () => {
    return (
        <div className="u-flex u-flex-col u-items-start u-gap-6">
            {/* Default */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Default:
                </span>
                <Textarea placeholder="Type something here..." />
            </div>

            <Divider spacing="small" />

            {/* With Label and Description */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Label & Description:
                </span>
                <Textarea
                    label="Biography"
                    placeholder="Tell us a little about yourself..."
                    description="This description will be displayed on your public profile."
                />
            </div>

            <Divider spacing="small" />

            {/* Sizes */}
            <div className="u-flex u-flex-col u-gap-4 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Sizes:
                </span>
                <div className="u-flex u-items-start u-gap-4">
                    <Textarea size="sm" placeholder="Small (sm)" />
                    <Textarea size="md" placeholder="Medium (md)" />
                    <Textarea size="lg" placeholder="Large (lg)" />
                </div>
            </div>

            <Divider spacing="small" />

            {/* Error State */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Error State:
                </span>
                <Textarea
                    label="Comment"
                    placeholder="Enter your comment..."
                    error
                    errorMessage="The comment cannot be empty."
                />
            </div>

            <Divider spacing="small" />

            {/* Disabled */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Disabled:
                </span>
                <Textarea
                    label="Feedback Sent"
                    defaultValue="Thank you for your feedback! Editing is disabled."
                    disabled
                />
            </div>

            <Divider spacing="small" />

            {/* Full Width */}
            <div className="u-flex u-flex-col u-gap-2 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Full Width:
                </span>
                <Textarea
                    fullWidth
                    placeholder="This textarea takes up 100% of the parent container's width."
                    rows={4}
                />
            </div>
        </div>
    );
};
