import React, { useState } from "react";

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col,
    Alert
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";
import useAuth from "../../hook/auth";

function Login() {

    const { resetPassword, error } = useAuth()

    const [email, setEmail] = useState('')
    const [isHide, setIsHide] = useState(true)

    const resetPass = () => {

        if (email) {

            resetPassword(email)

        } else {

            alert("Please fill the email.")

        }

    }


    return (
        <>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">

                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <small>Forgot Password</small>
                        </div>
                        <Form role="form">
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        autoComplete="new-email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </InputGroup>
                            </FormGroup>
                            {
                                !isHide ?
                                    <Alert>
                                        Please check your email we already sent your reset password link
                                    </Alert>
                                    :
                                    null
                            }

                            {error && <Alert color="danger">{error}</Alert>}


                            <div className="text-center">
                                <Button className="my-4" color="primary" type="button" onClick={resetPass}>
                                    Reset Password
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>

            </Col>
        </>
    );
}

Login.layout = Auth;

export default Login;
