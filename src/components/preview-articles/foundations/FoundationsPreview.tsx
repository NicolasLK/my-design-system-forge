import { DividerDemo } from '@/components/demos/DividerDemo';
import { LabelDemo } from '@/components/demos/LabelDemo';
import { TypographyDemo } from '@/components/demos/TypographyDemo';
import type { FoundationComponentPreviewKey } from '@/typings/preview-articles.types';
import './foundations-preview.css';

export const FoundationsPreview = ({
    component,
}: {
    component: FoundationComponentPreviewKey;
}) => {
    return (
        <>
            <div className="foundations-preview">
                <h3 className="foundations-preview-title">
                    exemplo: {component}
                </h3>

                <div className="foundations-preview-demo">
                    {component === 'typography' && <TypographyDemo />}
                    {component === 'divider' && <DividerDemo />}
                    {component === 'label' && <LabelDemo />}
                </div>
            </div>
        </>
    );
};
