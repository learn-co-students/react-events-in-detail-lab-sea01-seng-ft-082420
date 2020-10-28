// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CordinatesButton extends Component {
    
    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        return <button onClick={this.handleClick}></button>
    }
}

export default CordinatesButton;