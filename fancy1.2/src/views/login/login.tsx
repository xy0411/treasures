import React from 'react'
import './login.less'
import LoginForm from './component/LoginForm'
import loginLeft from '@/assets/images/login_left.png'
import loginLogo from '@/assets/images/logo.png'
import SwitchDark from "@/components/SwitchDark"

class Login extends React.Component {
    state = {
        
    }
    render() {
        return (
            <div className="login">
                <SwitchDark />
                <div className='login-content'>
                    <div className='login-left'>
                        <img src={loginLeft} alt="" />
                    </div>
                    <div className='login-form'>
                        <div className='login-logo'>
                            <img className='rotate' src={loginLogo} alt="" />
                            <span className='logo-text'>Happier than ever</span>
                        </div>
                        <LoginForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login