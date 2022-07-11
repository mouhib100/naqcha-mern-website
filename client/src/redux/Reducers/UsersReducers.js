//a reducer is a pure function that takes an action and the previous state of the application and returns the new state.
const init = {
    user:[],
    role:{}
}


const UserReducer = (state=init,action) =>{
    switch (action.type) {
        case 'updateuser':
        return{
            ...state,
            user:action.payload
        }

        case 'getuser':
        return{
            ...state,
            user:action.payload
        }

        case 'deleteuser':
        return{
            ...state,
            user:action.payload
        }

        default: return state
    }
}

export default UserReducer


