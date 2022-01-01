
import React, { useState, useEffect } from "react";
import Router from "next/router";

import {

    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
    Alert


} from "reactstrap";

const editTrackModal = (props) => {


    const [name, setName] = useState('');
    const [artist, setArtist] = useState('');
    const [year, setYear] = useState('');
    const [link, setLink] = useState('');
    const [isHideAlert, setIsHideAlert] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {

        if (props.data) {

            setData(props.data)
            setName(props.data.name)
            setArtist(props.data.artist)
            setYear(props.data.year)
            setLink(props.data.cover)

        }

    }, [props.data])

    const editTrack = () => {

        let data = {

            name: name, // Name of the track
            artist: artist, // Artist
            year: year, // Year :-)
            cover: link // Cover image URL
        }

        if (name, artist, year, link) {

            try {

                fetch(`https://beta-api.gigco.com/api/mockup/tracks`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then(response => response.json())
                    .then(data => {

                        if (data.status === "success") {

                            setIsSuccess(true)
                            setIsHideAlert(false)

                            setTimeout(() => {

                                Router.reload(window.location.pathname)

                            }, 2000)

                        } else {

                            setIsSuccess(false)
                            setIsHideAlert(false)

                        }
                    })
                    .catch((error) => {
                        alert('Something went wrong can not edit this track')
                        console.error('Error:', error)
                    });
            }

            catch (err) {
                console.log(err)

            }

        } else {
            alert('please fill all remaining input')
        }


    }

    return (
        <>
            <Modal
                isOpen={props.isOpen}
                toggle={() => {
                    props.setOpen(false)
                    setIsHideAlert(true)
                    setName(data.name)
                    setArtist(data.artist)
                    setYear(data.year)
                    setLink(data.cover)
                }}
                centered={true}
                fullscreen={1}
            >
                <ModalHeader toggle={() => {
                    props.setOpen(false)
                    setIsHideAlert(true)
                    setName(data.name)
                    setArtist(data.artist)
                    setYear(data.year)
                    setLink(data.cover)
                }}>
                    Edit Track
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>
                                Name
                            </Label>
                            <Input
                                name="name"
                                placeholder="Enter track name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Artist
                            </Label>
                            <Input
                                name="artist"
                                placeholder="Enter artist name"
                                type="text"
                                value={artist}
                                onChange={(e) => setArtist(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Year
                            </Label>
                            <Input
                                name="year"
                                placeholder="Enter year"
                                type="text"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Cover image link
                            </Label>
                            <Input
                                name="cover image link"
                                placeholder="Enter the link of image"
                                type="text"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </FormGroup>
                    </Form>
                    {
                        !isHideAlert ?
                            <Alert
                                color={isSuccess ? "success" : "danger"}
                                toggle={() => { setIsHideAlert(true) }}
                            >
                                {isSuccess ? "Edit Track Successful." : "SomeThing Wrong can not add track."}

                            </Alert>
                            :
                            null

                    }

                </ModalBody>

                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={editTrack}
                    >
                        Edit
                    </Button>
                    {' '}
                </ModalFooter>
            </Modal>
        </>
    )
}

export default editTrackModal;