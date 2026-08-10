import { ThemeProvider } from "./context/ThemeContext";
import IntroLoader from "./components/Loading/IntroLoader";
import Home from "./pages/Home/Home";

function App() {
    return (
        <ThemeProvider>
            <IntroLoader />
            <Home />
        </ThemeProvider>
    );
}

export default App;
