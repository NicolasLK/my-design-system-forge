import { AdvancedPreview } from '@/components/preview-articles/advanced/AdvancedPreview';
import { AdvancedArticle } from '@/components/preview-articles/AdvancedArticle';
import type { AdvancedComponentPreviewKey } from '@/typings/preview-articles.types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdvancedComponentsPage() {
    const [selected, setSelected] =
        useState<AdvancedComponentPreviewKey>('calendar');

    return (
        <>
            <section className="u-flex u-flex-col u-gap-6 u-p-6 u-max-w-full">
                <article className="u-flex u-flex-col u-gap-2">
                    <h1 className="u-text-lg u-text-bold">
                        Advanced Components
                    </h1>

                    <p className="u-text-gray u-text-base">
                        Componentes compostos, complexos ou com lógica avançada.
                    </p>

                    <Link to="/preview" className="u-text-primary u-text-sm">
                        ⬅ Voltar para Preview
                    </Link>
                </article>

                <AdvancedArticle onSelect={setSelected} />

                {selected && <AdvancedPreview component={selected} />}
            </section>
        </>
    );
}
