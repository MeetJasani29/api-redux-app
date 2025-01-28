
import axios from 'axios';

export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const addNewProduct = () => {
    return {
        type: "ADD_NEW_PRODUCT",
    }
}

export const addProductRej = (msg) => {
    return {
        type: "ADD_NEW_PRODUCT_REJ",
        payload: msg
    }
}


export const getAllProducts = (data) => {
    return {
        type: "GET_ALL_PRODUCTS",
        payload: data
    }
}

export const singleproduct = (data) => {
    return{
        type: "SINGLE_PRODUCT",
        payload: data
    }
}

export const updateProduct = () => {
    return {
        type: "UPDATE_PRODUCT",
    }
}

export const addProductAsync = (data) => {
   
    return (dispatch) => {
        dispatch(loading())
        axios.post(`http://localhost:5000/products`, data)
        .then((res) => {
            dispatch( addNewProduct(res.data)); 
        })
        .catch((err) => {
            dispatch(addProductRej(err.message)); 
        });
    }
}

export const getAllProductAsync = () => {
    return (dispatch) => {
        dispatch(loading());
        axios.get(`http://localhost:5000/products`)
        .then((res) => {
            dispatch(getAllProducts(res.data));
        })
        .catch((err) => {
            dispatch(addProductRej(err.message)); 
        });
    }
}

export const deleteproductAsync = (id) => {
    return(dispatch) => {
        axios.delete(`http://localhost:5000/products/${id}` )
        .then((res) => {
            dispatch(getAllProductAsync())
        }).catch((err) => {
            dispatch(addProductRej(err.message))
        })
    }
}



export const singleProductAsync = (id) => {
    return(dispatch) => {
        axios.get(`http://localhost:5000/products/${id}`)
        .then((res) => {
            dispatch(singleproduct(res.data))
        }).catch( (err) => {
            dispatch(addProductRej(err.message))
        })
    }   
}

export const updateProductAsync = ( data) => {
    return(dispatch) => {
        axios.put(`http://localhost:5000/products/${data.id}`, data)
        .then((res) => {
            console.log(res);
            dispatch(updateProduct())
        }).catch((err) => {
            dispatch(addProductRej(err.message))
        })
    }
}

