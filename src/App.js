import React, {Component} from 'react';
import './App.css';
import Module from './Module';
import Search from './Search';
import Weather from './Weather';


const API_Key = '653ce490c43338dbcdbca50a175ec00c'


class App extends Component {

  constructor(){
    super()
    this.state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      isLoaded: false
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&APPID='+ API_Key)
    const data = await api_call.json();

    console.log(data);

    const tempConverted = (((data.main.temp)-270.55)*9/5+32 | 0);

    this.setState({
      temp: tempConverted,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: "",
      isLoaded: true
    })

    console.log(this.state.description)
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
              
                <div weather-section>
                {this.state.isLoaded ?
                  <Weather 
                    temperature={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                  /> :
                  ""}
                </div>
            </div>
  );}
}

export default App;
