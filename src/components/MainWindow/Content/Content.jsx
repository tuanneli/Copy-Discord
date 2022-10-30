import React, {useState} from 'react';
import styles from './Content.module.scss';
import ContentNavbar from "./navbar/ContentNavbar";
import ContentWindow from "./contentWindow/contentWindowPart/ContentWindow";

const Content = () => {

    return (
        <div className={`${styles.container}`}>
            <ContentNavbar/>
            <ContentWindow/>
        </div>
    );
};

export default Content;