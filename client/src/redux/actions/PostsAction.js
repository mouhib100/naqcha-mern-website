import axios from "axios"

//myData hiya el data mta3i fel register eli hiya firstname, lastname, email, password


export const addpost = (myData) => async (dispatch) => {
    try {
        const {data} = await axios.post("http://localhost:4000/api/posts/",myData)
        dispatch ({
            type: "addpost",
            payload: data
        })
    } catch (error) {
        console.log(error)

    }
}
export const getpost = (postId,myData) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:4000/api/posts/${postId}`,myData)
        dispatch ({
            type: "getpost",
            payload: data
        })
    } catch (error) {
        console.log(error)

    }
}

//get All Posts
export const getAllPosts = (myData) => async (dispatch) => {
    try {
        const {data} = await axios.get('http://localhost:4000/api/posts/allposts/',myData)
        dispatch ({
            type: "getAllPosts",
            payload: data
        })
    } catch (error) {
        console.log(error)

    }
}







