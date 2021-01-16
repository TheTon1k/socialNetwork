import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)

            })
    }
    onPageChanged =(pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        let pagesCount = Math.ceil(this.props.usersTotalCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={()=>{this.onPageChanged(p)}} className={this.props.currentPage===p && style.selectedPage}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id} className={style.userElement}>
                        <div className={`${style.blocks}`}>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={style.avatar}/>
                            <div>
                                {u.followed ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
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
}

export default Users;