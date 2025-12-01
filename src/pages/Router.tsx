import DefaultLayout from "@/components/layouts/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home";
import PreviewPage from "./preview-page";

export function Router() {

    return (
        <>
            <Routes>
                {/* Rota da Home: Usa o Layout Padrão */}
                <Route path="/" element={
                    <DefaultLayout title="Home">
                        <HomePage />
                    </DefaultLayout>
                }
                />

                {/* Rota onde seu conteúdo gigante de preview será renderizado no <Outlet /> */}
                <Route path="/preview-page" element={
                    <DefaultLayout title="Preview Components">
                        <PreviewPage />
                    </DefaultLayout>
                }
                />

                {/* Rota de 404 */}
                <Route path="*" element={<h1>404 | Página Não Encontrada</h1>} />
            </Routes>
        </>
    )
}