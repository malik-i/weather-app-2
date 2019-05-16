import React, {Component} from 'react'

class Search extends Component{
    render(){
        return(
            <form>
                <input type='text' name='City' placeholder='Enter a City...' />
                <input type='text' name='Country' placeholder='Enter a Country...' />
                <button>Get Weather</button>
            </form>
        )
    }
}
export default Search