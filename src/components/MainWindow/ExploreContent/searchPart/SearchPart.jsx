import React, {useContext, useState} from 'react';
import styles from './SearchPart.module.scss'
import img from '../../../img/discord.jpg'
import {HighlightAltOutlined, HighlightOffSharp, Search} from "@mui/icons-material";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";

const SearchPart = observer(() => {
    const {exploreStore} = useContext(Context);
    const [value, setValue] = useState("");
    const [isInputActive, setIsInputActive] = useState(false);
    const handleInputClick = (e) => {
        e.stopPropagation();
        setIsInputActive(true);
    }

    let label;
    let placeholder;
    if (exploreStore.currentChoice === exploreStore.pages.home) {
        label = "Find Your Community on Discord";
        placeholder = "Explore Communities";
    } else if (exploreStore.currentChoice === exploreStore.pages.since) {
        label = "Find Since&Tech Communities on Discord";
        placeholder = "Explore Gaming serves";
    } else if (exploreStore.currentChoice === exploreStore.pages.hubs) {
        label = "";
        placeholder = "";
    } else if (exploreStore.currentChoice === exploreStore.pages.education) {
        label = "Find Education Communities on Discord";
        placeholder = "Explore Education servers";
    } else if (exploreStore.currentChoice === exploreStore.pages.music) {
        label = "Find Music Communities on Discord";
        placeholder = "Explore Music serves";
    } else if (exploreStore.currentChoice === exploreStore.pages.gaming) {
        label = "Find Gaming Communities on Discord";
        placeholder = "Explore Gaming serves";
    } else if (exploreStore.currentChoice === exploreStore.pages.environment) {
        label = "Find Entertainment Communities on Discord";
        placeholder = "Explore Entertainment serves";
    }

    return (
        <div className={styles.img__box} onClick={() => setIsInputActive(false)}>
            <img src={img} alt="img"/>
            <div className={styles.input__box}>
                <div style={{paddingBottom: '20px'}}>{label}</div>
                <div className={styles.input}
                     style={isInputActive ? {
                         border: '1px solid #540054',
                         boxShadow: '0px 0px 1px 2px rgba(186,163,186,1)'
                     } : null}
                     onClick={handleInputClick}>
                    <input type="text"
                           value={value}
                           onChange={(e) => setValue(e.target.value)}
                           placeholder={placeholder}/>
                    <div className={styles.input__logo}>
                        {!(value) ?
                            <Search/> :
                            <HighlightOffSharp onClick={() => setValue("")}
                                               style={{color: 'gray', cursor: 'pointer'}}/>}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default SearchPart;