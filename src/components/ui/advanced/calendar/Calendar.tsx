import { cn } from '@/lib/utils/cn';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import type { IDateRange } from '@/typings/date-range-picker.types';
import { useMemo, useState } from 'react';
import { Button } from '../../form-controls/button';
import './calendar.css';

interface ICalendarProps {
    /** Data opcionalmente selecionada (se for controlado externamente) */
    selected?: Date;
    /** Callback ao selecionar uma data */
    onSelect?: (date: Date) => void;
    /** Tamanho (small, medium, large) */
    size?: ComponentSize;
    /** Classe CSS adicional */
    className?: string;
    /** Propriedade de Range (para colorir o intervalo) */
    range?: IDateRange;
    /** Mês a ser exibido (para controle externo) */
    currentMonth?: Date;
    /** Função para mudar o mês (para controle externo) */
    setCurrentMonth?: (date: Date) => void;
    /** Desabilita a navegação (setas) */
    readOnlyNav?: boolean;
    /** Desabilita APENAS o botão de navegação para o próximo mês */
    disableNextNav?: boolean;
}

const WEEKDAYS_PT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export const Calendar = ({
    selected,
    onSelect,
    size = 'medium',
    className,
    range,
    currentMonth: externalMonth,
    setCurrentMonth: setExternalMonth,
    readOnlyNav = false,
    disableNextNav = false,
}: ICalendarProps) => {
    /**
     * Se o month for controlado externamente, usamos ele.
     */
    const isMonthControlled =
        externalMonth !== undefined && setExternalMonth !== undefined;

    const today = useMemo(() => new Date(), []);

    const [internalMonth, setInternalMonth] = useState(
        externalMonth || selected || today,
    );
    const currentMonth = isMonthControlled ? externalMonth : internalMonth;

    const setMonth = isMonthControlled ? setExternalMonth : setInternalMonth;

    const classSize = getComponentSize(size, 'calendar');

    // Usamos toLocaleString para ter certeza que a primeira letra do mês é maiúscula (pt-BR)
    const month = currentMonth.toLocaleString('pt-BR', { month: 'long' });
    const year = currentMonth.getFullYear();

    const firstDayIndex = new Date(year, currentMonth.getMonth(), 1).getDay();
    const daysInMonth = new Date(
        year,
        currentMonth.getMonth() + 1,
        0,
    ).getDate();

    const prevMonth = () => {
        if (readOnlyNav) return;
        const newDate = new Date(year, currentMonth.getMonth() - 1, 1);
        setMonth(newDate);
    };

    const nextMonth = () => {
        if (readOnlyNav || disableNextNav) return;
        const newDate = new Date(year, currentMonth.getMonth() + 1, 1);
        setMonth(newDate);
    };

    const handleSelect = (day: number) => {
        const selectedDate = new Date(year, currentMonth.getMonth(), day);
        selectedDate.setHours(0, 0, 0, 0);
        onSelect?.(selectedDate);
    };

    // Cálculo das células finais para completar a última linha
    const totalCells = firstDayIndex + daysInMonth;
    const remainingCells = (7 - (totalCells % 7)) % 7;

    /**
     * Funções auxiliares para estado dos dias
     */
    const normalizeDate = (date: Date | null) =>
        date ? new Date(date).setHours(0, 0, 0, 0) : null;

    const selectedTime = selected
        ? new Date(selected).setHours(0, 0, 0, 0)
        : null;
    const rangeStart = normalizeDate(range?.start || null);
    const rangeEnd = normalizeDate(range?.end || null);

    const isDayInRange = (dayTime: number) => {
        // Se range estiver incompleto, ou se for uma seleção de ponto único, ignora
        if (!rangeStart || !rangeEnd) return false;

        // Verifica se o dia está estritamente entre o início e o fim
        return dayTime > rangeStart && dayTime < rangeEnd;
    };

    /**
     * Define o tamanho dos botões de navegação baseado no tamanho do calendário
     */
    const navButtonSize = size === 'large' ? 'medium' : 'small';

    return (
        <>
            <div
                data-slot="calendar-root"
                className={cn('calendar', classSize, className)}
            >
                <header className="calendar-header">
                    {/* Botão de Mês Anterior */}
                    <Button
                        onClick={prevMonth}
                        aria-label="Mês Anterior"
                        size={navButtonSize}
                        visualVariant="ghost"
                        colorVariant="neutral"
                        disabled={readOnlyNav}
                        className="calendar-nav-button"
                    >
                        <span className="icon">←</span>
                    </Button>
                    <h4 className="calendar-title">
                        {month} {year}
                    </h4>

                    {/* Botão de Próximo Mês */}
                    <Button
                        onClick={nextMonth}
                        aria-label="Próximo Mês"
                        size={navButtonSize}
                        visualVariant="ghost"
                        colorVariant="neutral"
                        disabled={readOnlyNav || disableNextNav}
                        className="calendar-nav-button"
                    >
                        <span className="icon">→</span>
                    </Button>
                </header>

                <div className="calendar-weekdays">
                    {WEEKDAYS_PT.map((wd) => (
                        <span key={wd} className="calendar-weekday-label">
                            {wd}
                        </span>
                    ))}
                </div>

                <div className="calendar-grid">
                    {/* Células vazias antes do dia 1 */}
                    {Array.from({ length: firstDayIndex }).map((_, i) => (
                        <div
                            key={`empty-start-${i}`}
                            className="calendar-empty"
                        />
                    ))}

                    {/* Dias do mês */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const dateToCheck = new Date(
                            year,
                            currentMonth.getMonth(),
                            day,
                        );
                        dateToCheck.setHours(0, 0, 0, 0);
                        const dayTime = dateToCheck.getTime();

                        const isToday =
                            day === today.getDate() &&
                            currentMonth.getMonth() === today.getMonth() &&
                            currentMonth.getFullYear() === today.getFullYear();

                        const isSelected =
                            selectedTime === dateToCheck.getTime();
                        const isRangeStart = rangeStart === dayTime;
                        const isRangeEnd = rangeEnd === dayTime;
                        const isInRange = isDayInRange(dayTime);

                        /**
                         * Define a variante visual do botão do dia
                         */
                        let dayVisualClass = 'day-default';

                        if (isRangeStart || isRangeEnd) {
                            dayVisualClass = 'day-range-edge';
                        } else if (isInRange) {
                            dayVisualClass = 'day-range-middle';
                        } else if (isToday) {
                            dayVisualClass = 'day-today';
                        }

                        /**
                         * Adiciona data attributes para CSS complexo
                         */
                        const dataProps = {
                            'data-day': day,
                            'data-selected': isSelected,
                            'data-range-start': isRangeStart,
                            'data-range-end': isRangeEnd,
                            'data-in-range': isInRange,
                        };

                        return (
                            <div key={day} className="calendar-grid-cell">
                                <Button
                                    className={cn(
                                        'calendar-day-button',
                                        dayVisualClass,
                                    )}
                                    onClick={() => handleSelect(day)}
                                    visualVariant="text"
                                    colorVariant={
                                        isSelected ? 'primary' : 'neutral'
                                    }
                                    size={navButtonSize}
                                    {...dataProps}
                                >
                                    {day}
                                </Button>
                            </div>
                        );
                    })}

                    {/* Células vazias após o último dia */}
                    {Array.from({ length: remainingCells }).map((_, i) => (
                        <div
                            key={`empty-end-${i}`}
                            className="calendar-empty"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
