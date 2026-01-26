import { Children } from "react";
import { UseAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) =>{
    const {isauthenticated,loading} = UseAuth();
    const nav = useNavigate();

    if (loading) {
        return (
            <h1>loading....</h1>
        )
    } if (isauthenticated) {
        return children
    } else {
        nav('/')
    }
}
export default PrivateRoute;