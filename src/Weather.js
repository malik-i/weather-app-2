import React, {Component} from 'react'

class Weather extends Component {
    render(){
        return(
            <ul>
                <li>City: {this.props.city}</li>
                <li>Country: {this.props.country}</li>
                <li>Temperature: {this.props.temperature}</li>
                <li>Humidity: {this.props.humidity}</li>
                <li>Description: {this.props.description}</li>
            </ul>
        )
    }
}

export default Weather