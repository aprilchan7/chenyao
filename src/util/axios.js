import Axios from "axios";
import {config} from "dotenv";
Axios.defaults.baseURL="http://localhost:7777";  //配置像服务器发请求的地址+端口
//请求拦截
Axios.interceptors.request.use(
    config=>{
        //把token添加到header中
        return config
    },
    error => {
        return Promise.reject(error);
    }
);

//响应拦截
Axios.interceptors.response.use((config)=>{
    //将服务器返回的token值储存
    return config;
});
export default Axios;