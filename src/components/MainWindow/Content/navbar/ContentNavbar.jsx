import React, {useContext, useEffect, useState} from 'react';
import styles from "./ContentNavbar.module.scss";
import {Help, Inbox, MapsUgc, People} from "@mui/icons-material";
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";

const ContentNavbar = observer(() => {

    const parts = ['Online', 'All', 'Pending', 'Blocked']
    const {directMessagesStore} = useContext(Context)

    const handleClick = (part) => {
        if (part !== 'Friends') {
            directMessagesStore.setActiveWindow(part);
        }
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.left_part}>
                <div onClick={() => handleClick('Friends')}
                     className={`${styles.part} ${styles.friends}`}>
                    {<People style={{marginRight: '10px', color: '#8e9297'}}/>} Friends
                </div>
                {parts.map(part =>
                    <div key={part}
                         onClick={() => handleClick(part)}
                         style={directMessagesStore.activeWindow === part ? {
                             backgroundColor: '#454950',
                             color: 'white'
                         } : null}
                         className={styles.part}>
                        {part}
                    </div>
                )}
                <div onClick={() => handleClick('Add Friend')}
                     style={directMessagesStore.activeWindow === 'Add Friend' ? {
                         backgroundColor: 'inherit',
                         color: '#46c466'
                     } : null}
                     className={`${styles.part} ${styles.add__friend}`}>
                    Add Friend
                </div>
            </div>
            <div className={styles.right_part}>
                <div className={`${styles.nav__item} ${styles.new__group}`}>
                    <MapsUgc/>
                    <div className={`${styles.tooltip} ${styles.new__group__tooltip}`}>New Group DM</div>
                </div>
                <div className={`${styles.nav__item} ${styles.inbox}`}>
                    <Inbox/>
                    <div className={`${styles.tooltip} ${styles.inbox__tooltip}`}>Inbox</div>
                </div>
                <div className={`${styles.nav__item} ${styles.help}`}>
                    <Help/>
                    <div className={`${styles.tooltip} ${styles.help__tooltip}`}>Help</div>
                </div>
            </div>
        </nav>
    );

});

export default ContentNavbar;