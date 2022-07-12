import axios from "axios"

//myData hiya el data mta3i fel register eli hiya firstname, lastname, email, password



export const currentUser = (token,navigate) =>async(dispatch) =>{
    const config = {
        headers:{
            Authorization:token
        }
    }
    try {
        const {data} =  await axios.get("http://localhost:4000/api/auth/currentUser/",config);
       
        dispatch({
            type:'currentUser',
            payload:data.user
        })
        dispatch(roleUser(data.user.role,navigate))
    } catch (error) {
        console.log(error)
    }
}

export const roleUser = (roleId,navigate) =>async(dispatch) =>{
    
    try {
        const {data} =  await axios.get(`http://localhost:4000/api/roles/${roleId}`);
       
        dispatch({
            type:'role',
            payload:data.role.roleName
        })
        if(data.role.roleName == 'user'){
            navigate('/user')
        }else if(data.role.roleName == 'admin'){
            navigate('/Admin')
        }else if(data.role.roleName == 'gestionnaire'){
            navigate('/Gestionnaire')
        }else{  
            navigate('/') 
        }
    } catch (error) {
        console.log(error)
    }
}


export const updateuser = (userId,myData) => async (dispatch) => {
    try {
        const {data} = await axios.put(`http://localhost:4000/api/users/update/${userId}`,myData)
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





