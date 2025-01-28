import { useEffect, useState } from "react";
import './product.css'
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { addProductAsync } from "../services/action/Product.action";
import generateUniqueId from "generate-unique-id";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AddProduct = () => {
    const dispatch = useDispatch();
    const { isCreated } = useSelector(state => state.productReducer)
    const navigate = useNavigate();
    const [inputForm, setInputForm] = useState({
        image: '',
        title: '',
        description: '',
        price: '',
        productType: '',
        disPrice: '',
        brand: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value,
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        let id = generateUniqueId({
            length: 5,
            useLetters: false,
        });
        dispatch(addProductAsync({ ...inputForm, id }));
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/")
        }
    }, [isCreated])

    return (

        <div className="container product-form">
            <h2 className="text-center">Add New Product</h2>
            <Form onSubmit={handleSubmit} className="Form  ">
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={handleChange}
                            name="image"
                            value={inputForm.image}
                            placeholder="Enter Image URL"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label className="mt-3">Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={handleChange}
                            name="title"
                            value={inputForm.title}
                            placeholder="Product Name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12">
                        <Form.Label className="mt-3" >Product Type</Form.Label>
                        <Form.Select
                            name="productType"
                            value={inputForm.productType}
                            onChange={handleChange}  >
                            <option value="All">All</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Food">Food</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Sports">Sports</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Health">Health</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom03">

                        <Row className="align-items-center">
                            <Col md="6">
                                <Form.Label className="mt-3">Price</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
                                    <Form.Control
                                        placeholder="0.00"
                                        type="text"
                                        onChange={handleChange}
                                        name="price"
                                        value={inputForm.price}
                                    />
                                </InputGroup>
                            </Col>


                            <Col md="6">
                                <Form.Label className="mt-3">Discount Price</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
                                    <Form.Control
                                        placeholder="0.00"
                                        type="text"
                                        onChange={handleChange}
                                        name="disPrice"
                                        value={inputForm.disPrice}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label className="mt-3">Brand</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={handleChange}
                            name="brand"
                            value={inputForm.brand}
                            placeholder="Brand"
                        />
                    </Form.Group>


                    <Form.Group as={Col} md="12" controlId="validationCustom02">
                        <Form.Label className="mt-3">Description</Form.Label> <br />
                        <textarea name="description" placeholder="Description" type="text" onChange={handleChange} value={inputForm.description} rows={4} cols={173}></textarea>
                    </Form.Group>

                </Row>

                <div className="center-container">
                    <button type="submit" className="prbtn">Add Product</button>
                </div>
            </Form>
        </div>
    );
};

export default AddProduct;
