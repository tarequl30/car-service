import axios from "axios"
import React, { useState } from "react"
import { Alert, Card, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useAuth } from "../../../../Contexts/AuthContext"

const Reviews = () => {
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [imgURL, setImgURL] = useState(null)
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm()
    const resetAlert = () => {
        setError("")
        setMessage("")
    }
    const handlePhotoChange = (e) => {
        setLoading(true)
        const imgData = new FormData()
        imgData.set("key", "939f3dce73a9bc7f6dff177e09a6f903")
        imgData.append("image", e.target.files[0])
        axios
            .post("https://api.imgbb.com/1/upload", imgData)
            .then((res) => {
                setImgURL(res?.data?.data?.display_url)
                setMessage("Image Uploaded Successfully!")
                setLoading(false)
            })
            .catch((err) => setError("Failed To Upload Image In Database!"))
    }
    const onSubmit = async (data) => {
        const newReview = {
            name: data.name,
            review: data.review,
            imgURL,
        }
        try {
            setMessage("")
            setError("")
            setLoading(true)
            await fetch("http://localhost:5000/addReview", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newReview),
            })
                .then((res) => res.json())
                .then((user) => setMessage("Review Submitted Successfully"))
        } catch {
            setError("Failed To Submit Review!")
        }
        setLoading(false)
    }
    return (
        <section
            style={{ height: "100vh" }}
            className="d-flex justify-content-center align-items-center ms-5"
        >
            <Card className="p-5">
                <Card.Body>
                    <Form
                        onChange={resetAlert}
                        name="login-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h2 className="mb-4 text-center fw-bolder">
                            ADD YOUR REVIEW
                           
                        </h2>
                        {error && (
                            <Alert
                                className="border60 p-2 text-center"
                                variant="danger"
                            >
                                {error}
                            </Alert>
                        )}
                        {message && (
                            <Alert
                                className="border6 p-2 text-center"
                                variant="success"
                            >
                                {message}
                            </Alert>
                        )}
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                className="border60"
                                {...register("name")}
                                placeholder="example"
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mt-4">
                            <Form.Label>Upload Your Photo</Form.Label>
                            <Form.File
                                id="custom-file"
                                custom
                                label="Attach Photo"
                                onChange={handlePhotoChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mt-4">
                            <Form.Label>Write Your Review</Form.Label>
                            <Form.Control
                                placeholder="Give Us Your Review..."
                                as="textarea"
                                rows={5}
                                {...register("review")}
                                required
                            />
                        </Form.Group>
                        <button
                            disabled={loading}
                            type="submit"
                            className="btn w-100 main-btn mt-3 btn-success"
                        >
                            ADD REVIEW
                        </button>
                    </Form>
                </Card.Body>
            </Card>
        </section>
    );
};

export default Reviews;