import React, {useContext, useState} from 'react';
import styles from "./ContentWindow.module.scss";
import ActiveNow from "../activeNowPart/ActiveNow";
import AddFriend from "./addFriend/AddFriend";
import {Route, Routes} from "react-router-dom";
import Blocked from "./blocked/Blocked";
import Pending from "./pending/Pending";
import All from "./all/All";
import Online from "./online/Online";
import {Context} from "../../../../../index";
import {observer} from "mobx-react-lite";

const ContentWindow = observer(() => {
    const {directMessagesStore} = useContext(Context)
    let element;
    if (directMessagesStore.activeWindow === 'Add Friend') {
        element = <AddFriend/>
    } else if (directMessagesStore.activeWindow === 'Online') {
        element = <Online/>
    } else if (directMessagesStore.activeWindow === 'All') {
        element = <All/>
    } else if (directMessagesStore.activeWindow === 'Pending') {
        element = <Pending/>
    } else if (directMessagesStore.activeWindow === 'Blocked') {
        element = <Blocked/>
    }

    return (
        <div className={`${styles.box} row`}>
            {element}
            <ActiveNow/>
        </div>
    );
});

export default ContentWindow;