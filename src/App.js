import './App.css';
import React, {Suspense} from 'react'
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/DIalogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux_store";

const DialogsContainer = React.lazy(() => import( "./components/DIalogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import( "./components/Profile/ProfileContainer"));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <Suspense fallback={<div>Загрузка...</div>}>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='/users' render={() => <UserContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </Suspense>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.initialize.initialized
    }
}
let SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

let AppContainer = connect(mapStateToProps, {initializeApp})(App);
export default SamuraiJSApp
