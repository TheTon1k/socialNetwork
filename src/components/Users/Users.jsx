import React from 'react';
import style from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            name: 'Anton Astreiko',
            avatarSrc: 'https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg',
            status: 'Ляжу',
            location: {country: 'Belarus', city: 'Minsk'},
            followed: true
        },
            {
                id: 2,
                name: 'Nataly Prykdodzko',
                avatarSrc: 'https://image.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg',
                status: 'Я так устала на работе сегодня',
                location: {country: 'Belarus', city: 'Minsk'},
                followed: true
            },
            {
                id: 3,
                name: 'Egor Zhukov',
                avatarSrc: 'https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18550.jpg',
                status: 'сяжу',
                location: {country: 'Russia', city: 'Moscow'},
                followed: false
            },

            {
                id: 4,
                name: 'Vera Serdzuchka',
                avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXHw_tbFF6Yx32fwb6XdXnpUSdd6bm55pbzQ&usqp=CAU',
                status: 'ОП ОП ОП ОП',
                location: {country: 'Ukraine', city: 'Kiev'},
                followed: false
            }])
    }
    return (
    <div>
        {
            props.users.map(u => <div key={u.id} className={style.userElement}>
                <div className={`${style.blocks} ${style.left}`}>
                    <img src={u.avatarSrc} className={style.avatar}/>
                    <div>
                        {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </div>
                <div className={`${style.blocks} ${style.right}`}>
                    {u.name}<br/>
                    {u.status}<br/>
                    {u.location.city}<br/>
                    {u.location.country}<br/>
                </div>

            </div>)}
    </div>)
}

export default Users;