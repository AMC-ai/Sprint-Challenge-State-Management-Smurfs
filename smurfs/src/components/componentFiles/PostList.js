import React from "react";
import { connect } from "react-redux";
import { getPost } from "../actions/index";
import { useDispatch } from 'react-redux';
import PostCard from './ActivityCard';

//smurfs
function PostList(props) {
    console.log("PostList", props);
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => dispatch(getPost())}>Smurfing</button>
            {props.isFetching && <span role="img" alt="clock">⏰</span>}
            {props.error && <div>{props.error.message}</div>}
            {props.post &&
                props.post.map(post =>
                    <PostCard className="smurf-card" key={post.name} PostList={post} />)}

        </>
    );
}
const mapStateToProps = state => {
    console.log('PostList', state)
    return {
        isFetching: state.isFetching,
        post: state.post
    };
};

export default connect(
    mapStateToProps,
    { getPost }
)(PostList);