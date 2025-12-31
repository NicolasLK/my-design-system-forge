import '@/components/preview-articles/styles/form-controls-article.css';
import type { FormControlsComponentPreviewKey } from '@/typings/preview-articles.types';
import { useState } from 'react';
import { FormControlsPreview } from './form-controls/FormControlsPreview';

export const FormControlsArticle = () => {
    const [active, setActive] =
        useState<FormControlsComponentPreviewKey>('button');

    return (
        <>
            <article className="form-controls-article">
                <h2 className="form-controls-article-title">
                    Form-Controls Components
                </h2>

                <p className="form-controls-article-description">
                    Inputs, botões e controles responsáveis pela captura e envio
                    de dados.
                </p>

                <div className="form-controls-article-grid">
                    <button
                        className="form-controls-article-card"
                        onClick={() => setActive('button')}
                    >
                        button
                    </button>
                    <button
                        className="form-controls-article-card"
                        onClick={() => setActive('input')}
                    >
                        input
                    </button>
                    <button
                        className="form-controls-article-card"
                        onClick={() => setActive('textarea')}
                    >
                        textarea
                    </button>
                    <button
                        className="form-controls-article-card"
                        onClick={() => setActive('switch')}
                    >
                        switch
                    </button>
                    <button
                        className="form-controls-article-card"
                        onClick={() => setActive('select')}
                    >
                        select
                    </button>
                    <button
                        className="form-controls-article-card"
                        onClick={() => setActive('slider')}
                    >
                        slider
                    </button>
                    <button
                        className="form-controls-article-card"
                        onClick={() => setActive('simple-date-picker')}
                    >
                        simple-date-picker
                    </button>
                </div>

                {active && <FormControlsPreview component={active} />}
            </article>
        </>
    );
};
