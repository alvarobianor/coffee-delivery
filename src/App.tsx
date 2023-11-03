import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from '@styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@styles/themes/default';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <Router />
                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
