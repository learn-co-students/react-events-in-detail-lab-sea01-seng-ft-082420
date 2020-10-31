import React, { Component } from 'react'

export default class DelayedButton extends Component {

    // setTimeout = (e, this.props.delay) => {
    //     const target = e.target
    //     this.props.onDelayedClick(target)
    // }

    handleClick = (e) => {
        e.persist()
        window.setTimeout( () => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.handleClick} >DELAYED</button>
        )
    }
}