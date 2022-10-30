import React, {useContext, useState} from 'react';
import styles from './ExploreContent.module.scss'
import {observer} from "mobx-react-lite";
import SearchPart from "./searchPart/SearchPart";
import CommunitiesPart from "./comunitiesPart/CommunitiesPart";

const ExploreContent = observer(() => {
    return (
        <div className={styles.container}>
            <SearchPart/>
            <CommunitiesPart/>
        </div>
    );
});

export default ExploreContent;