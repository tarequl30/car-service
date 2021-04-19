import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from "axios"
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const handleImageUpload = (e) => {
        setLoading(true)
        const image = new FormData()
        image.append("key", "939f3dce73a9bc7f6dff177e09a6f903")
        image.append("image", e.target.files[0])
        axios.post("https://api.imgbb.com/1/upload", image)
        .then(res => {
            setImage(res?.data?.data?.display_url)
            setLoading(false)
        })
    }
  const onSubmit = data => {
      const service = {
          name: data.name,
          price: data.price,
          description: data.description,
          image,
      }
      fetch("http://localhost:5000/addService", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(service)
      })
      .then(res => res.json())
      .then(data => console.log(data))
  };
    return (
        <Card className="p-5 m-5">
                <Card.Body>
                    <Form name="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="mb-4 text-center fw-bolder">
                            Add A Service
                        </h2>
        
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                className="border60"
                                {...register("name")}
                                placeholder="Enter Service Name"
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                className="border60"
                                {...register("price")}
                                placeholder="Price"
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                className="border60"
                                {...register("description")}
                                placeholder="example@example.com..."
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.File
                                type="file"
                                className="border60"
                                onChange={handleImageUpload}
                                placeholder="Upload Image"
                                required
                            ></Form.File>
                        </Form.Group>
                        <button
                        
                            type="submit"
                            disabled={loading}
                            className="btn w-100 main-btn mt-3 btn-primary"
                        >
                            ADD SERVICE
                        </button>
                    </Form>
                </Card.Body>
            </Card>
    );
};

export default AddService;