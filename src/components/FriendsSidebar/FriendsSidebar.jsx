import React from 'react';
import s from './FriendsSidebar.module.css'

const FriendsSidebar = (props) => {
    let sidebar = props.sidebar.map(f => {
        return (
            <div className={s.ilblock}>
                <img
                    src="https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg"
                    alt="" className={`${s.sidebarImg} ${s.block}`}/>
                <div className={s.block}>{f.name}</div>
            </div>
        )
    })
    return (
        <div>
            {sidebar}
        </div>
    )
}


export default FriendsSidebar;