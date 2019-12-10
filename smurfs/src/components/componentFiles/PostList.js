import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getPost } from "../actions/dataActions";
import { useDispatch } from 'react-redux';
import PostCard from '../componentFiles/PostCard';



//smurfs
function PostList(props) {
    console.log("Post-List", props);
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => dispatch(getPost())}>Smurfing</button>

            {props.isFetching && <span role="img" alt="clock">⏰⏰ ⏰⏰ ⏰⏰Gathering Smurfs....</span>}

            {props.error && <div>{props.error.message}</div>}
            {props.post &&
                props.post.map(p => {
                    console.log('here iam', p);
                    return < PostCard className="posting" key={p.id} PostList={p} />
                })
            }
        </>
    );
}
const mapStateToProps = state => {
    console.log('PostList State', state)
    return {
        isFetching: state.isFetching,
        post: state.post
    };
};

export default connect(
    mapStateToProps,
    { getPost }
)(PostList);

//destructure instead of using props
// const PostList = ({ getPost, post, error, isFetching }) => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         getPost();
//     }, [getPost]);

//     if (isFetching) {
//         return <h2>⌛ Gathering Smurfs....</h2>;
//     }
//     console.log(`PostList`)

//     return (
//         <div>
//             <button onClick={() => dispatch(getPost())}>Smurfing</button>
//             {error && <p>{error}</p>}
//             {props.post &&
//                 props.post.map(p =>
//                     <PostCard className="posting" key={post.} ActivityList={activity} />)}

//         </div>
//     );
// };

// const mapStateToProps = state => {
//     return {
//         post: state.post,
//         isFetching: state.isFetching,
//         error: state.error
//     };
// };

// export default connect(
//     mapStateToProps,
//     { getPost }
// )(PostList); 