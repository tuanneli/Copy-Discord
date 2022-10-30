import React from 'react';
import styles from "./ActiveNow.module.scss";

const ActiveNow = () => {
    return (
        <div className={`${styles.right} d-none d-xl-block col-xl-4`}>
            <h5 className={`mt-2 mb-4`}><b>Active Now</b></h5>
            <div className={`text-center`}>
                <div className={`pb-1`}><b>It's quite for now...</b></div>
                <div style={{color: '#a5a8ab', fontSize: '13px'}}>
                    When a friend starts an activity-like playing a
                    game or handing out a voice-we will show it here!
                </div>
            </div>
        </div>
    );
};

export default ActiveNow;