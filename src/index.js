import React from 'react'
import store from "./redux/redux_store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntiredTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} store ={store}/>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
}
renderEntiredTree(store.getState())

store.subscribe(()=>{
    let state = store.getState()
    renderEntiredTree(state)
})
