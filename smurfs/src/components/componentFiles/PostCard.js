import React from 'react';

//props passed from Village
const PostCard = (props) => {
    console.log(`post-card`, props)
    return (
        <div>
            <p>Name: {props.PostList}</p>
            <p>Age: {props.PostList}</p>
            <p>Height: {props.PostList}</p>
        </div>
    )
};

export default PostCard;
