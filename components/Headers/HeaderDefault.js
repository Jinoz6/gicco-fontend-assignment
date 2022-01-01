import React from "react";

// reactstrap components
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from "reactstrap";

function HeaderDefault() {
    return (
        <>
            <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
                <Container fluid>
                    <div className="header-body">
                        {/* <Row>
                            <Col lg="12" xl="12">
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <a href="#">
                                            Home
                                        </a>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <a href="#">
                                            Library
                                        </a>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem active>
                                        Data
                                    </BreadcrumbItem>
                                </Breadcrumb>

                            </Col>
                        </Row> */}
                    </div>
                </Container>
            </div>
        </>
    );
}

export default HeaderDefault;
