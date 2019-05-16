import React, {Component} from 'react'

class Search extends Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type='text' name='city' placeholder='Enter a City...' />
                <input type='text' name='country' placeholder='Enter a Country...' />
                <button>Get Weather</button>
            </form>
        )
    }
}
export default Search