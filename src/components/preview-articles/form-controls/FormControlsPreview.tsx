import { ButtonDemo } from '@/components/demos/ButtonDemo';
import { InputDemo } from '@/components/demos/InputDemo';
import { SelectDemo } from '@/components/demos/SelectDemo';
import { SimpleDatePickerDemo } from '@/components/demos/SimpleDatePickerDemo';
import { SliderDemo } from '@/components/demos/SliderDemo';
import { SwitchDemo } from '@/components/demos/SwitchDemo';
import { TextareaDemo } from '@/components/demos/TextareaDemo';
import type { FormControlsComponentPreviewKey } from '@/typings/preview-articles.types';
import type { JSX } from 'react';
import './form-controls-preview.css';

const componentList: Record<FormControlsComponentPreviewKey, JSX.Element> = {
    button: <ButtonDemo />,
    input: <InputDemo />,
    textarea: <TextareaDemo />,
    switch: <SwitchDemo />,
    select: <SelectDemo />,
    slider: <SliderDemo />,
    'simple-date-picker': <SimpleDatePickerDemo />,
};

export const FormControlsPreview = ({
    component,
}: {
    component: FormControlsComponentPreviewKey;
}) => {
    return (
        <>
            <div className="form-controls-preview">
                <h3 className="form-controls-preview-title">
                    exemplo: {component}
                </h3>

                <div className="form-controls-preview-demo">
                    {componentList[component] || (
                        <p>Componente não encontrado</p>
                    )}
                </div>
            </div>
        </>
    );
};
