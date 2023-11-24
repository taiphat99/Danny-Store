import axios from "axios";
import jwtDecode from "jwt-decode";

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

export const getAppUserByUserName = async (username) => {
    const user = await axios.get(apiAuth + `/get-app-user/${username}`)
    return user.data;
}

export const userConverterFromToken = () => {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken != null) {
        const user = jwtDecode(jwtToken);
        return user;
    }
    return null;
}

export const updateUserInfo = async (data) => {
    try {
        await axios.patch(apiAuth + `/update-user-info`, data);
    } catch (error) {
        console.log(error);
    }

}