import { useState } from 'react';
import { Radio } from '../ui/form-controls/radio';
import { RadioGroup } from '../ui/form-controls/radio-group';
import { Divider } from '../ui/foundations/divider';

export const RadioDemo = () => {
    const [selectedOption, setSelectedOption] = useState('option-1');
    const [groupValue, setGroupValue] = useState('vertical');

    return (
        <div className="u-flex u-flex-col u-items-start u-gap-6">
            {/* Standalone Radios */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Standalone Radios:
                </span>
                <Radio
                    label="Option 1"
                    value="opt1"
                    name="default-group"
                    checked
                />
                <Radio label="Option 2" value="opt2" name="default-group" />
            </div>

            <Divider spacing="small" />

            {/* Radio Group - Vertical */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Radio Group (Vertical):
                </span>
                <RadioGroup label="Select a Plan" defaultValue="free">
                    <Radio value="free" label="Free Plan" description="Basic features for personal use." />
                    <Radio value="pro" label="Pro Plan" description="Advanced tools for professionals." />
                    <Radio value="enterprise" label="Enterprise" disabled description="Custom solutions for large teams." />
                </RadioGroup>
            </div>

            <Divider spacing="small" />

            {/* Radio Group - Horizontal */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Radio Group (Horizontal):
                </span>
                <RadioGroup label="Choose alignment" orientation="horizontal" defaultValue="left">
                    <Radio value="left" label="Left" />
                    <Radio value="center" label="Center" />
                    <Radio value="right" label="Right" />
                </RadioGroup>
            </div>

            <Divider spacing="small" />

             {/* Radio Group - Sizes */}
             <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Radio Group (Sizes):
                </span>
                <div className="u-flex u-gap-8">
                     <RadioGroup label="Small" radioSize="sm" defaultValue="1">
                        <Radio value="1" label="Option 1" />
                        <Radio value="2" label="Option 2" />
                    </RadioGroup>
                     <RadioGroup label="Large" radioSize="lg" defaultValue="1">
                        <Radio value="1" label="Option 1" />
                        <Radio value="2" label="Option 2" />
                    </RadioGroup>
                </div>
            </div>

            <Divider spacing="small" />

            {/* Radio Group - Error */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Radio Group (Error):
                </span>
                <RadioGroup 
                    label="Terms Agreement" 
                    error 
                    errorMessage="Please select an option to continue."
                >
                    <Radio value="yes" label="I Agree" />
                    <Radio value="no" label="I Disagree" />
                </RadioGroup>
            </div>

            <Divider spacing="small" />

            {/* Controlled Group */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Controlled Group:
                </span>
                <RadioGroup 
                    label="Select Layout" 
                    value={groupValue} 
                    onValueChange={setGroupValue}
                >
                    <Radio value="vertical" label="Vertical" />
                    <Radio value="horizontal" label="Horizontal" />
                </RadioGroup>
                
                <div className="u-mt-2 u-p-2 u-bg-gray-100 u-rounded u-text-xs">
                    Current Value: <strong>{groupValue}</strong>
                </div>
            </div>
        </div>
    );
};
