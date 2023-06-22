import axios from "axios";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispath) => {
        dispath(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) =>{
            const users = response.data;
            dispath(fetchUsersSuccess(users))
        })
        .catch((error) => {
            const errorMsg = error.message
            dispath(fetchUsersFailure(errorMsg))
        })
    }
}

