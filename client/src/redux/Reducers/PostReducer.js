
const init={
    Posts:[],
    count:0
}


const PostReducer = (state=init,action) =>{
    switch (action.type) {
        case 'addPost':
        return{
            ...state,
            posts: action.payload
        }

        case 'getPost':
        return{
            ...state,
            posts: action.payload
        }

        case 'getAllPosts':
        return{
            ...state,
            posts: action.payload
        }

        default: return state
    }
}

export default PostReducer

