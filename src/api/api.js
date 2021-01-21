import * as axios from "axios";


let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '9858ecd9-47d9-4a5d-919d-3d2dabfd54f1'}
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status){
        return instance.put(`profile/status/`,{status:status})
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe=false) {
        return instance.post(`auth/login`,{email,password,rememberMe})
    },
    logout() {
        return instance.delete(`/auth/login`)
    }

}