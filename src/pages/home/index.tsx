
function HomePage() {

    return (
        <>
            <article>
                <h1>Bem-vindo ao Design System Preview</h1>
                <p>Explore a documentação completa navegando para a seção de componentes no menu.</p>

                <section style={{ marginTop: '2rem' }}>
                    <h2>Visão Geral</h2>
                    <p>Este ambiente utiliza o roteamento para gerenciar a aplicação de layouts, Contexto de Tema para alternar entre modos claro e escuro e o Fast Refresh está ativo.</p>
                </section>
                <span>
                    <a href="/preview-page">Página de Preview</a>
                </span>
            </article>
        </>
    )
}

export default HomePage