import React from 'react'
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntiredTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
}
store.subscribe(renderEntiredTree)
renderEntiredTree(store.getState())
