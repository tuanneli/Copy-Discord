import React, {useState} from 'react';
import styles from './MenuHome.module.scss';
import {People} from "@mui/icons-material";
import ButtomNav from "../commonForMenus/ButtomNav";

const MenuHome = () => {

    const pages = {
        friends: 'Friends',
        directMessages: 'Direct Messages',
        createDM: 'Create DM',
    }

    const [currentChoice, setCurrentChoice] = useState(pages.home);
    let examples = [];
    for (let i = 0; i < 15; i++) {
        examples.push(i);
    }

    return (
        <div className={styles.container}>
            <div className={styles.input__box}>
                <input placeholder={'Find or start a conversation'} type="text"/>
            </div>
            <div className={styles.scrollbox}>
                <div className={styles.box}>
                    <div className={`${styles.item} ${styles.friends}`}>
                        <People style={{marginRight: '18px'}}/>{pages.friends}
                    </div>
                    <div className={`${styles.item} ${styles.direct}`}>
                        <div>{pages.directMessages.toUpperCase()}</div>
                        <div className={styles.add}>
                            +
                        </div>
                    </div>
                    {
                        examples.map(i =>
                            <div key={i} className={styles.all__friends}>
                                <div className={styles.friend}>
                                    <div className={styles.photo}></div>
                                    <div className={styles.text}></div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <ButtomNav/>
        </div>
    );
};

export default MenuHome;