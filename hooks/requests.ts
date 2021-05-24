import axios, { AxiosError, AxiosResponse } from 'axios'
import { GetServerSidePropsContext } from 'next'
import useSWR from 'swr'
import { USER_TOKEN_LOCAL_STORAGE } from '../constants'
import { URL } from './constants'
import * as cookierParser from "cookie"

export const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

// using dummy for now! 
export const getAuthHeaders = () => {
    return {
        headers: {
            Authorization: `Token ${localStorage.getItem(USER_TOKEN_LOCAL_STORAGE) || "899608723b13c4ef178337e01a19b7f257ea6093"}`
        }
    }
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

export const usePut = async (url: string, val: any) => {
    let _data: AxiosResponse<any> | {} = {};
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

export const usePost = async (url: string, val: any) => {
    let _data: AxiosResponse<any> | {} = {};
    let error = "";
    let code: number;
    try {
        const { data } = await axios.post(url, val, getAuthHeaders());
        _data = data;
    }
    catch (err) {
        const [axiosError, axiosErrorCode] = handleAxiosError(err);
        error = axiosError;
        code = axiosErrorCode;
    }
    return [_data, error]
}


export const useGetRequest = (pathname?: string) => {
    const url = URL + pathname;
    const { data, error } = useSWR(url, fetcher);

    return {
        data,
        isLoading: !error && !data,
        error
    }
}