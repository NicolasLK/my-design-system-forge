import { Input } from '../ui/form-controls/input';
import { Divider } from '../ui/foundations/divider';

export const InputDemo = () => {
    return (
        <>
            <div className="u-flex u-flex-col u-items-start u-gap-6">
                {/* ------ */}
                <div className="u-flex u-gap-4">
                    <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                        default:
                    </span>
                    <Input
                        label=""
                        type="text"
                        placeholder="Name"
                        description="Choose a unique username for your account."
                    />
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-gap-4">
                    <span className="u-text-sm u-text-gray">With label:</span>
                    <Input label="Name" type="text" placeholder="Name" />
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-gap-4">
                    <span className="u-text-sm u-text-gray">With label:</span>
                    <Input label="Name" type="text" placeholder="Name" />
                </div>
            </div>
        </>
    );
};
