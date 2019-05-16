import React, {Component} from 'react';
import './App.css';
import Module from './Module';
import Search from './Search';


const API_Key = '653ce490c43338dbcdbca50a175ec00c'


class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&APPID='+ API_Key)
    const data = await api_call.json();
    console.log(API_Key)

    console.log(data);
  }
  render(){
  return (
    <div className="module">
                <div className="image-section">
                    <img className='image' src="https://i.ytimg.com/vi/QoTu3PajVFU/maxresdefault.jpg" />
                </div>
                <div className ="search-section">
                    <Search getWeather={this.getWeather} />
                </div>
            </div>
  );}
}

export default App;
