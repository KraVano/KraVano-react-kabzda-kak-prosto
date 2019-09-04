import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5c536e0b-11e4-4eab-8114-cde7c270b749"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
    },

    follow(userId) {
        return instance.post(`follow/${userId}`).then(res => res.data);
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`).then(res => res.data);
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
}

export const author = {
    getMe() {
        return instance.get('auth/me');
    }
}