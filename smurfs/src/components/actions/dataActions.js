// import axios from 'axios';
// //fetch
// export const FETCH_POST_LOADING = 'FETCH_POST_LOADING';
// export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
// export const FETCH_POST_FAILED = 'FETCH_POST_FAILED ';
// //add
// //do i need to do an add post?
// export const ADD_POST_LOADING = 'ADD_POST_LOADING';
// export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
// export const ADD_POST_FAILED = 'ADD_POST_FAILED ';
// //fetch
// export const getPost = () => {
//     return dispatch => {
//         dispatch({ type: FETCH_POST_LOADING });
//         axios
//             .get('put end point here')
//             .then(res => {
//                 dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
//             })
//             .catch(err => dispatch({ type: FETCH_POST_FAILED, payload: err.res }));
//     };
// };
// //add
// export const addPost = (post) => {
//     return dispatch => {
//         dispatch({ type: ADD_POST_LOADING });
//         axios
//             .post(
//                 'put end point here',
//                 post
//             )
//             .then(res => {
//                 dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
//             })
//             .catch(err => dispatch({ type: ADD_POST_FAILED, payload: err.res }));
//     };
// };
