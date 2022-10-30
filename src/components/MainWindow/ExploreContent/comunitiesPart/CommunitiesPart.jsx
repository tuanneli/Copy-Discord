import React from 'react';
import {observer} from "mobx-react-lite";
import styles from './CommunitiesPart.module.scss'

const CommunitiesPart = observer(() => {
    const amountOfExamples = 4;
    const examples = [];
    for (let i = 0; i < amountOfExamples; i++) {
        examples.push(i);
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Communities
            </div>
            <div className={styles.cards}>
                {examples.map(i => {
                    return (
                        <div key={i} className={`card ${styles.card}`}>
                            <div className={`card-img-top ${styles.card__img}`}/>
                            <div className={`card-body ${styles.card__body}`}>
                                <h5 className={`card-title ${styles.card__title}`}></h5>
                                <p className={`card-text ${styles.card__text}`}></p>
                                <p className={`card-text ${styles.card__text}`}></p>
                                <p className={`card-text ${styles.card__text}`}></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
});

export default CommunitiesPart;