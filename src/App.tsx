import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/theme/ThemeProvider';
import { Router } from './pages/Router';
import './styles/base.css';
import './styles/tokens/index.css';
import './styles/utilities.css';

function App() {
    return (
        <>
            <ThemeContextProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </ThemeContextProvider>
        </>
    );
}

export default App;
