import { AccordionDemo } from '@/components/demos/AccordionDemo';
import { CalendarDemo } from '@/components/demos/CalendarDemo';
import { CarouselDemo } from '@/components/demos/CarouselDemo';
import { DateRagePickerDemo } from '@/components/demos/DateRagePickerDemo';
import { LoadingOverlayDemo } from '@/components/demos/LoadingOverlayDemo';
import type { AdvancedComponentPreviewKey } from '@/typings/preview-articles.types';
import './advanced-preview.css';

export const AdvancedPreview = ({
    component,
}: {
    component: AdvancedComponentPreviewKey;
}) => {
    return (
        <>
            <div className="advanced-preview">
                <h3 className="advanced-preview-title">exemplo: {component}</h3>

                <div className="advanced-preview-demo">
                    {component === 'calendar' && <CalendarDemo />}
                    {component === 'date-range-picker' && (
                        <DateRagePickerDemo />
                    )}
                    {component === 'carousel' && <CarouselDemo />}
                    {component === 'accordion' && <AccordionDemo />}
                    {component === 'loading-overlay' && <LoadingOverlayDemo />}
                </div>
            </div>
        </>
    );
};
