import React, {useState} from 'react';
import styles from "./Blocked.module.scss";
import img4 from "../../../../../img/Screenshot_4.png";

const Blocked = () => {
    const [inputActive, setInputActive] = useState(true);
    const [value, setValue] = useState("");
    const inputClickHandler = (e) => {
        e.stopPropagation();
        setInputActive(true);
    }

    return (
        <div className={`${styles.left} col-12 col-xl-8 p-0`} onClick={() => setInputActive(false)}>
            <div className={`${styles.left__bottom}`}>
                <img style={{flex: '0 1 auto'}} src={img4} alt="nada"/>
            </div>
        </div>
    );
};

export default Blocked;