// import React, { useReducer, useState } from 'react';
// import { formReducer, initialState } from '../reducers/formReducer';

// //import action creators

// //import { connect } from "react-redux";


// const PostForm = props => {
//     const [state, dispatch] = useReducer(formReducer, initialState);

//     const [newPost, setNewPost] = useState({
//         name: '',
//         age: '',
//         height: '',
//     });

//     const handleChange = e => {
//         setNewPost({
//             ...newPost,
//             [e.taget.name]:
//                 e.target.value
//         });
//     }

//     //where is ADD POST coming from? do i need to add a post success?

//     const handleSubmit = e => {
//         e.preventDeafault();
//         dispatch({ type: 'ADD_POST', payload: newPost });
//         setNewPost({
//             name: '',
//             age: '',
//             height: '',
//         });
//     }

//     retrun (
//         <div className='smurf-form'>
//             <h2>Create Smurf</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='smurf-name'>
//                     <input
//                         type="text"
//                         placeholder='Name'
//                         name='name'
//                         value={newPost.name}
//                         onChange={(e) => handleChange(e)} />
//                 </div>
//                 <div className='smurf-age'>
//                     <input
//                         type="text"
//                         placeholder='age'
//                         name='age'
//                         value={newPost.age}
//                         onChange={(e) => handleChange(e)} />
//                 </div>
//                 <div className='smurf-name'>
//                     <input
//                         type="text"
//                         placeholder='height in cm'
//                         name='height'
//                         value={newPost.height}
//                         onChange={(e) => handleChange(e)} />
//                 </div>
//                 <div>
//                     <button onClick={() => dispatch({ type: 'CREATE_POST' })}>Submit</button>
//                 </div>
//             </form>
//         </div>
//     )


// }
// export default PostForm;

// export default connect(
//     state => state,
//     //action creators
//   )(PostForm);