import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext/authContext";

export const Logout = () => {
    const navigate = useNavigate();
    const { loginData, userLogout } = useContext(AuthContext);
    const url = "http://localhost:3030/users/logout";
    useEffect(() => {
        fetch(url, {
            headers: {
                "X-Authorization": loginData.accessToken,
            },
        }).then(() => {
            userLogout();
            navigate("/");
        })
    }, [userLogout, navigate, loginData.accessToken]);

    return null;
};