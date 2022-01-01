import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function HeaderAddtrack(props) {
    return (
        <>

            <div
                className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                style={{
                    minHeight: "600px",
                    backgroundImage:
                        "url(" + require("assets/img/theme/img-1-1000x600.jpg") + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                }}
            >
                {/* Mask */}
                <span className="mask bg-gradient-default opacity-8" />
                {/* Header container */}
                <Container className="d-flex align-items-center" fluid>
                    <Row>
                        <Col lg="12" md="12">
                            <h1 className="display-2 text-white">All Tracks</h1>
                            <p className="text-white mt-0 mb-5">
                                This is page will show all of the tracks.
                            </p>
                            <Button
                                color="success"
                                onClick={() => props.setModal(true)}
                                size="md"
                            >
                                Add Track
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default HeaderAddtrack;
