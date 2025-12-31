import { FormControlsArticle } from '@/components/preview-articles/FormControlsArticle';
import { Link } from 'react-router-dom';

export default function FormControlsComponentsPage() {
    return (
        <>
            <section className="u-flex u-flex-col u-gap-6 u-p-6 u-max-w-full">
                <article className="u-flex u-flex-col u-gap-2">
                    <h1 className="u-text-lg u-text-bold">
                        Form-Controls Components
                    </h1>

                    <p className="u-text-gray u-text-base">....</p>

                    <Link to="/preview" className="u-text-primary u-text-sm">
                        ⬅ Voltar para Preview
                    </Link>
                </article>

                <FormControlsArticle />
            </section>
        </>
    );
}
