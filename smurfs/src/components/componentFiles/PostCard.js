import React from 'react';

//props passed from postlist
const PostCard = (props) => {
    console.log(`post-card`, props)
    return (
        <div>
            <p>Name: {props.PostList.name}</p>
            <p>Age: {props.PostList.age}</p>
            <p>Height: {props.PostList.height}</p>
            <p>{props.PostList.id}</p>
        </div>
    )
};

export default PostCard;
