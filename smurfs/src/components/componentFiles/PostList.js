import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getPost } from "../actions/index";
import { useDispatch } from 'react-redux';
import PostCard from './ActivityCard';


//smurfs
const PostList = (props) {
    console.log("Post-List", props);
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => dispatch(getPost())}>Smurfing</button>

            {props.isFetching && <span role="img" alt="clock">⏰</span>}

            {props.error && <div>{props.error.message}</div>}

            {props.post.map(p =>
                <PostCard className="smurf-card" key={p.name} PostList={p} />)}

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