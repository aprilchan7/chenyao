import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//antd样式,像elementui
import "antd/dist/antd.css"
//引入store
import store from"./store"
//mobx-react 。通过Provider组件进行全局注册，引入状态仓库，取数据就可以this.props.xxx
import {Provider} from "mobx-react"
ReactDOM.render(
    <Provider {...store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
