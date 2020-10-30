import React, { Component } from 'react'

class DelayedButton extends Component {

    handleClick = (e) => {
        e.persist()
        window.setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
    }

    render() {
        return(
            <button onClick={this.handleClick}>Delayed Button</button>
        )
    }
}

export default DelayedButton
