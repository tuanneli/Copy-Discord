import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import './download.scss';
import {AndroidSharp, Apple, Computer, GridView, PersonalVideo} from "@mui/icons-material";

const Download = ({show, setShow}) => {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>

                <Modal.Body>
                    <div className={'download__first__row'}>
                        <div className={'download__mini_container'}>
                            <div className={'download__mini_container__logo'}>{<PersonalVideo/>}</div>
                            <div className={'download__mini_container__texts'}>
                                <div className={'download__mini_container__texts__text'}>Mac OS</div>
                                <button className={'download__mini_container__texts__button'}>Download</button>
                            </div>
                        </div>
                        <div className={'download__mini_container'}>
                            <div className={'download__mini_container__logo'}>{<GridView/>}</div>
                            <div className={'download__mini_container__texts'}>
                                <div className={'download__mini_container__texts__text'}>Windows</div>
                                <button className={'download__mini_container__texts__button'}>Download</button>
                            </div>
                        </div>
                        <div className={'download__mini_container'}>
                            <div className={'download__mini_container__logo'}>{<Computer/>}</div>
                            <div className={'download__mini_container__texts'}>
                                <div className={'download__mini_container__texts__text'}>Linux</div>
                                <button className={'download__mini_container__texts__button'}>Download</button>
                            </div>
                        </div>
                    </div>
                    <div className={'or__on__the__go'}>Or on the go</div>
                    <div className={'download__second__row'}>
                        <div className={'download__mini_container'}>
                            <div className={'download__mini_container__logo'}>{<Apple/>}</div>
                            <div className={'download__mini_container__texts'}>
                                <div className={'download__mini_container__texts__text'}>Apple iOS</div>
                                <button className={'download__mini_container__texts__button'}>Download</button>
                            </div>
                        </div>
                        <div className={'download__mini_container'}>
                            <div className={'download__mini_container__logo'}>{<AndroidSharp/>}</div>
                            <div className={'download__mini_container__texts'}>
                                <div className={'download__mini_container__texts__text'}>Android</div>
                                <button className={'download__mini_container__texts__button'}>Download</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Download;