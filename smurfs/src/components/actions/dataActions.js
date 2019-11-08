import axios from 'axios';
//fetch
export const FETCH_POST_LOADING = 'FETCH_POST_LOADING';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILED = 'FETCH_POST_FAILED ';
//add
//do i need to do an add post?
export const ADD_POST_LOADING = 'ADD_POST_LOADING';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILED = 'ADD_POST_FAILED ';
//fetch
export const getPost = () => {
    console.log(getPost)
    return dispatch => {
        dispatch({ type: FETCH_POST_LOADING });
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                // console.log(res)
                dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
            })
            .catch(err => dispatch({ type: FETCH_POST_FAILED, payload: err.res }));
    };
};
//add post=smurf addPost
export const addPost = (post) => {
    console.log('actions', post)
    return dispatch => {
        dispatch({ type: ADD_POST_LOADING });
        axios
            .post(
                'http://localhost:3333/smurfs',
                post
            )
            .then(res => {
                dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
            })
            .catch(err => dispatch({ type: ADD_POST_FAILED, payload: err.res }));
    };
};
export default addPost;
