import React, {Component} from 'react'
import {Table} from 'react-bootstrap'
import'./App.css'

class Weather extends Component {
    render(){
        return(
            <div className="weather-data" >
                <Table className="weather-table" striped bordered hover>
                    <tbody>
                        <tr>
                            <td><strong>City</strong></td>
                            <td>{this.props.city}</td>
                        </tr>
                        <tr>
                            <td><strong>Country</strong></td>
                            <td>{this.props.country}</td>
                        </tr>
                        <tr>
                            <td><strong>Temperature</strong></td>
                            <td>{this.props.temperature}°F</td>
                        </tr>
                        <tr>
                            <td><strong>Humidity</strong></td>
                            <td>{this.props.humidity}%</td>
                        </tr>
                        <tr>
                            <td><strong>Description</strong></td>
                            <td>{this.props.description}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Weather