import {jwtDecode} from 'jwt-decode';

export const isTokenExpired = (token) => {
    if (!token) return true;

    const { exp } = jwtDecode(token); // Decode JWT payload to get expiry time
    return Date.now() >= exp * 1000; // Convert expiry time to milliseconds and compare with current time
};
