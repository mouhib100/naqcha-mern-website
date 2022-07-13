//a reducer is a pure function that takes an action and the previous state of the application and returns the new state.
const init = {
    User:[],
    role:{}
}


const UserReducer = (state=init,action) =>{
    switch (action.type) {

        case 'currentUser':
        return{
            ...state,
            user:action.payload
        }

        case 'role':
        return{
            ...state,
            user:action.payload
        }

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


