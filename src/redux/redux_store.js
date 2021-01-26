import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./dialogs_reducer";
import profile_reducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authRecuder from "./auth_reducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import initializeReducer from "./app_reducer";


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profile_reducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authRecuder,
    initialize:initializeReducer,
    form:formReducer

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window._store_ = store
export default store