import React from "react";
import { Switch } from 'antd'

class SwitchDark extends React.Component {
    state= {
        color: '#fff',
        yes: 'true'
    }
    // setState为异步操作 且不使用.bind(this)时需要使用箭头函数调用方法
    onChange = () => {
        this.setState({
            yes: !this.state.yes
        })
        console.log(this.state.yes);
    }
    render() {
        return (
            <Switch
                className="dark"
                checkedChildren={<>🌞</>}
                unCheckedChildren={<>🌜</>}
                onChange={this.onChange}
            />
        )
    }
}

export default SwitchDark