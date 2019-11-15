import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bd3762a4-e958-4dc3-9f88-0ef33e33e04c"
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
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status});
    }
}

export const authorAPI = {
    getMe() {
        return instance.get('auth/me');
    }
}