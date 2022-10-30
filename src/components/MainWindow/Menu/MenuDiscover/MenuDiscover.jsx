import React, {useContext, useState} from 'react';
import styles from './MenuDiscover.module.scss';
import {
    Explore,
    Headphones,
    HistoryEdu,
    Hub, MicOff,
    MusicNote, MusicOff,
    School, Settings,
    SmartToy,
    SportsEsports,
    Tv
} from "@mui/icons-material";
import ButtomNav from "../commonForMenus/ButtomNav";
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";

const MenuDiscover = observer(() => {

    const {exploreStore} = useContext(Context);

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.head}>Discover</div>
                <div>
                    <div onClick={() => exploreStore.setCurrentChoice(exploreStore.pages.home)}
                         className={`${styles.item} ${exploreStore.currentChoice === exploreStore.pages.home ? styles.active : ''}`}>
                        <div className={styles.item__icon}>{<Explore/>}</div>
                        <div className={styles.item__text}>{exploreStore.pages.home}</div>
                    </div>
                    <div onClick={() => exploreStore.setCurrentChoice(exploreStore.pages.gaming)}
                         className={`${styles.item} ${exploreStore.currentChoice === exploreStore.pages.gaming ? styles.active : ''}`}>
                        <div className={styles.item__icon}>{<SportsEsports/>}</div>
                        <div className={styles.item__text}>{exploreStore.pages.gaming}</div>
                    </div>
                    <div onClick={() => exploreStore.setCurrentChoice(exploreStore.pages.music)}
                         className={`${styles.item} ${exploreStore.currentChoice === exploreStore.pages.music ? styles.active : ''}`}>
                        <div className={styles.item__icon}>{<MusicNote/>}</div>
                        <div className={styles.item__text}>{exploreStore.pages.music}</div>
                    </div>
                    <div onClick={() => exploreStore.setCurrentChoice(exploreStore.pages.education)}
                         className={`${styles.item} ${exploreStore.currentChoice === exploreStore.pages.education ? styles.active : ''}`}>
                        <div className={styles.item__icon}>{<School/>}</div>
                        <div className={styles.item__text}>{exploreStore.pages.education}</div>
                    </div>
                    <div onClick={() => exploreStore.setCurrentChoice(exploreStore.pages.since)}
                         className={`${styles.item} ${exploreStore.currentChoice === exploreStore.pages.since ? styles.active : ''}`}>
                        <div className={styles.item__icon}>{<HistoryEdu/>}</div>
                        <div className={styles.item__text}>{exploreStore.pages.since}</div>
                    </div>
                    <div onClick={() => exploreStore.setCurrentChoice(exploreStore.pages.environment)}
                         className={`${styles.item} ${exploreStore.currentChoice === exploreStore.pages.environment ? styles.active : ''}`}>
                        <div className={styles.item__icon}>{<Tv/>}</div>
                        <div className={styles.item__text}>{exploreStore.pages.environment}</div>
                    </div>
                </div>
                <ButtomNav/>
            </div>
        </div>
    );
});

export default MenuDiscover;