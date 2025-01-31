import './library.css'
import { useEffect, useState } from "react";
import { Form, Row, Col, InputGroup  } from "react-bootstrap";
import {updatelibraryAsync  ,singlelibraryAsync , updatelibrary , singlelibrary} from "../services/action/library.action";
import { useDispatch , useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router";

const Editlibrary = () => {
    const {id} = useParams();   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {library , isupdated} = useSelector(state => state.libraryReducer)
    const [inputForm, setInputForm] = useState({
        id:'',
        author:'',
        title: '',
        publisher: '',
        libraryType: '',
        quantity: '',
        price: '',

        // author: '',
        // price: '',
        // publisher: '',
        // libraryType: '',
        // price: '',
        // quantity: '',
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
        dispatch(updatelibraryAsync(inputForm));
        navigate("/")
    };

    useEffect(() => {
        dispatch(singlelibraryAsync(id));
    }, []);

    useEffect(() => {
        if(library)
            setInputForm(library)
    }, [library])

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
                    <button type="submit" className="prbtn">Update</button>
                </div>
            </Form>
        </div>
    );
};

export default Editlibrary;
