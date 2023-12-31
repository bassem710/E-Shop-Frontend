import { ADD_NEW_BRAND, GET_ALL_BRANDS, GET_ONE_BRAND, GET_ERROR } from "../type";

const initialState = {
    brands: [],
    oneBrand: [],
    loading: true,
}

const brandReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_BRANDS:
            return {
                ...state,
                brands: action.payload,
                loading: false
            }
        case GET_ONE_BRAND:
            return {
                ...state,
                oneBrand: action.payload,
                loading: false
            }
        case ADD_NEW_BRAND:
            return {
                loading: false,
                brands: action.payload,
            }
        case GET_ERROR:
            return {
                loading: true,
                brands: action.payload,
            }
        default:
            return state;
    }
}

export default brandReducer;