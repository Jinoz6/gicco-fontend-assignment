import React, { useState } from "react";
import Router from "next/router";

// reactstrap components
import {

    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardTitle,


} from "reactstrap";

import AdminLayout from "layouts/Admin.js";
import ModalEditTrack from '../../../components/Modal/editTrackModal';
import { withProtected } from "../../../hook/protectRoutes";


export async function getServerSideProps(context) {

    const { id } = context.query;

    try {

        const res = await fetch(`https://beta-api.gigco.com/api/mockup/tracks/${id}`)
        const data = await res.json()


        return {
            props: { track: data, routeId: id }, // will be passed to the page component as props
        }

    } catch (err) {
        return {
            props: {}, // will be passed to the page component as props
        }
    }

}

function DetailTrack({ track, routeId }) {

    const [modal, setModal] = useState(false)

    const delTrack = () => {

        if (confirm("Are you sure to delete this track ?")) {

            let data = {

                name: track.data.name,
                artist: track.data.artist,
                year: track.data.year,
                cover: track.data.cover,
            }

            try {

                fetch(`https://beta-api.gigco.com/api/mockup/tracks`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then(response => {

                        if (response.status == 200) {

                            alert('Successful delete this track')
                            Router.replace(`/admin/gigco`)

                        } else {

                            alert('Something went wrong can not delete this track')

                        }
                    })

                    .catch((error) => {
                        console.log(error)

                        alert('Something went wrong can not delete this track')
                        console.error('Error:', error)
                    });
            }

            catch (err) {
                console.log(err)

            }

        }
    }

    return (
        <>
            <AdminLayout>
                <ModalEditTrack
                    isOpen={modal}
                    setOpen={setModal}
                    data={track.data}
                />
                <div
                    className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                    style={{
                        minHeight: "680px",
                        backgroundImage:
                            track.data ? `url(${track.data.cover})` : "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                    }}
                >
                    {/* Mask */}
                    <span className="mask bg-gradient-default opacity-8" />
                    {/* Header container */}
                    <Container className="d-flex align-items-center justify-content-center" fluid>
                        <Row>
                            {
                                track.data ?

                                    <Col lg="7" md="10">
                                        <h1 className="display-1 text-white">{track.data.name}</h1>
                                        <h4 className="display-4 text-white">Artist: {track.data.artist}</h4>
                                        <h5 className="display-5 text-white">Year: {track.data.year}</h5>
                                        <p className="text-white mt-0 mb-5">
                                            This is your track detail page. You can see the info you've made
                                            and manage your track in this page.
                                        </p>
                                        <Button
                                            color="info"
                                            onClick={() => setModal(true)}
                                        >
                                            Edit Track
                                        </Button>
                                        &nbsp;&nbsp;&nbsp;
                                        <Button
                                            color="danger"
                                            onClick={delTrack}
                                        >
                                            Delete Track
                                        </Button>
                                    </Col>
                                    :

                                    <Card className="card-shadow">
                                        <CardBody>
                                            <CardTitle tag="h1">
                                                Fail to fetch data,Please reload this page again. &nbsp;<span><Button color="primary" onClick={() => Router.replace(`/admin/gigco/${routeId}`)}>Reload</Button></span>
                                            </CardTitle>
                                        </CardBody>

                                    </Card>

                            }

                        </Row>
                    </Container>
                </div>
            </AdminLayout>

        </>
    );
}

export default withProtected(DetailTrack);
