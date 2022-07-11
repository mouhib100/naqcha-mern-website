import { combineReducers } from "redux"
import PostReducer from '../Reducers/PostReducer'
import AuthReducer from '../Reducers/PostReducer'


export const RootReducer= combineReducers({
    Auth: AuthReducer,
    Posts: PostReducer,

})