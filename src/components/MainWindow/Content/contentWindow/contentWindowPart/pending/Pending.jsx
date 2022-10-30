import React, {useState} from 'react';
import styles from "./Pending.module.scss";
import img3 from "../../../../../img/Screenshot_3.png";

const Pending = () => {
    const [inputActive, setInputActive] = useState(true);

    return (
        <div className={`${styles.left} col-12 col-xl-8 p-0`} onClick={() => setInputActive(false)}>
            <div className={`${styles.left__bottom}`}>
                <img style={{flex: '0 1 auto'}} src={img3} alt="nada"/>
            </div>
        </div>
    );
};

export default Pending;