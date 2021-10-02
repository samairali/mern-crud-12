import React, { useRef, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import Axios from 'axios'
import { useHistory } from 'react-router';
import { createPostError } from './../common/validation';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CreatePost() {
    const history = useHistory();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();

    // states
    const [validate, setValidate] = useState(false);
    const [description, setDescription] = useState()
    const descriptionChange = (data) => {
        setDescription(data)
    }
    
    const createPost = (e) => {
        setValidate(true)
        e.preventDefault();
        
        const err = createPostError(titleRef.current.value, description, categoryRef.current.value)
        if (err.title === '' && err.description === '' && err.category === '') {
            let data = {
                title: titleRef.current.value,
                description: description,
                postCategory: categoryRef.current.value
            }
            Axios.post("http://localhost:5000/posts/add", data).then((result) => {
                console.log(result);
                history.push('/');
            }).catch((err) => {
                console.log(err)
            })
        } else {
            console.log(err);
        }
    }

    return (
        <Container>
            <h1 className="my-3 text-center">Create New Post</h1>
            <Form validated={validate} noValidate className="justify-content-start text-left">
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" ref={titleRef} required />
                    <Form.Text className="text-muted">
                        Enter text of your post
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid title.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
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
                        ref={descriptionRef}
                        
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Label>Post Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter Post Category" ref={categoryRef} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={createPost}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default CreatePost
