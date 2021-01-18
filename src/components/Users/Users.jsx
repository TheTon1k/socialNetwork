import React from 'react'
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


const Users = (props) => {
    let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? style.selectedPage : null}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id} className={style.userElement}>
                    <div className={`${style.blocks}`}>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={style.avatar}/>
                        </NavLink>
                        <div>
                            {u.followed ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {'API-KEY': '9858ecd9-47d9-4a5d-919d-3d2dabfd54f1'}
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }}>Unfollow</button>

                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '9858ecd9-47d9-4a5d-919d-3d2dabfd54f1'}
                                    })

                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}>Follow</button>}
                                </div>
                                </div>
                                <div className={`${style.blocks}`}>
                                {u.name}<br/>
                                {u.status}<br/>
                                {'u.location.city'}<br/>
                                {'u.location.country'}<br/>
                                </div>

                                </div>)}
                                </div>)
                                }


                                export default Users;