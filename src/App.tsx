import { BrowserRouter } from 'react-router-dom';
import { Router } from './pages/Router';
import './styles/base.css';
import './styles/tokens/index.css';
import './styles/utilities.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </>
    );
}

export default App;
