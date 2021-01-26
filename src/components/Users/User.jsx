import React from 'react'
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";


const User = ({user, follow, unfollow,followingInProgress}) => {


    return (
        <div>
            <div className={`${style.blocks}`}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small ? user.photos.small : userPhoto} className={style.avatar}/>
                </NavLink>
                <div>
                    {user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}
                </div>
            </div>
            <div className={`${style.blocks}`}>
                {user.name}<br/>
                {user.status}<br/>
                {'u.location.city'}<br/>
                {'u.location.country'}<br/>
            </div>

        </div>)
}


export default User;