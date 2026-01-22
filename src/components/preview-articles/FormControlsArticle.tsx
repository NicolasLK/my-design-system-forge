import '@/components/preview-articles/styles/form-controls-article.css';
import type { FormControlsComponentPreviewKey } from '@/typings/preview-articles.types';
import { useState } from 'react';
import { FormControlsPreview } from './form-controls/FormControlsPreview';

const componentList: Array<{
    id: number;
    value: FormControlsComponentPreviewKey;
}> = [
    {
        id: 1,
        value: 'button',
    },
    {
        id: 2,
        value: 'input',
    },
    {
        id: 3,
        value: 'textarea',
    },
    {
        id: 4,
        value: 'switch',
    },
    {
        id: 5,
        value: 'select',
    },
    {
        id: 6,
        value: 'slider',
    },
    {
        id: 7,
        value: 'simple-date-picker',
    },
];

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
                    {componentList.map((comp) => (
                        <button
                            key={comp.id}
                            className="form-controls-article-card"
                            onClick={() => setActive(comp.value)}
                        >
                            {comp.value}
                        </button>
                    ))}
                </div>

                {active && <FormControlsPreview component={active} />}
            </article>
        </>
    );
};
