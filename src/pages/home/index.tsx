import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <section>
                <h1>Bem-vindo ao Design System Forge</h1>
                <p>
                    Explore a documentação completa navegando para a seção de
                    componentes no menu.
                </p>

                <article style={{ marginTop: '2rem' }}>
                    <h2>Visão Geral</h2>
                    <p>
                        Este ambiente utiliza o roteamento para gerenciar a
                        aplicação de layouts, Contexto de Tema para alternar
                        entre modos claro e escuro e o Fast Refresh está ativo.
                    </p>
                </article>
                <Link to="/preview" className="u-text-primary u-text-sm">
                    Ir para: Preview Page (Categories) ➡
                </Link>
            </section>
        </>
    );
}
