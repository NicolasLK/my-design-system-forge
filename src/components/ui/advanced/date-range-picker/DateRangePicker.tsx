import { cn } from '@/lib/utils/cn';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import type { IDateRange } from '@/typings/date-range-picker.types';
import { useMemo, useState } from 'react';
import { Calendar } from '../calendar';
import './date-range-picker.css';

interface IDateRangePickerProps {
    /** Tamanho (small, medium, large) */
    size?: ComponentSize;
    /** Callback ao alterar o intervalo */
    onChange?: (range: IDateRange) => void;
    /** Define a largura total */
    full?: boolean;
    /** Classe CSS adicional */
    className?: string;
}

const normalizeDate = (date: Date | null): Date | null => {
    if (!date) return null;
    const normalized = new Date(date);
    normalized.setHours(0, 0, 0, 0);
    return normalized;
};

export const DateRangePicker = ({
    size = 'medium',
    onChange,
    full = false,
    className,
}: IDateRangePickerProps) => {
    /**
     * today || new Date() garante que a data inicial seja sempre um objeto Date
     */
    const today = useMemo(() => normalizeDate(new Date()), []);

    const [range, setRange] = useState<IDateRange>({ start: null, end: null });
    const [step, setStep] = useState<'start' | 'end'>('start');

    // Mês visível no primeiro calendário (Left Calendar)
    const [visibleMonth, setVisibleMonth] = useState<Date>(today || new Date());

    /**
     * Mês visível no segundo calendário (Right Calendar) - Deve ser sempre o próximo
     */
    const nextMonth = useMemo(() => {
        const next = new Date(
            visibleMonth.getFullYear(),
            visibleMonth.getMonth() + 1,
            1,
        );
        return next;
    }, [visibleMonth]);

    const isFull = full || className?.includes('range-picker-full');
    const classSize = getComponentSize(size, 'range-picker');

    /**
     * Função principal de seleção de data.
     * @param date A data clicada (já normalizada para 00:00:00)
     */
    const handleSelect = (date: Date) => {
        const selectedDate = normalizeDate(date)!;
        const currentStart = normalizeDate(range.start);
        const currentEnd = normalizeDate(range.end);

        let newStart = currentStart;
        let newEnd = currentEnd;
        let newStep = step;

        if (
            step === 'start' ||
            (currentStart && selectedDate.getTime() < currentStart.getTime())
        ) {
            // Caso 1: Início da seleção OU seleção anterior ao início atual
            newStart = selectedDate;
            newEnd = null; // Reseta o fim
            newStep = 'end';
        } else if (step === 'end') {
            if (
                currentStart &&
                selectedDate.getTime() < currentStart.getTime()
            ) {
                // Caso 2: Tentou selecionar o fim, mas é anterior ao início (reseta e define novo início)
                newStart = selectedDate;
                newEnd = null;
                newStep = 'end';
            } else {
                // Caso 3: Seleção válida de fim
                newEnd = selectedDate;
                newStep = 'start'; // Volta para o início para próxima seleção
            }
        }

        const newRange = { start: newStart, end: newEnd };

        setRange(newRange);
        setStep(newStep);

        // Atualiza o mês visível no calendário da esquerda se a seleção for muito distante
        if (newStart) {
            const newStartTime = newStart.getTime();
            const currentMonthTime =
                normalizeDate(visibleMonth)?.getTime() || 0;

            // Se o novo início estiver no mês do segundo calendário ou depois
            if (newStartTime >= nextMonth.getTime()) {
                // Move o calendário da esquerda para o mês do novo início
                setVisibleMonth(new Date(newStartTime));
            }
            // Se o novo início for muito anterior ao calendário da esquerda
            else if (newStartTime < currentMonthTime) {
                setVisibleMonth(new Date(newStartTime));
            }
        }

        // Se o range estiver completo, chama o onChange
        if (newRange.start && newRange.end) {
            onChange?.(newRange);
        }
    };

    const toBR = (date: Date | null) =>
        date ? date.toLocaleDateString('pt-BR') : '—';

    return (
        <>
            <div
                data-slot="range-picker-root"
                className={cn(
                    'range-picker-root',
                    classSize,
                    isFull && 'range-picker-full',
                    className,
                )}
            >
                <div className="range-header">
                    <div
                        data-step="start"
                        data-active={step === 'start'}
                        className={cn(
                            'range-display',
                            step === 'start' && 'range-active',
                        )}
                    >
                        <strong className="range-label">Início:</strong>
                        <span className="range-date">{toBR(range.start)}</span>
                    </div>
                    <div
                        data-step="end"
                        data-active={step === 'end'}
                        className={cn(
                            'range-display',
                            step === 'end' && 'range-active',
                        )}
                    >
                        <strong className="range-label">Fim:</strong>
                        <span className="range-date">{toBR(range.end)}</span>
                    </div>
                </div>

                <div className="range-calendars">
                    {/* Calendar 1: Mês Atual / Navegação */}
                    <Calendar
                        selected={range.start || undefined}
                        onSelect={handleSelect}
                        currentMonth={visibleMonth}
                        setCurrentMonth={setVisibleMonth}
                        range={range}
                        size={size}
                        disableNextNav={true}
                    />

                    {/* Calendar 2: Próximo Mês / Somente Seleção (não navega) */}
                    <Calendar
                        selected={range.end || undefined}
                        onSelect={handleSelect}
                        currentMonth={nextMonth}
                        range={range}
                        size={size}
                        readOnlyNav={true}
                    />
                </div>
            </div>
        </>
    );
};
