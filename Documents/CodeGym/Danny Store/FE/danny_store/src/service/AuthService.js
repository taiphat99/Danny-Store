import axios from "axios";

const apiAuth = "http://localhost:8080/api/user";

export const auth = async (data) => {
    return await axios.post(apiAuth + "/login-by-username", data);
}

export const addJwtTokenToLocalStorage = (jwtToken) => {
    localStorage.setItem("JWT", jwtToken);
};

export const getIdByUserName = async (userName) => {
    return await axios.get(
        `http://localhost:8080/api/user/get-id-app-user/${userName}`
    );
};