import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookSearch from "./components/Pages/BookSearch/BookSearch";
import Favorites from "./components/Pages/Favorites/Favorites";
import { ThemeProvider } from "styled-components";
import theme from "./components/Atoms/Theme";
import Header from "./components/Atoms/Header/Header";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BookSearch />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
