/* eslint-disable @typescript-eslint/no-explicit-any */

import { Children, cloneElement, createElement, Fragment, isValidElement, type ReactNode } from "react";

interface ICreateComponentInjection {
    children: ReactNode;
    injected: Record<string, unknown>;
    transformer: (
        elementType: any,
        originalProps: Record<string, unknown>,
        injected: Record<string, unknown>
    ) => Record<string, unknown> | null;
}

/**
 * Aplica uma função de transformação a cada elemento React,
 * injetando props conforme necessário.
 *
 * @param children Nó(s) React a serem processados
 * @param transformer Função que recebe o elemento atual e props injetados
 * @param injected Objeto contendo as props que deseja injetar
 * @returns ReactNode com props modificadas
 */
export function createComponentInjection({
    children,
    injected,
    transformer
}: ICreateComponentInjection): ReactNode {

    /**
     * Função recursiva que percorre e modifica os children
     */
    const walk = (node: ReactNode): ReactNode => {
        if (!isValidElement(node)) return node;

        const elementType = node.type;
        const originalProps = node.props as Record<string, any>;

        /**
         * Props extras a serem aplicadas neste elemento
         */
        const extraProps = transformer(elementType, originalProps, injected) || {}

        /**
         * Normalização dos children
         */
        let newChildren: ReactNode = originalProps.children;

        if (newChildren) {
            const mapped = Children.map(newChildren, walk);

            if (!mapped || mapped.length === 0) {
                newChildren = null;
            } else if (mapped.length === 1) {
                newChildren = mapped[0];
            } else {
                newChildren = createElement(Fragment, null, mapped);
            }
        }

        return cloneElement(node, { ...originalProps, ...extraProps }, newChildren);
    }

    const mapped = Children.map(children, walk);

    if (!mapped || mapped.length === 0) return null;

    if (mapped.length === 1) return mapped[0];

    return createElement(Fragment, null, mapped);
}