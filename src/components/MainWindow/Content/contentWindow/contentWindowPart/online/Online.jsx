import React, {useState} from 'react';
import styles from "./Online.module.scss";
import img1 from "../../../../../img/Screenshot_1.png";

const Online = () => {
    const [inputActive, setInputActive] = useState(true);

    return (
        <div className={`${styles.left} col-12 col-xl-8 p-0`} onClick={() => setInputActive(false)}>
            <div className={`${styles.left__bottom}`}>
                <img style={{flex: '0 1 auto'}} src={img1} alt="nada"/>
            </div>
        </div>
    );
};

export default Online;