// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {



    handleClick = (event) => {

        let x = event.clientX
        let y = event.clientY
        let a = [x,y]
        return (this.props.onReceiveCoordinates(a)
        )
    }

    render () {
        return (
            <button onClick={this.handleClick}>
                Yoh
            </button>
        )
    }

}