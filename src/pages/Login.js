import React, {Component} from 'react'
//引入antd
import {Layout} from 'antd';
//引入antd的form表单
import { Form, Input, Button, Checkbox } from 'antd';
import {inject,observer} from "mobx-react"
//用到的引入，不能多引↓
const {Header, Content, Footer} = Layout;
//
@inject('user')
//观察
@observer
class login extends Component {
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };
        const onFinish = values => {
            console.log('Success:', values);
            //表单提交的时候，用user的login方法，发请求
            this.props.user.login();
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div>
               <Header>班级管理系统</Header>
                <Content>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
                <Footer>我是页脚</Footer>
            </div>
        )
    }
}

export default login