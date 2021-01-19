import React from 'react'
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";


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
                    }
                    } className={props.currentPage === p ? style.selectedPage : null}>{p}</span>
                })
                }
            </div>
            {
                props.users.map(u => <div key={u.id} className={style.userElement}>
                    <div className={`${style.blocks}`}>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={style.avatar}/>
                        </NavLink>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
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