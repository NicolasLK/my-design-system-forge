import { useEffect, type RefObject } from 'react';

/**
 * Hook that detects clicks outside of the specified element.
 * @param ref - React ref object for the element to detect clicks outside of
 * @param handler - Callback function to execute when a click outside occurs
 * @param enabled - Whether the listener should be active (default: true)
 */
export const useClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T | null>,
    handler: (event: MouseEvent | TouchEvent) => void,
    enabled: boolean = true
) => {
    useEffect(() => {
        if (!enabled) return;

        const listener = (event: MouseEvent | TouchEvent) => {
            const el = ref.current;
            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler, enabled]);
};
