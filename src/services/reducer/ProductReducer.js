const initalState = {
    products: JSON.parse(localStorage.getItem('products')) || [],
    product: null,
    isCreated: false,
    isLoading: false,
    isUpdated:false,
    error: null,
}

export const productReducer = (state = initalState , action ) => {

    switch (action.type) {
        case"LOADING" : 
        return{
            ...state,
            isLoading: true
        } 
        case "ADD_NEW_PRODUCT":
        return{
            ...state,
            isCreated: true,
        }

        case "GET_ALL_PRODUCTS":
            return {
                ...state,
                products: action.payload,
                isLoading: false,
                isCreated: false,
                isUpdated: false
            }

            case "ADD_NEW_PRODUCT_REJ": 
        return {
            ...state,
            error: action.payload
        }

        case "SINGLE_PRODUCT":
            return{
                ...state,
                product: action.payload
            }

            case "UPDATE_PRODUCT":
                return{
                    ...state,
                    isUpdated:true,
                    product:null
                }
        default:
            return state;
    }
}
