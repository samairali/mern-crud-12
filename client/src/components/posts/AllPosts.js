import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const getPosts = () => {
        console.log("check");
        fetch("/posts")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setPosts(data.posts)
            })
            .catch(err => {
                console.log("error !!!!!", err);
            })
    }
    const deletePost = (id) => {
        if (window.confirm("are you sure you want to delete")) {
            Axios.delete("/posts/delete/" + id).then((result) => {
                console.log(result);
                getPosts();
            }).catch((err) => {
                console.log(err);
            });
            console.log('id is !!!!!!!!!!', id);
        }
    }
    const handleSearch = (e) => {
        console.log(e.target.value);
        Axios.get("/posts").then((result) => {
            const end = result.data.posts.filter((post) => {
                return  post.title.toLowerCase().includes(e.target.value) ||
                        post.description.toLowerCase().includes(e.target.value) ||
                        post.postCategory.toLowerCase().includes(e.target.value)
            })
            setPosts(end)
        }).catch((err) => {
            console.log(err);
        });
    }
    useEffect(() => {
        getPosts();
    }, [])
    return (
        <Container>
            <Form.Group>
                <Form.Label>
                    Search Here
                </Form.Label>
                <Form.Control type="text" onChange={handleSearch} ></Form.Control>
            </Form.Group>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Post Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {posts.map((post) => (
                        <>
                            <tr key={post._id}>
                                <td><Link to={`/details/${post._id}`}>{post.title}</Link></td>
                                <td dangerouslySetInnerHTML={{ __html: post.description }}></td>
                                <td>{post.postCategory}</td>
                                <td><Button variant="primary" as={Link} to={`/editpost/${post._id}`} >Edit</Button></td>
                                <td><Button variant="danger" onClick={() => deletePost(post._id)}>Delete</Button></td>
                            </tr>
                        </>
                    )

                    )}
                </tbody>
            </Table>
        </Container>
    )
}

export default AllPosts
