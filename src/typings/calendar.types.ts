import type { ComponentSize } from '@/models/get-component-size';
import type { IDateRange } from './date-range-picker.types';

/* ---------- Types ---------- */
/* --------------------------- */

/* ---------- Interfaces ---------- */

export interface ICalendarProps {
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
/* ------------------------------- */
