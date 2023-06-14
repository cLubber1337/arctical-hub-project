import "./styles/index.scss"
import {Counter} from "./components/Counter";
import {Link, Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import MainPageLazy from "./pages/MainPage/MainPage.Lazy";
import AboutPageLazy from "./pages/AboutPage/AboutPage.Lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme()


    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to="/about">About</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/">Main</Link>
            <button onClick={toggleTheme}> Toggle theme</button>
            <Suspense fallback={<div>Loading...</div>}>

                <Routes>
                    <Route path="/" element={<MainPageLazy/>}/>
                    <Route path="/about" element={<AboutPageLazy/>}/>
                    <Route path="/counter" element={<Counter/>}/>
                </Routes>

            </Suspense>
        </div>
    );
};

export default App;