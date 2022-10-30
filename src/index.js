import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import DirectMessagesStore from "./components/mobx/DirectMessagesStore";
import ExploreStore from "./components/mobx/ExploreStore";

const directMessagesStore = new DirectMessagesStore();
const exploreStore = new ExploreStore();

export const Context = createContext(({
    directMessagesStore,
    exploreStore
}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        directMessagesStore,
        exploreStore
    }}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Context.Provider>
);

