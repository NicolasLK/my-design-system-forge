import { useState } from 'react';
import { Slider } from '@/components/ui/form-controls/slider';
import { Divider } from '@/components/ui/foundations/divider';

export const SliderDemo = () => {
    const [volume, setVolume] = useState(50);

    return (
        <div className="u-flex u-flex-col u-items-start u-gap-6" style={{ width: '100%', maxWidth: '600px' }}>
            {/* Default */}
            <div className="u-flex u-flex-col u-gap-2 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Default:
                </span>
                <Slider defaultValue={30} />
            </div>

            <Divider spacing="small" />

            {/* With Label and Value */}
            <div className="u-flex u-flex-col u-gap-2 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    With Label & Value:
                </span>
                <Slider 
                    label="Volume" 
                    showValue 
                    value={volume} 
                    onValueChange={setVolume} 
                />
            </div>

            <Divider spacing="small" />

            {/* Formatted Value */}
            <div className="u-flex u-flex-col u-gap-2 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Formatted Value (Currency):
                </span>
                <Slider 
                    label="Price Range" 
                    min={0} 
                    max={1000} 
                    step={10}
                    defaultValue={250}
                    showValue 
                    formatValue={(val) => `$${val}`}
                />
            </div>

            <Divider spacing="small" />

            {/* With Description */}
            <div className="u-flex u-flex-col u-gap-2 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    With Description:
                </span>
                <Slider 
                    label="Brightness" 
                    defaultValue={75} 
                    description="Adjust the screen brightness level."
                />
            </div>

            <Divider spacing="small" />

            {/* Sizes */}
            <div className="u-flex u-flex-col u-gap-4 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Sizes:
                </span>
                <Slider label="Small (sm)" sliderSize="sm" defaultValue={20} />
                <Slider label="Medium (md)" sliderSize="md" defaultValue={50} />
                <Slider label="Large (lg)" sliderSize="lg" defaultValue={80} />
            </div>

            <Divider spacing="small" />

            {/* Error State */}
            <div className="u-flex u-flex-col u-gap-2 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Error State:
                </span>
                <Slider 
                    label="Threshold" 
                    defaultValue={10} 
                    error 
                    errorMessage="Value must be at least 20" 
                />
            </div>

            <Divider spacing="small" />

            {/* Disabled */}
            <div className="u-flex u-flex-col u-gap-2 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Disabled:
                </span>
                <Slider 
                    label="Disabled Slider" 
                    defaultValue={40} 
                    disabled 
                    showValue
                />
            </div>
        </div>
    );
};