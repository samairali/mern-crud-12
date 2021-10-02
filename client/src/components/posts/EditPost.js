import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory } from 'react-router';

function EditPost(props) {
    const id = props.match.params.id;
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const history = useHistory();
    const getPost = () => {
        Axios.get(`/posts/details/${id}`).then((result) => {
            console.log(result.data.post);
            setTitle(result.data.post.title)
            setDescription(result.data.post.description)
            setCategory(result.data.post.postCategory)
        }).catch((err) => {
            console.log(err);
        });
    }
    const titleChange = (e) => {
        setTitle(e.target.value);
    }
    const descriptionChange = (data) => {
        setDescription(data)
    }
    const categoryChange = (e) => {
        setCategory(e.target.value)
    }
    const updatePost = (e) => {
        e.preventDefault();
        const data = {
            title,
            description,
            postCategory: category
        }
        Axios.put(`/posts/update/${id}`, data).then((result) => {
            console.log(result);
            history.push("/");
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        getPost();
    }, []);
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Title</Form.Label>
                    <Form.Control type="email" placeholder="Enter Title" value={title ? title : ''} onChange={titleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={description}
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            descriptionChange(data)
                        }}
                        

                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPostCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter Category" value={category ? category : ''} onChange={categoryChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={updatePost}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default EditPost
