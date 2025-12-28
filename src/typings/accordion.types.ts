/* ---------- Types ---------- */

type AccordionRootTypes = 'single' | 'multiple';
/* --------------------------- */

/* ---------- Interfaces ---------- */

export interface IAccordionRootProps {
    type?: AccordionRootTypes;
    defaultValue?: string | string[];
}
/* ------------------------------- */
