//smurfs
import {
    FETCH_POST_LOADING,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILED,
    ADD_POST_LOADING,
    ADD_POST_SUCCESS,
    ADD_POST_FAILED,
} from '../actions/dataActions';

const initialState =
{
    post: [],
    error: null,
    isFetching: false
};

function dataReducer(state = initialState, action) {
    // console.log("reducer", action);
    switch (action.type) {
        //fetch
        case FETCH_POST_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                isFetching: false,
                error: null
            };
        case FETCH_POST_FAILED:
            return {
                ...state,
                post: [],
                isFetching: false,
                error: action.payload
            };
        //add
        //do i need to add an add post case ?
        //case ADD_POST:
        //return {
        //     ...state,
        //     post: [...state.post, action.payload]
        // };
        case ADD_POST_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                isFetching: false,
                error: null
            };
        case ADD_POST_FAILED:
            return {
                ...state,
                post: [],
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}
export default dataReducer;