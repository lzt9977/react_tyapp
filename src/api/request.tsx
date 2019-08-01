import axios from 'axios'
import config from '../config'


let request:any = {
    
};

var cancelTokenCollection:any = {}
var instance = axios.create({
    baseURL: config.baseUrl,
    timeout: 300000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        'Accept': 'application/json'
    }
});

// 添加一个响应拦截器，账户未登录时跳转登录页面
instance.interceptors.response.use((response:any) => {
    return response;
}, function(error) {
    // Do something with response error
    return Promise.reject(error);
});


request.post = function(url:any, data:any = {}) {
    var myConfig = {
        cancelToken: new axios.CancelToken(function(cancel) {
            cancelTokenCollection[url] = cancel
        })
    }

    return instance.post(url, data, myConfig).then(response => {
        return response;
    }).catch(error => {
        console.log("服务器接口出错")
    });

}



export default request