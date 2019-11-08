import React, { useReducer, useState } from 'react';
import { formReducer, initialState } from '../reducers/formReducer';

//import action creators?
import addPost from '../actions/dataActions';
import { connect } from "react-redux";
// import { useDispatch } from 'react-redux';

const PostForm = props => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    // const dispatch = useDispatch();

    const [newPost, setNewPost] = useState({
        name: '',
        age: '',
        height: '',
    });

    function handleChange(e) {
        setNewPost({
            ...newPost,
            [e.target.name]:
                e.target.value
        });
    }

    //where is ADD POST coming from? do i need to add a post success?

    const handleSubmit = e => {
        e.preventDeafault();
        console.log("is it working")
        // dispatch({ type: 'ADD_POST_SUCCESS', payload: newPost });
        // props.addPost(newPost);
        // setNewPost({
        //     name: '',
        //     age: '',
        //     height: '',
        // });
    }

    return (
        <div className='smurf-form'>
            <h2>Create Smurf</h2>
            <form onSubmit={handleSubmit}>
                <div className='smurf-name'>
                    <input
                        type="text"
                        placeholder='Name'
                        name='name'
                        value={newPost.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='smurf-age'>
                    <input
                        type="text"
                        placeholder='age'
                        name='age'
                        value={newPost.age}
                        onChange={handleChange}
                    />
                </div>
                <div className='smurf-name'>
                    <input
                        type="text"
                        placeholder='height in cm'
                        name='height'
                        value={newPost.height}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );

}
// export default PostForm;
//() => dispatch({ type: 'CREATE_POST' }) for button if it doesn't work?
//onClick={handleSubmit}

export default connect(
    state => state,
    { addPost }
    //action creators
)(PostForm);