import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '9767ee08-545d-497d-bd2a-4ed4c87c4769'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
    getUsers (sizePage, currentPage) {
        return instance.get(`users?count=${sizePage}&page=${currentPage}`).then(response => {
            return response.data
        })
    }
}

export const folllowAPI = {
    unfollow (id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data.resultCode
        })
    },
    follow (id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data.resultCode
        })
    }
}

export const profileAPI = {
    getProfile(idUser) {
        return instance.get(`profile/${idUser}`).then(response => {
            return response.data
        })
    }
}

export const authAPI = {
    getMe() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    }
}