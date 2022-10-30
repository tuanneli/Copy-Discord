import React, {useContext, useState} from 'react';
import styles from "./All.module.scss";
import img2 from "../../../../../img/Screenshot_2.png";
import {Context} from "../../../../../../index";

const All = () => {
    const [inputActive, setInputActive] = useState(true);
    const {directMessagesStore} = useContext(Context)
    return (
        <div className={`${styles.left} col-12 col-xl-8 p-0`} onClick={() => setInputActive(false)}>
            <div className={`${styles.left__bottom}`}>
                <img style={{flex: '0 1 auto'}} src={img2} alt="nada"/>
                <div className={'bg-gray'}>
                    <button onClick={() => directMessagesStore.setActiveWindow('Add Friend')}>Add Friend</button>
                </div>
            </div>
        </div>
    );
};

export default All;