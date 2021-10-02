import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

function Details(props) {
    const [post, setPost] = useState({});
    const getPost = () => {
        fetch("/posts/details/" + props.match.params.id).then((data) => {
            return data.json();
        }).then((singlePost) => {
            setPost(singlePost.post);
        })
    }
    useEffect(() => {
        getPost();
    }, []);
    return (
        <Container>
            <div className="details">
                <h1>Details of {post.title}</h1>
                <p dangerouslySetInnerHTML={{__html: post.description}}></p>
                <p>{post.postCategory}</p>

            </div>
        </Container>
    )
}

export default Details
