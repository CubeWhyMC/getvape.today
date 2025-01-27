import './App.css'
import Logo from "./components/Logo/Logo.tsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.tsx";
import CanvasBackground from "./components/CanvasBackground/CanvasBackground.tsx";
import ForkOnGitHub from "./components/ForkOnGitHub/ForkOnGitHub.tsx";

function App() {

    return (
        <>
            <Logo/>
            <ForkOnGitHub repository={"CubeWhyMC/DingZhenServlet"}/>
            <CanvasBackground/>
            <HashRouter>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                </Routes>
            </HashRouter>
        </>
    )
}

export default App
