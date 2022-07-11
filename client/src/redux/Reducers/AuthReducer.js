//a reducer is a pure function that takes an action and the previous state of the application and returns the new state.
const init = {
    user:[],
    role:{}
}


const AuthReducer = (state=init,action) =>{
    switch (action.type) {
        case 'register':
        return{
            ...state,
            user:action.payload
        }

        case 'login':
        return{
            ...state,
            user:action.payload
        }

        default: return state
    }
}

export default AuthReducer


