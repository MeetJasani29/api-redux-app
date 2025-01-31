import { useEffect, useState } from "react";
import './library.css'
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { addlibraryAsync } from "../services/action/library.action";
import generateUniqueId from "generate-unique-id";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Addlibrary = () => {
    const dispatch = useDispatch();
    const { isCreated } = useSelector(state => state.libraryReducer)
    const navigate = useNavigate();
    const [inputForm, setInputForm] = useState({
        title: '',
        author: '',
        price: '',
        publisher: '',
        libraryType: '',
        price: '',
        quantity: '',
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
        dispatch(addlibraryAsync({ ...inputForm, id: id.toString() }));
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/")
        }
    }, [isCreated])

    return (

        <div className="container library-form">
            <h2 className="text-center">Book Entry Form</h2>
            <Form onSubmit={handleSubmit} className="Form  ">
                <Row className="mb-3">

                    <Form.Group as={Col} md="12" controlId="validationCustom03">

                        <Row className="align-items-center ">
                            <Col md="12">
                                <Form.Label className="mt-3">Book Title</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="text"
                                        onChange={handleChange}
                                        name="title"
                                        value={inputForm.title}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label className="mt-3">Author</Form.Label>
                        <Form.Control

                            type="text"
                            onChange={handleChange}
                            name="author"
                            value={inputForm.author}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label className="mt-3">Publisher</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={handleChange}
                            name="publisher"
                            value={inputForm.publisher}
                        />
                    </Form.Group>


                    <Form.Group as={Col} md="12">
                        <Form.Label className="mt-3" >Category</Form.Label>
                        <Form.Select
                            name="libraryType"
                            value={inputForm.libraryType}
                            onChange={handleChange}  >
                            <option value="Comics">Comics</option>
                            <option value="History">History</option>
                            <option value="Classic">Classic</option>
                            <option value="Romance">Romance</option>
                            <option value="Horro">Horro</option>
                            <option value="Fantasy Fiction">Fantasy Fiction</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom03">

                        <Row className="align-items-center">
                            <Col md="6">
                                <Form.Label className="mt-3">Quantity on Hand</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="ex: 5"
                                        type="number"
                                        onChange={handleChange}
                                        name="quantity"
                                        value={inputForm.quantity}
                                    />
                                </InputGroup>
                            </Col>


                            <Col md="6">
                                <Form.Label className="mt-3">Unit Price</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="$18.89"
                                        type="number"
                                        onChange={handleChange}
                                        name="price"
                                        value={inputForm.price}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Form.Group>

    

                </Row>

                <div className="center-container">
                    <button type="submit" className="prbtn">Submit</button>
                </div>
            </Form>
        </div>
    );
};

export default Addlibrary;
