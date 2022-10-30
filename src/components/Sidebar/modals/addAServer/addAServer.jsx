import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import styles from './addAServer.scss';
import {ArrowForward, ArrowForwardIosSharp} from "@mui/icons-material";

const AddAServer = ({show, setShow}) => {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose} className={'container'}>
                <Modal.Header>
                    <Modal.Title><b>Create a server</b></Modal.Title>
                    <div style={{fontSize: '14px', color: 'gray'}}>Your server is where you and your friend hang
                        out.
                        Make yours and start talking.
                    </div>
                </Modal.Header>
                <Modal.Body className={'box'}>
                    <div className={'modal__item'}>Create my own{<ArrowForwardIosSharp
                        style={{color: '#71737b'}}/>}</div>
                    <div className={'start__template'}>START FROM A TEMPLATE</div>
                    <div className={'modal__item'}>Gaming{<ArrowForwardIosSharp style={{color: '#71737b'}}/>}</div>
                    <div className={'modal__item'}>School Club{<ArrowForwardIosSharp style={{color: '#71737b'}}/>}</div>
                    <div className={'modal__item'}>Study Group{<ArrowForwardIosSharp style={{color: '#71737b'}}/>}</div>
                    <div className={'modal__item'}>Friends{<ArrowForwardIosSharp style={{color: '#71737b'}}/>}</div>
                    <div className={'modal__item'}>Artists & Creators{<ArrowForwardIosSharp
                        style={{color: '#71737b'}}/>}</div>
                    <div className={'modal__item'}>Local comm unity{<ArrowForwardIosSharp
                        style={{color: '#71737b'}}/>}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Title><b>Have an invite already?</b></Modal.Title>
                    <Button variant="secondary" onClick={handleClose}>
                        Join a Server
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddAServer;