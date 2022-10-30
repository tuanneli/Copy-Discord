import React, {useState} from 'react';
import style from './Sidebar.module.scss';
import {AddOutlined, Explore, SaveAlt, SmartToy} from "@mui/icons-material";
import {Link} from "react-router-dom";
import AddAServer from "./modals/addAServer/addAServer";
import Download from "./modals/download/download";

const Sidebar = () => {

    const [isActive, setIsActive] = useState('main');
    const [showAddAServer, setShowAddAServer] = useState(false);
    const [showDownloads, setShowDownloads] = useState(false);

    const handleClick = (info) => {
        setIsActive(info);
        if (info === 'download') {
            setShowDownloads(true)
        } else if (info === 'add') {
            setShowAddAServer(true)
        }
    }

    return (
        <nav className={style.container}>
            <div className={style.box}>
                <div className={style.for__tooltip}>
                    <Link to={'/'} onClick={() => setIsActive('main')}
                          className={`${style.container__element}
                            ${style.main__element}
                            ${isActive === 'main' ? style.active__main : ''}`}>
                    <span
                        className={`${style.side__line} ${isActive === 'main' ? style.side__line__active : ''}`}></span>
                        {<SmartToy/>}
                    </Link>
                    <span className={style.tooltip}>Direct Messages</span>
                </div>
                <div className={style.division__line}/>
                <div className={style.for__tooltip}>
                    <div onClick={() => handleClick('add')}
                         className={`${style.container__element} ${isActive === 'add' ? style.active : ''}`}>
                        {<AddOutlined/>}
                    </div>
                    <span className={style.tooltip}>Add A Server</span>
                </div>
                <div className={style.for__tooltip}>
                    <Link to={'/discovery'} onClick={() => setIsActive('explore')}
                          className={`${style.container__element} ${isActive === 'explore' ? style.active : ''}`}>
                <span
                    className={`${style.side__line} ${isActive === 'explore' ? style.side__line__active : ''}`}>
                </span>
                        {<Explore/>}
                    </Link>
                    <span className={style.tooltip}>Explore Public Servers</span>
                </div>
                <div className={style.division__line}/>
                <div className={style.for__tooltip}>
                    <div onClick={() => handleClick('download')}
                         className={`${style.container__element} ${isActive === 'download' ? style.active : ''}`}>
                        <span
                            className={`${style.side__line} ${isActive === 'download' ? style.side__line__active : ''}`}></span>
                        {<SaveAlt/>}
                    </div>
                    <span className={style.tooltip}>Download Apps</span>
                </div>
                <AddAServer show={showAddAServer} setShow={setShowAddAServer}/>
                <Download show={showDownloads} setShow={setShowDownloads}/>
            </div>
        </nav>
    );
};

export default Sidebar;