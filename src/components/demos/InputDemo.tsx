import { Input } from '../ui/form-controls/input';
import { Divider } from '../ui/foundations/divider';
import { EyeOffIcon } from './IconsDemo';

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
                        placeholder="Name"
                        description="Choose a unique username for your account."
                    />
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-gap-4">
                    <span className="u-text-sm u-text-gray">With label:</span>
                    <Input
                        label="Email"
                        type="email"
                        placeholder="m@example.com"
                        description="We will never share your email."
                    />
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-gap-4">
                    <span className="u-text-sm u-text-gray">Disabled:</span>
                    <Input
                        label="Disabled"
                        placeholder="You can't type here"
                        description="This field is currently disabled."
                        disabled
                    />
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-gap-4">
                    <span className="u-text-sm u-text-gray">Invalid:</span>
                    <Input
                        label="Email"
                        type="email"
                        placeholder="m@example.com"
                        error
                        errorMessage="Please enter a valid email address."
                    />
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-gap-4">
                    <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                        required:
                    </span>
                    <Input
                        label="Password"
                        type="password"
                        required
                        description="This field must be filled out."
                        iconSuffix={<EyeOffIcon />}
                    />
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-gap-4">
                    <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                        file:
                    </span>
                    <Input
                        label="Upload file"
                        type="file"
                        description="Select a picture to upload."
                    />
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-gap-4">
                    <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                        prefix:
                    </span>
                    <Input
                        label="Password"
                        type="password"
                        iconPrefix={<EyeOffIcon />}
                    />
                </div>
            </div>
        </>
    );
};
