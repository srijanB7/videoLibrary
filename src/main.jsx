import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { VideoProvider } from "./contexts/VideoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <VideoProvider>
                    <App />
                </VideoProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
