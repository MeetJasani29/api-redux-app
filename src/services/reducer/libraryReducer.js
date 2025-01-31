const initalState = {
    librarys: JSON.parse(localStorage.getItem('librarys')) || [],
    library: null,
    isCreated: false,
    isLoading: false,
    isUpdated:false,
    error: null,
}

export const libraryReducer = (state = initalState , action ) => {

    switch (action.type) {
        case"LOADING" : 
        return{
            ...state,
            isLoading: true
        } 
        case "ADD_NEW_LIBRARY":
        return{
            ...state,
            isCreated: true,
        }

        case "GET_ALL_LIBRARYS":
            return {
                ...state,
                librarys: action.payload,
                isLoading: false,
                isCreated: false,
                isUpdated: false
            }

            case "ADD_NEW_LIBRARY_REJ": 
        return {
            ...state,
            error: action.payload
        }

        case "SINGLE_LIBRARY":
            return{
                ...state,
                library: action.payload
            }

            case "UPDATELIBRARY":
                return{
                    ...state,
                    isUpdated:true,
                    library:null
                }
        default:
            return state;
    }
}
