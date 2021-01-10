import './App.css';
import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/DIalogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.navbarPage}/>
            <div className={'app-wrapper-content'}>
                <Route path='/dialogs' render={() => <Dialogs
                    state={props.state.dialogsPage}
                    addMessage={props.addMessage}
                    updateNewMessageText={props.updateNewMessageText}/>}/>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
}

export default App;
