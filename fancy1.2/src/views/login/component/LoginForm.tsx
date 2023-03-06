import React from 'react'
import { Form, Input, Button, message  } from 'antd'
import { UserOutlined, LockOutlined, CloseCircleOutlined } from '@ant-design/icons'

class LoginForm extends React.Component {
    onFinish = (values: any) => {
        if(values.username=='admin'&&values.password=='123') {
            console.log(values);
            message.success("登录成功！");
        } else {
            message.error("用户名或密码错误");
        }
    }
    onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    }
    render() { 
        return (
            <div>
                <Form
                    autoComplete='off'
                    initialValues={{ remember: true }}
                    size="large"
                    labelCol={{ span: 5 }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item name="username" rules={[{required: true, message: "请输入用户名"}]}>
                        <Input placeholder='用户名' prefix={<UserOutlined />}></Input>
                    </Form.Item>
                    <Form.Item name="password" rules={[{required: true, message: "请输入密码"}]}>
                        <Input.Password autoComplete="new-password" placeholder='密  码' prefix={<LockOutlined />}></Input.Password>
                    </Form.Item>
                    <Form.Item className='logo-btn'>
                        <Button htmlType='button' icon={<CloseCircleOutlined />}>重置</Button>
                        <Button type='primary' htmlType='submit' icon={<UserOutlined />}>登录</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default LoginForm