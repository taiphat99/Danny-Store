import axios from "axios";

const URL = "http://localhost:8080/api/admin/home/";
export const getProductsByTypeId = async (type_id) => {
    try {
        const res = await axios.get(URL + `get-products-by-type-id?type_id=${type_id}`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getSizesByNameAndColorId = async (name, colorId) => {
    try {
        const res = await axios.get(URL + `get-sizes-by-name-and-color-id?name=${name}&color_id=${colorId}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


export const getColorsByNameAndSizeId = async (name, sizeId) => {
    try {
        const res = await axios.get(URL + `get-colors-by-name-and-size-id?name=${name}&size_id=${sizeId}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}