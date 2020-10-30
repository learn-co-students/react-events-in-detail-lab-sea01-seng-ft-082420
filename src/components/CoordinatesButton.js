import React, { Component } from 'react'

class CoordinatesButton extends Component {
    
    handleClick = (event) => {
        let array = []
        array.push(event.clientX)
        array.push(event.clientY)
        this.props.onReceiveCoordinates(array)
    }

    render() {
        return(
            <button onClick={this.handleClick} >Coordinates Button</button>
        )
    }
}

export default CoordinatesButton
