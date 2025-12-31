import '@/components/preview-articles/styles/advanced-article.css';
import type { AdvancedComponentPreviewKey } from '@/typings/preview-articles.types';
import { useState } from 'react';
import { AdvancedPreview } from './advanced/AdvancedPreview';

export const AdvancedArticle = () => {
    const [active, setActive] =
        useState<AdvancedComponentPreviewKey>('calendar');

    return (
        <>
            <article className="advanced-article">
                <h2 className="advanced-article-title">Advanced Components</h2>

                <p className="advanced-article-description">
                    Componentes complexos, compostos ou com maior nível de
                    abstração.
                </p>

                <div className="advanced-article-grid">
                    {/* Exemplo de placeholders */}
                    <button
                        className="advanced-article-card"
                        onClick={() => setActive('calendar')}
                    >
                        calendar
                    </button>

                    <button
                        className="advanced-article-card"
                        onClick={() => setActive('date-range-picker')}
                    >
                        date-rage-picker
                    </button>

                    <button
                        className="advanced-article-card"
                        onClick={() => setActive('carousel')}
                    >
                        carousel
                    </button>

                    <button
                        className="advanced-article-card"
                        onClick={() => setActive('accordion')}
                    >
                        accordion
                    </button>

                    <button
                        className="advanced-article-card"
                        onClick={() => setActive('loading-overlay')}
                    >
                        loading-overlay
                    </button>
                </div>

                {active && <AdvancedPreview component={active} />}
            </article>
        </>
    );
};
