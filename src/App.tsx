import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from '@styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@styles/themes/default';
import { OrderProvider } from './context/OrderContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderProvider>
          <Router />
        </OrderProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
