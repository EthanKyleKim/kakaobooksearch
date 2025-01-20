import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./components/Pages/Books/Books";
import Favorites from "./components/Pages/Favorites/Favorites";
import { ThemeProvider } from "styled-components";
import theme from "./components/Atoms/Theme";
import Header from "./components/Atoms/Header/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
