import React, { useState } from "react";
import Router from "next/router";

// reactstrap components
import {

    Container,
    Row,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Button

} from "reactstrap";


import AdminLayout from "layouts/Admin.js";
import Header from "components/Headers/HeaderAddTrack.js";
import ModalAddTrack from '../../../components/Modal/addTrackModal';
import { withProtected } from "../../../hook/protectRoutes";

export async function getServerSideProps(context) {

    try {

        const res = await fetch(`https://beta-api.gigco.com/api/mockup/tracks`)
        const data = await res.json()

        if (data.data.length > 0) {

            return {
                props: { tracks: data }, // will be passed to the page component as props
            }

        } else {

            return {
                props: { tracks: { data: [] } }, // will be passed to the page component as props
            }

        }


    } catch (err) {

        return {
            props: { tracks: { data: [] } }, // will be passed to the page component as props
        }

    }

}


function Gigco({ tracks }) {

    const [modal, setModal] = useState(false)

    const detailPage = (id) => {

        Router.push(`/admin/gigco/${id}`)
    }



    return (
        <>
            <AdminLayout>
                <Header
                    setModal={setModal}
                />

                <ModalAddTrack
                    isOpen={modal}
                    setOpen={setModal}
                />

                {/* Page content */}

                <Container className="mt--7" fluid>

                    <Row>
                        {
                            tracks.data.length > 0 ?

                                tracks.data.map((track) => {

                                    return (
                                        <Col sm="12" md="6" lg="3" xl="3" key={"allTrack" + track.id} className="mb-4">
                                            <Card className="card-shadow" onClick={() => detailPage(track.id)} style={{ cursor: "pointer" }}>
                                                <CardImg
                                                    alt="Card image cap"
                                                    src={track.cover}
                                                    top
                                                    width="100%"
                                                />
                                                <CardBody>
                                                    <CardTitle tag="h2">
                                                        {track.name}
                                                    </CardTitle>
                                                    <CardSubtitle
                                                        className="mb-2 text-muted"
                                                        tag="h5"
                                                    >
                                                        Artist: {track.artist}, {track.year}
                                                    </CardSubtitle>

                                                </CardBody>
                                            </Card>
                                        </Col>

                                    )

                                })
                                :
                                (
                                    <Col className="d-flex justify-content-center">
                                        <Card className="card-shadow">
                                            <CardBody>
                                                <CardTitle tag="h1">
                                                    Fail to fetch data,Please reload this page again. &nbsp;<span><Button color="primary" onClick={() => Router.replace('/admin/gigco')}>Reload</Button></span>
                                                </CardTitle>
                                            </CardBody>

                                        </Card>
                                    </Col>

                                )

                        }

                    </Row>
                </Container>
            </AdminLayout>

        </>
    );
}

export default withProtected(Gigco);
