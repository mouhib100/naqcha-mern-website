const init={
    PostList:[],
    count:0
}


const PostReducer = (state=init,action) =>{
    switch (action.type) {
        case 'addPost':
        return{
            ...state,
            PostList: action.payload
        }

        default: return state
    }
}

export default PostReducer

