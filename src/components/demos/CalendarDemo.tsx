import { Calendar } from '../ui/advanced/calendar';

export const CalendarDemo = () => {
    return (
        <>
            <Calendar
                onSelect={(date) => console.log('Data selecionada:', date)}
            />
        </>
    );
};
