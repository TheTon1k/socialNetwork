import './App.css';
import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/DIalogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";


function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.asd.getState().sideBar}/>
            <div className={'app-wrapper-content'}>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/users' render={() => <UserContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
}

export default App;
