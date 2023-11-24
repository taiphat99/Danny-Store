import axios from "axios";

const URL = "http://localhost:8080/api/admin/home/";
export const getProducts = async (type_id, category_id, concept_id, size_id, color_id, sort_name) => {
    try {
        const res = await axios.get(URL + `get-products?type_id=${type_id}&category_id=${category_id}&concept_id=${concept_id}&size_id=${size_id}&color_id=${color_id}&sort_name=${sort_name}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getLatestProducts = async () => {
    try {
        const res = await axios.get(URL + 'get-latest-products');
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getProductsByConceptId = async (concept_id, limit) => {
    try {
        const res = await axios.get(URL + `get-products?concept_id=${concept_id}&limit=${limit}`);
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

export const getBestsellers = async () => {
    try {
        const res = await axios.get(URL + 'get-bestsellers');
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getColorsByName = async (name) => {
    try {
        const res = await axios.get(URL + `get-colors-by-name?name=${name}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getColors = async () => {
    try {
        const res = await axios.get(URL + `get-colors-by-name`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getSizes = async () => {
    try {
        const res = await axios.get(URL + `get-sizes`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getProductByNameAndColorId = async (name, color_id) => {
    try {
        const res = await axios.get(URL + `get-product-by-name-and-color-id?name=${name}&color_id=${color_id}`);
        return res.data
    } catch (error) {
        console.log(error);
    }
}


export const getCategoriesByTypeId = async (typeId) => {
    try {
        const res = await axios.get(URL + `get-categories-by-type-id?type_id=${typeId}`);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const getProductByIdAndSizeId = async (product_id, size_id) => {
    try {
        const res = await axios.get(URL + `get-product-by-id-and-size-id?product_id=${product_id}&size_id=${size_id}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const checkSoldOut = async (product_id, size_id) => {
    try {
        const res = await axios.get(URL + `check-sold-out?product_id=${product_id}&size_id=${size_id}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (id) => {
    try {
        const res = await axios.get(URL + `get-product-by-id?id=${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getImagesByProductId = async (id) => {
    try {
        console.log(id);
        const res = await axios.get(URL + `get-images-by-product-id?product_id=${id}`);

        return res.data;
    } catch (error) {
        console.log(error);
    }
}