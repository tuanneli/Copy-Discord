import React from 'react';
import styles from './ButtomNav.module.scss'
import {Headphones, MicOff, Settings, SmartToy} from "@mui/icons-material";

const ButtomNav = () => {
    return (
        <nav className={styles.bottom_nav}>
            <div className={styles.left__part}>
                <div className={styles.nav__logo}>{<SmartToy/>}</div>
                <div>
                    <div className={styles.nav__nickname}>Nickname</div>
                    <div className={styles.nav__hash}>#1234</div>
                </div>
            </div>
            <div className={styles.right_part}>
                <div className={styles.nav_logos}>
                    {<MicOff/>}
                    <div className={`${styles.tooltip} ${styles.mute}`}>Mute</div>
                </div>
                <div className={styles.nav_logos}>
                    {<Headphones/>}
                    <div className={`${styles.tooltip} ${styles.deafen}`}>Deafen</div>
                </div>
                <div className={styles.nav_logos}>
                    {<Settings/>}
                    <div className={`${styles.tooltip} ${styles.settings}`}>User Settings</div>
                </div>
            </div>
        </nav>
    );
};

export default ButtomNav;