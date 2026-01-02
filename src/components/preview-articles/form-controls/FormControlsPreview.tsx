import { ButtonDemo } from '@/components/demos/ButtonDemo';
import type { FormControlsComponentPreviewKey } from '@/typings/preview-articles.types';
import './form-controls-preview.css';

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
                    {component === 'button' && <ButtonDemo />}
                </div>
            </div>
        </>
    );
};
