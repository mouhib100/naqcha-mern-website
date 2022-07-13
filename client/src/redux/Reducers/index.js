import { combineReducers } from "redux"
import PostReducer from '../Reducers/PostReducer'
import AuthReducer from '../Reducers/PostReducer'
import UserReducer from "./UsersReducers"


export const RootReducer= combineReducers({
    Auth: AuthReducer,
    User: UserReducer,
    Posts: PostReducer,

})