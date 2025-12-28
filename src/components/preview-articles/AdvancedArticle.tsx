import '@/components/preview-articles/styles/advanced-article.css';
import type { IAdvancedArticleProps } from '@/typings/preview-articles.types';

export const AdvancedArticle = ({ onSelect }: IAdvancedArticleProps) => {
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
                        onClick={() => onSelect('calendar')}
                    >
                        calendar
                    </button>

                    <button
                        className="advanced-article-card"
                        onClick={() => onSelect('date-range-picker')}
                    >
                        date-rage-picker
                    </button>

                    <button
                        className="advanced-article-card"
                        onClick={() => onSelect('carousel')}
                    >
                        carousel
                    </button>

                    <button
                        className="advanced-article-card"
                        onClick={() => onSelect('accordion')}
                    >
                        accordion
                    </button>

                    <button
                        className="advanced-article-card"
                        onClick={() => onSelect('loading-overlay')}
                    >
                        loading-overlay
                    </button>
                </div>
            </article>
        </>
    );
};
