import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./SearchBar.css";





class Searchbar extends Component {

    state = {
         value: ''
    }

    timeout = null;

    doSearch = (event) => {
        this.setState({ value: event.target.value })
        clearTimeout(this.timeout);

        this.timeout = setTimeout( () => {
            this.props.callback(this.state.value);
        }, 500);  
    }

    render() {
        return (
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                <FontAwesomeIcon icon="search" className="rmdb-fa-search" size="2x" />
                     <input
                        type="text"
                        className="rmdb-searchbar-input"
                        placeholder="Search"
                        onChange={this.doSearch}
                        value={this.state.value}
                     />
                </div>
            </div>
        ) 
    }
}


export default Searchbar;