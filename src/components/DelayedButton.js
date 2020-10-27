import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handleClickEvent = (event) => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return(
            <button onClick={this.handleClickEvent}>No, Click Me!</button>
        )
    }
}