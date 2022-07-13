//a reducer is a pure function that takes an action and the previous state of the application and returns the new state.
const init = {
    userauth:[],
    role:{}
}


const AuthReducer = (state=init,action) =>{
    switch (action.type) {
        case 'register':
        return{
            ...state,
            userauth:action.payload
        }

        case 'login':
        return{
            ...state,
            userauth:action.payload
        }

        default: return state
    }
}

export default AuthReducer


