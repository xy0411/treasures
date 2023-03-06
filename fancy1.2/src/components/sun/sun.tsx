import React from "react"

class Sun extends React.Component {
    state = {
        name: 'xiaoyang'
    }
    render() {
        return (
            <div>
                <span>{this.state.name}</span>
                <span>{this.props.name}</span>
            </div>
        )
    }
}

export default Sun;