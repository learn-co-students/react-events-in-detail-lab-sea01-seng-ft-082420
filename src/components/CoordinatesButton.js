import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleClickEvent = (event) => {
        const eventData = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(eventData)
    }

    render() {
        return(
            <button onClick={this.handleClickEvent}>Click Me!</button>
        )
    }
}
