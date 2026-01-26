import { createContext, useContext, useState, useEffect, Children } from "react";
import { is_authenticated } from '../api_endpoints/api'
import { useNavigate } from "react-router-dom";
import { login } from "../api_endpoints/api";



const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [isauthenticated,set_isauthenticated] = useState(false);
    const [loading,setloading]  = useState(true)
    const nav = useNavigate();

    const get_authenticated = async () =>{
        try {
            const success = await is_authenticated();
            set_isauthenticated(success)
        } catch {
            set_isauthenticated(false)
        } finally {
            setloading(false)
        }

    }

    const user_login = async (email,password) =>{
        const success = await login(email,password)

        if(success) {
            set_isauthenticated(true)
            nav('/home')

        }

    }

    useEffect(()=>{
        get_authenticated();
    },[window.location.pathname])

    return (
        <AuthContext.Provider value={{isauthenticated ,loading, user_login}}>
            {children}
        </AuthContext.Provider>
    )

}

export const UseAuth = () => useContext(AuthContext);