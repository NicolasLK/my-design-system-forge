import { useEffect, useState } from "react";

/**
 * Breakpoints utilizados no projeto (baseados no tokens.css)
 */
export const BREAKPOINTS = {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * Hook responsivo semelhante ao useIsMobile do ShadCN,
 * mas adaptado ao sistema de tokens do projeto.
 * @param breakpoint - valor do tamanho da tela
 * 
 * Exemplo:
 *   const isMobile = useBreakpoint("md"); // true se width < 768
 */
export function useBreakpoint(breakpoint: BreakpointKey = "md") {
    const target = BREAKPOINTS[breakpoint];

    const [matches, setMatches] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const query = `(max-width: ${target - 1}px)`;
        const mql = window.matchMedia(query);

        const onChange = () => {
            setMatches(window.innerWidth < target);
        };

        /**
         * Listener
         */
        mql.addEventListener("change", onChange);

        /**
         * Primeira avaliação
         */
        setMatches(window.innerWidth < target);

        return () => mql.removeEventListener("change", onChange);
    }, [target])

    return !!matches;
}