import React, {useState} from 'react';
import styles from "./AddFriend.module.scss";
import img5 from "../../../../../img/Screenshot_5.png";

const AddFriend = () => {
    const [inputActive, setInputActive] = useState(false);
    const [value, setValue] = useState("");
    const inputClickHandler = (e) => {
        e.stopPropagation();
        setInputActive(true);
    }

    return (
        <div className={`${styles.left} col-12 col-xl-8 p-0`} onClick={() => setInputActive(false)}>
            <div className={`${styles.left__top}`}>
                <div className={`mb-2`}><b>ADD FRIEND</b></div>
                <div style={{color: '#a5a8ab', fontSize: '13px'}}>
                    You can add a friend with their Discord Tag.
                    It's cAsE sEnSiTivE!
                </div>
                <div className={styles.input__box}
                     style={inputActive ? {borderColor: '#67c2d0'} : null}>
                    <div className={styles.input__and_label}>
                        <input placeholder={"Enter a Username#0000"}
                               onClick={inputClickHandler}
                               maxLength={37}
                               value={`${value}`}
                               onChange={(e) => setValue(e.target.value)}
                               type="text"/>
                        <div style={!(value) ? {visibility: "hidden"} : {visibility: 'visible'}}
                             className={styles.input__cover}>
                            {value}
                            <p style={{margin: 0, padding: 0, color: '#494e55'}}>#0000</p>
                        </div>
                    </div>
                    <button disabled={!(value)}>Send Friend Request</button>
                </div>
            </div>
            <div className={`${styles.left__bottom}`}>
                <img style={{flex: '0 1 auto'}} src={img5} alt="nada"/>
            </div>
        </div>
    );
};

export default AddFriend;