import { Routes, Route } from "react-router";
import { Home } from "./pages/Home/Home";
import "./App.css";
import { useTheme } from "./contexts/ThemeContext";
import { Explore } from "./pages/Explore/Explore";
import { Playlist } from "./pages/Playlist/Playlist";
import { Watchlater } from "./pages/Watchlater/Watchlater";
import { Categorylisting } from "./pages/Categorylisting/Categorylisting";
import { Singlevideo } from "./pages/Singlevideo/Singlevideo";

function App() {
  const { dark } = useTheme();
    return (
        <div className={dark ? "dark-them" : "light-theme" }>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/watchlater" element={<Watchlater />}/>
                <Route path="/:category" element={<Categorylisting />}/>
                <Route path="/video/:id" element={<Singlevideo />} />
            </Routes>
        </div>
    );
}

export default App;
