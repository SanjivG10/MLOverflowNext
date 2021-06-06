import axios, { AxiosError, AxiosResponse } from 'axios'
import { GetServerSidePropsContext } from 'next'
import { USER_TOKEN_LOCAL_STORAGE } from '../constants'
import * as cookierParser from "cookie"

export const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

// using dummy for now! 
export const getAuthHeaders = () => {
    return {
        headers: {
            Authorization: `Token ${localStorage.getItem(USER_TOKEN_LOCAL_STORAGE)}`
        }
    }
}

export const usePostForImage = async (url: string, val: any, extraHeaderArgs: any) => {

    let _data: any = {};
    let error = "";
    let code: number;
    try {

        const { data } = await axios.post(url, val, {
            headers: {
                ...getAuthHeaders().headers,
                ...extraHeaderArgs
            }
        });
        _data = data;
    }
    catch (err) {
        const [axiosError, axiosErrorCode] = handleAxiosError(err);
        error = axiosError;
        code = axiosErrorCode;
    }
    return [_data, error]
}

export const getAuthHeadersFromCookie = (ctx: GetServerSidePropsContext) => {
    const { req: {
        headers: {
            cookie
        }
    } } = ctx;

    let token = "";

    if (cookie) {
        const parsedCookies = cookierParser.parse(cookie);
        token = parsedCookies[USER_TOKEN_LOCAL_STORAGE]
    }

    if (!token) {
        return {}
    }

    return {
        headers: {
            Authorization: `Token ${token || ""}`
        }
    }
}

export const handleAxiosError = (error: AxiosError) => {
    if (error.response) {
        const data = error.response.data;
        if (data.detail) {
            return [data.detail, error.response.status];
        }
        return [JSON.stringify(data), error.response.status];
    } else if (error.request) {
        return ["No response was received from the server", error.code];
    } else {
        return [JSON.stringify(error.message), error.code]
    }
}

export const useGet = async (url: string) => {
    let _data: any = {};
    let error = "";
    let code: number;

    try {

        const { data } = await axios.get(url, getAuthHeaders());
        _data = data;
    }
    catch (err) {
        const [axiosError, errCode] = handleAxiosError(err);
        error = axiosError;
        code = errCode;
    }

    return [_data, error]

}

export const usePut = async (url: string, val: any) => {
    let _data: any = {};
    let error = "";
    let code: number;
    try {
        const { data } = await axios.put(url, val, getAuthHeaders());
        _data = data;
    }
    catch (err) {
        const [axiosError, axiosErrorCode] = handleAxiosError(err);
        error = axiosError;
        code = axiosErrorCode;
    }

    return [_data, error]
}

export const usePatch = async (url: string, val: any) => {

    let _data: any = {};
    let error = "";
    let code: number;
    try {
        const { data } = await axios.patch(url, val, getAuthHeaders());
        _data = data;
    }
    catch (err) {
        const [axiosError, axiosErrorCode] = handleAxiosError(err);
        error = axiosError;
        code = axiosErrorCode;
    }
    return [_data, error]
}

export const useDelete = async (url: string) => {

    let _data: any = {};
    let error = "";
    let code: number;
    try {
        const { data } = await axios.delete(url, getAuthHeaders());
        _data = data;
    }
    catch (err) {
        const [axiosError, axiosErrorCode] = handleAxiosError(err);
        error = axiosError;
        code = axiosErrorCode;
    }
    return [_data, error]
}


export const usePost = async (url: string, val: any, useAuth = true) => {
    let _data: any = {};
    let error = "";
    let code: number;
    try {
        const { data } = await axios.post(url, val, useAuth ? getAuthHeaders() : {});
        _data = data;
    }
    catch (err) {
        const [axiosError, axiosErrorCode] = handleAxiosError(err);
        error = axiosError;
        code = axiosErrorCode;
    }
    return [_data, error]
}

