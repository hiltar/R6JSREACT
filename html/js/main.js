import React from 'react'
import { render } from 'react-dom'

class infoButton extends React.Component {
    infoAlert() {
        alert("THIS IS MADE BY GROUP 6. MORE WILL BE ADDED...");
    }
    render() {
        return (<button onClick={this.infoAlert}>&#9777;</button>)
    }

}

ReactDOM.render(<infoButton />, document.getElementById('infobutton'));