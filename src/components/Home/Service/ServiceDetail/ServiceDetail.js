import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ReactModal from 'react-modal';
import {ModalStyles} from "../../../../Styles/ModalStyles"
import Payment from '../../Payment/Payment';
const ServiceDetail = ({service}) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      const orderInfo = {
          ...data,
          serviceName: service.name,
          price: service.price
      }
      fetch("http://localhost:5000/addOrder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },

        body: JSON.stringify(orderInfo)
      })
      .then(res => res.json())
      .then(data => console.log(data))
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div className="col-md-4 text-center container-fluid mt-5 mb-3">
            <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={ModalStyles}
          contentLabel="Example Modal"
        >
          <Card className="p-5">
                <Card.Body>
                    <Form name="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="mb-4 text-center fw-bolder">
                            Book This Service
                        </h2>
        
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                className="border60"
                                {...register("name")}
                                placeholder="example chowdhury..."
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mt-3 mb-5">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                className="border60"
                                {...register("email")}
                                placeholder="example@example.com..."
                                required
                            ></Form.Control>
                        </Form.Group>
                        <h4 className="mb-3">Payment here for book Service</h4>
                        <Payment />
                        <button
                        
                            type="submit"
                            className="btn w-100 main-btn mt-5 btn-success"
                        >
                            Book Service
                        </button>
                    </Form>
                </Card.Body>
            </Card>
        </ReactModal>
            <img src={service.image} alt="" width="80%" height="300px"/>
            <h5 className="mt-3">{service.name}</h5>
            <p className="text-secondary mt-5">{service.description}</p>
            <p className="text-secondary mt-5">{service.price}</p> 
            <button onClick={openModal} className="btn btn-success">Book Service</button>
        </div>
    );
};

export default ServiceDetail;