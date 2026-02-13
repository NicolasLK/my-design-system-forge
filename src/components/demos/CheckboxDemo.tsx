import { useState } from 'react';
import { Checkbox } from '../ui/form-controls/checkbox';
import { Divider } from '../ui/foundations/divider';

export const CheckboxDemo = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="u-flex u-flex-col u-items-start u-gap-6">
            {/* Default */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Default:
                </span>
                <Checkbox label="Accept terms and conditions" />
            </div>

            <Divider spacing="small" />

            {/* Sizes */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Sizes:
                </span>
                <div className="u-flex u-items-center u-gap-4">
                    <Checkbox label="Small" checkboxSize="sm" />
                    <Checkbox label="Medium" checkboxSize="md" defaultChecked />
                    <Checkbox label="Large" checkboxSize="lg" />
                </div>
            </div>

            <Divider spacing="small" />

            {/* With Description */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    With Description:
                </span>
                <Checkbox
                    label="Subscribe to newsletter"
                    description="We will send you weekly updates about our products."
                />
            </div>

            <Divider spacing="small" />

            {/* Error State */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Error State:
                </span>
                <Checkbox
                    label="I agree to the privacy policy"
                    error
                    errorMessage="You must agree to the privacy policy to continue."
                />
            </div>

            <Divider spacing="small" />

            {/* Disabled */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Disabled:
                </span>
                <div className="u-flex u-gap-4">
                    <Checkbox label="Disabled Unchecked" disabled />
                    <Checkbox
                        label="Disabled Checked"
                        disabled
                        defaultChecked
                    />
                </div>
            </div>

            <Divider spacing="small" />

            {/* Controlled */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Controlled State:
                </span>
                <div className="u-flex u-items-center u-gap-4">
                    <Checkbox
                        label={checked ? 'Checked' : 'Unchecked'}
                        checked={checked}
                        onCheckedChange={setChecked}
                    />
                    <button
                        className="u-text-sm u-bg-gray-200 u-px-2 u-py-1 u-rounded"
                        onClick={() => setChecked(!checked)}
                    >
                        Toggle via Button
                    </button>
                </div>
            </div>
        </div>
    );
};