import { FoundationsArticle } from '@/components/preview-articles/FoundationsArticle';
import { Link } from 'react-router-dom';

export default function FoundationsComponentsPage() {
    return (
        <>
            <section className="u-flex u-flex-col u-gap-6 u-p-6 u-max-w-full">
                <article className="u-flex u-flex-col u-gap-2">
                    <h1 className="u-text-lg u-text-bold">
                        Foundations Components
                    </h1>

                    <p className="u-text-gray u-text-base">
                        Componentes fundamentais para criação de outros
                        componentes do Design System.
                    </p>

                    <Link to="/preview" className="u-text-primary u-text-sm">
                        ⬅ Voltar para Preview
                    </Link>
                </article>

                <FoundationsArticle />
            </section>
        </>
    );
}
