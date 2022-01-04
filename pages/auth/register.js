import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import useAuth from "../../hook/auth";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Alert
} from "reactstrap";

// layout for this page
import Auth from "layouts/Auth.js";

function Register() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const { user, createWithEmailPass, loginWithGoogle, loginWithFacebook, error, setError } = useAuth()

  useEffect(() => {
    if (user) {
      Router.push("/admin/dashboard");
    }
  }, [user])

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-4">
              <small>Sign up with</small>
            </div>
            <div className="text-center">
              <Button
                className="btn-neutral btn-icon mr-4"
                color="default"

                onClick={loginWithFacebook}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/fb.svg")}
                  />
                </span>
                <span className="btn-inner--text">Facebook</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                onClick={loginWithGoogle}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/google.svg")}
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign up with credentials</small>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
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
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                  />
                </InputGroup>
              </FormGroup>
              <Row className="my-4">
                <Col xs="12">

                  <span className="text-muted">
                    Already have an Account ? {" "}
                    <Link href="/auth/login">
                      <a onClick={() => setError("")}>
                        Sign In
                      </a>

                    </Link>
                  </span>
                </Col>

              </Row>
              {error && <Alert color="danger">{error}</Alert>}
              <div className="text-center">
                <Button className="mt-4" color="primary" type="button" onClick={() => createWithEmailPass(email, pass)}>
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

Register.layout = Auth;

export default Register;
