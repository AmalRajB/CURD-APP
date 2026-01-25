import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/'
const LOGIN_URL = `${BASE_URL}token/`
const REFRESH_URL = `${BASE_URL}refresh/`
const DATA_URL = `${BASE_URL}getdata/`



export const login = async (email, password) => {
    const response = await axios.post(LOGIN_URL,
        { email: email, password: password },
        { withCredentials: true }
    )
    return response.data.success
}

export const refresh_token = async () => {
    try {
        await axios.post(REFRESH_URL,
            {},
            { withCredentials: true }
        )
        return true
    }catch (error){
        return false 
    }
}

const call_refresh = async (error, func) => {
    if (error.response && error.response.status === 401) {
        const token_refresh = await refresh_token();
        if (token_refresh) {
            const retry_response = await func();
            return retry_response.data
        }
    }
    return false
}

export const display_data = async () => {
    try {
        const response = await axios.get(DATA_URL,
            { withCredentials: true }
        )
        return response.data
    } catch (error) {
        return call_refresh(error, axios.get(DATA_URL, { withCredentials: true }))
    }

}