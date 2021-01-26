import React from 'react'

import Pagination from "../common/Pagination/Pagination";
import User from "./User";


const Users = (props) => {


    return (
        <div>
            <Pagination onPageChanged={props.onPageChanged} currentPage={props.currentPage}
                        usersTotalCount={props.usersTotalCount} pageSize={props.pageSize}/>
            {props.users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                                        follow={props.follow} unfollow={props.unfollow}/>)}

        </div>)
}


export default Users;