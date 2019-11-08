const AddPostForm = props => {
    const [newPost, setNewPost] = useState({});

    const handleChange = e => {
        setNewPost({
            ...newPost,
            [e.taget.name]:
                e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDeafault();
        props.addPost(newPost);
        setNewPost({
            name: '',
            age: '',
            height: '',
        });
    }

    retrun(
        <div className='smurf-form'>
            <h2>Create Smurf</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Name'
                    name='name'
                    value={props.name}
                    onChange={handleChange} />
            </form>
        </div>
    )


}
