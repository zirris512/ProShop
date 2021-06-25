import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../redux/actions/userActions";

const LoginPage = ({ location, history }) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = user;

    const redirect = location.search ? location.search.split("=")[1] : "/";

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        dispatch(login(email, password));
    };

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        ref={emailRef}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        ref={passwordRef}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Sign In
                </Button>
            </Form>
            <Row className="py-3">
                <Col>
                    New Customer?{" "}
                    <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default LoginPage;
