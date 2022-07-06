const init = {
    user:[],
    role:{}
}


const userReducer = (state=init,action) =>{
    switch (action.type) {
        case 'register':
        return{
            ...state,
            user:action.payload
        }

        default: return state
    }
}

export default userReducer