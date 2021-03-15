import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/store-redux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/lib/components/Provider";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}>
                <React.StrictMode>
                    <App state={state} dispatch={store.dispatch.bind(store)} store = {store}/>
                </React.StrictMode>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
//  ctrl+А затем ctrl+alt+L  - выравнивание
// alt + Enter  - импорт модуля из какого-то места
// ctrl + shift + R - refresh;
// ctrl + (shift)tab - go to another page;

store.subscribe(() => {
    rerenderEntireTree(store.getState());
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
