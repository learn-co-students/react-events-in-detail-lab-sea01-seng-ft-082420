import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    mouse = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return (
            <button onClick={this.mouse}>CLICK</button>
        )
    }
}