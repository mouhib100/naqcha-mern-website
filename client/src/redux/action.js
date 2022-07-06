import axios from "axios"

//myData hiya el data mta3i fel register eli hiya firstname, lastname, email, password
export const register = (myData) => async (dispatch) => {
    try {
        const {data} = await axios.post("http://localhost:4000/api/auth/register",myData)
        dispatch ({
            type: "register",
            payload: data
        })
        localStorage.setItem('token',data.token) //local storage hiya win bech ta3mel sauvegarde lel session mta3 l'utilisateur 
    } catch (error) {
        console.log(error)

    }
}