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





