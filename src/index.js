import React from 'react'
import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntiredTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage ={addMessage} updateNewMessageText={updateNewMessageText}/>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
}
subscribe(renderEntiredTree)
renderEntiredTree(state)
