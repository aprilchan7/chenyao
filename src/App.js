import React from 'react';
// import logo from './logo.svg';
import './App.css';
//antd的样式也在app.css里改
//引入antd
import {Button} from 'antd'

//引入组件
import Login from './pages/Login'
function App() {
  return (
    <div className="App">
      <Button type="dashed">Button</Button>
        <Login></Login>
    </div>
  );
}

export default App;
