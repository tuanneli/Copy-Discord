import React from 'react';
import style from './MainWindow.module.scss'
import {Route, Routes} from "react-router-dom";
import DirectMessages from "./DirectMessages.jsx/DirectMessages";
import Explore from "./Explore/Explore";

const MainWindow = () => {
    return (
        <div className={style.container}>
            <Routes>
                <Route path={'/'} element={<DirectMessages/>}/>
                <Route path={'/discovery'} element={<Explore/>}/>
                <Route path={'/*'} element={<DirectMessages/>}/>
            </Routes>
        </div>
    );
};

export default MainWindow;