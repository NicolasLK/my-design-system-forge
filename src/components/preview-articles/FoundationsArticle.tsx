import '@/components/preview-articles/styles/foundations-article.css';
import type { FoundationComponentPreviewKey } from '@/typings/preview-articles.types';
import { useState } from 'react';
import { FoundationsPreview } from './foundations/FoundationsPreview';

export const FoundationsArticle = () => {
    const [active, setActive] =
        useState<FoundationComponentPreviewKey>('typography');

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
                    <button
                        onClick={() => setActive('typography')}
                        className="foundations-article-card"
                    >
                        typography
                    </button>
                    <button
                        onClick={() => setActive('divider')}
                        className="foundations-article-card"
                    >
                        divider
                    </button>
                    <button
                        onClick={() => setActive('label')}
                        className="foundations-article-card"
                    >
                        label
                    </button>
                </div>

                {active && <FoundationsPreview component={active} />}
            </article>
        </>
    );
};
