import React from 'react'
import store from "./redux/redux_store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        {/*<React.StrictMode>*/}
            <Provider store={store}>
                <App asd={store}/>
            </Provider>
        {/*</React.StrictMode>*/}
    </BrowserRouter>, document.getElementById('root'))
