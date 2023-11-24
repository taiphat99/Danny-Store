import axios from "axios";

const URL = "http://localhost:8080/api/admin/home/";

export const addToOrder = async (username) => {
    try {
        await axios.post(URL + `add-to-order?username=${username}`);
    } catch (error) {
        console.log(error);
    }
}


