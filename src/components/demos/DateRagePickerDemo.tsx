import type { IDateRange } from '@/typings/date-range-picker.types';
import { useState } from 'react';
import { DateRangePicker } from '../ui/advanced/date-range-picker';

export const DateRagePickerDemo = () => {
    const [selectedRange, setSelectedRange] = useState<IDateRange>({
        start: null,
        end: null,
    });

    return (
        <>
            <DateRangePicker
                onChange={(range: IDateRange) => {
                    console.log('Range selecionado:', range);
                    setSelectedRange(range);
                }}
            />
            {selectedRange.start && selectedRange.end && (
                <p style={{ marginTop: '10px' }}>
                    De: {selectedRange.start.toLocaleDateString()} Até:{' '}
                    {selectedRange.end.toLocaleDateString()}
                </p>
            )}
        </>
    );
};
