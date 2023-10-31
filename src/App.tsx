import { ThemeProvider } from "./contexts";
import { GlobalStyle } from "./globalStylesApp";
import { AppRouters } from "./pages/routers";

function App() {
  return (
    <ThemeProvider>

      <GlobalStyle />
      <AppRouters />

    </ThemeProvider>
  );
}

export default App;
