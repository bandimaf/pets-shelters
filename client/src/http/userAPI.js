import { $authHost, $host } from ".";
import {jwtDecode} from "jwt-decode";

export const registrationAdmin = async (login, password) => {
    const {data} = await $authHost.post('api/admins/registration', {login, password, role: 'ADMIN' });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const loginAdmin = async (login, password) => {
    const {data} = await $host.post('api/admins/login', {login, password});
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const checkAdmin = async () => {
    const {data} = await $authHost.get('api/admins/auth');
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}