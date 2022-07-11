import axios from "axios"

//myData hiya el data mta3i fel register eli hiya firstname, lastname, email, password


export const updateuser = (myData) => async (dispatch) => {
    try {
        const {data} = await axios.put("http://localhost:4000/api/users/update/:id",myData)
        dispatch ({
            type: "updateuser",
            payload: data
        })
    } catch (error) {
        console.log(error)

    }
}

export const deleteuser = (myData) => async (dispatch) => {
    try {
        const {data} = await axios.delete("http://localhost:4000/api/users/delete/:id",myData)
        dispatch ({
            type: "deleteuser",
            payload: data
        })
    } catch (error) {
        console.log(error)

    }
}

export const getuser = (myData) => async (dispatch) => {
    try {
        const {data} = await axios.get("http://localhost:4000/api/users/:id",myData)
        dispatch ({
            type: "getuser",
            payload: data
        })
    } catch (error) {
        console.log(error)

    }
}





