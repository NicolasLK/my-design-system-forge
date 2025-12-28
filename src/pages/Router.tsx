import DefaultLayout from '@/components/layouts/DefaultLayout/DefaultLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './home';
import PreviewPage from './preview';
import AdvancedComponentsPage from './preview/categories/advanced-components';

export function Router() {
    return (
        <>
            <Routes>
                {/* Layout padrão */}
                <Route
                    path="/"
                    element={<DefaultLayout title="Design System Forge" />}
                >
                    {/* Home */}
                    <Route index element={<HomePage />} />

                    {/* Preview */}
                    <Route path="/preview">
                        {/* Página /preview */}
                        <Route index element={<PreviewPage />} />

                        {/* Página Advanced Components */}
                        <Route
                            path="categories/advanced-components"
                            element={<AdvancedComponentsPage />}
                        />
                    </Route>
                </Route>

                {/* Rota de 404 */}
                <Route
                    path="*"
                    element={<h1>404 | Página Não Encontrada</h1>}
                />
            </Routes>
        </>
    );
}
