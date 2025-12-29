import { useState } from 'react';
import { LoadingOverlay } from '../ui/advanced/loading-overlay';
import { Button } from '../ui/form-controls/button';

export const LoadingOverlayDemo = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <LoadingOverlay active={isLoading} message="Carregando dados..." />
            <p>Conteúdo da página</p>

            <Button colorVariant="primary" onClick={() => setIsLoading(true)}>
                Ativar Loading
            </Button>
        </>
    );
};
