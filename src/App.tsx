import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { TransactionsProvider } from "./contexts/transactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <TransactionsProvider>
          <Router />
        </TransactionsProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}