//mobx:状态管理,observable：观察变量和组件，action：更改状态
import {observable,action} from 'mobx'
//引入Axios配置文件
import Axios from "../util/axios"
//引入接口api
import Api from "../api/index"
//发请求
export default class UserStore{
    @observable user=[];  //用户
    @observable isLogin=false;   //登录状态
    @observable token="";      //token值是否有

    @action
    login=()=>{  //登录方法,括号里实际使用是接参数的，比如(user,pwd),此处写死的
        return new Promise ((resolve,reject)=>{
            //括号里是(请求地址,请求参数)，此处的请求参数是写死的，实际比如{user:user,pwd:pwd}
            Axios.post(Api.user.userLogin,{userName:"admin",userPwd:123})
                .then((res)=>{
                    console.log(res);
                    //如果成功,把数据传出去，谁调传谁
                    resolve(res)
                })
        })
    }
}