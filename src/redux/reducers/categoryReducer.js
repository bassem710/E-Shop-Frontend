import { ADD_NEW_CATEGORY, GET_ALL_CATEGORIES, GET_ERROR } from "../type";

const initialState = {
    categories: [],
    loading: true,
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
        case ADD_NEW_CATEGORY:
            return {
                loading: false,
                categories: action.payload,
            }
        case GET_ERROR:
            return {
                loading: true,
                categories: action.payload,
            }
        default:
            return state;
    }
}

export default categoryReducer;