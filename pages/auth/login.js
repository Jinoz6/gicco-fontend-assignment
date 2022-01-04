import React, { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
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


function Login() {

  const { user, loginWithGoogle, loginWithFacebook, loginWithEmailPass, error, setError } = useAuth()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  useEffect(() => {
    if (user) {
      Router.push("/admin/dashboard");
    }
  }, [user])

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
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
              <small>Or sign in with credentials</small>
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

              {error && <Alert color="danger">{error}</Alert>}

              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={() => loginWithEmailPass(email, pass)}>
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <Link
              href="/auth/forgotpass"

            >
              <a
                className="text-light"
                onClick={() => setError("")}

              >
                <small>Forgot password?</small>
              </a>
            </Link>

          </Col>
          <Col className="text-right" xs="6">

            <Link
              href="/auth/register"

            >
              <a
                className="text-light"
                onClick={() => setError("")}
              ><small>Create new account</small></a>

            </Link>


          </Col>
        </Row>
      </Col>
    </>
  );
}

Login.layout = Auth;

export default Login;
