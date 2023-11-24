import axios from "axios";

const URL = "http://localhost:8080/api/admin/home/";

export const getCartList = async (id) => {
    try {
        const res = await axios.get(URL + `get-cart-detail?user_id=${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


