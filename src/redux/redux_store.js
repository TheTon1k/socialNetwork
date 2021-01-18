import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs_reducer";
import profile_reducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authRecuder from "./auth_reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profile_reducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authRecuder
})

let store = createStore(reducers)

window.state = store.getState()
export default store