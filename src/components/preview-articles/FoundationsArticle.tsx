import '@/components/preview-articles/styles/foundations-article.css';
import type { FoundationsComponentPreviewKey } from '@/typings/preview-articles.types';
import { useState } from 'react';

const componentList: Array<{
    id: number;
    value: FoundationsComponentPreviewKey;
}> = [
    {
        id: 1,
        value: 'typography',
    },
    {
        id: 2,
        value: 'label',
    },
    {
        id: 3,
        value: 'divider',
    },
];

export const FoundationsArticle = () => {
    const [active, setActive] =
        useState<FoundationsComponentPreviewKey>('typography');

    return (
        <>
            <article className="foundations-article">
                <h2 className="foundations-article-title">
                    Foundations Components
                </h2>

                <p className="foundations-article-description">
                    Componentes de base fundamentais do sistema.
                </p>

                <div className="foundations-article-grid">
                    {componentList.map((comp) => (
                        <button
                            key={comp.id}
                            onClick={() => setActive(comp.value)}
                            className="foundations-article-card"
                        >
                            {comp.value}
                        </button>
                    ))}
                </div>

                {/* {active && <FoundationsPreview component={active} />} */}
            </article>
        </>
    );
};
