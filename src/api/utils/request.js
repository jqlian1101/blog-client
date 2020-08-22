import axios from "axios";

import { getUrl } from "./config";

const axiosInstance = axios.create({
    timeout: 0,
    headers: {
    }
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
    response => {
        const { data = {} } = response;
        if (response.status !== 200) {
            ELEMENT.Message({
                message: response.statusText || "数据请求失败",
                type: "error"
            });
        }
        if (data.code !== 0) {
            ELEMENT.Message({
                message: data.message || "系统异常",
                type: "error"
            });
            return Promise.reject(data);
        }
        return data;
    },
    error => {
        // 响应错误
        return Promise.reject(error);
    }
);

export function request (
    url,
    data = {},
    {
        method = "post",
        showLoading = true,
        hostKey = "baseUrl",
        ...otherCfg
    } = {}
) {
    // 通用参数
    const common = {
    };

    // 生成请求数据
    const requestData = { ...common, ...data };

    // axios配置
    const config = {
        ...otherCfg,
        method,
        url: getUrl(url, hostKey),
        data: requestData
    };

    return axiosInstance.request(config).then(data => {
        if (data.code !== 0) return Promise.reject(data);
        return data;
    });
}

export default request;
