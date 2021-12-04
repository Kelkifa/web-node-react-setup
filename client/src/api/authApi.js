import axiosClient from "./axiosClient";

const authApi = {
    login: (data) => {
        const url = '/auth/login';
        return axiosClient.post(url, data);
    },
    register: (data) => {
        const url = '/auth/register';
        return axiosClient.post(url, data);
    },
    firstAccess: () => {
        const url = '/auth/firstAccess';
        return axiosClient.get(url);
    }
}


export default authApi;