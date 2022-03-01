import {Component} from "react";
import CardList from "../card-list/card-list.componenet";

import './search-box.css';

class SearchBox extends Component {



    render() {
        return (

            <div>
                <input
                    className={`Search-Box ${this.props.className}`}
                    type='search'
                    placeholder={this.props.placeholder}
                    onChange={this.props.OnChangeHandler}
                />

            </div>

        );
    }

}

export default SearchBox;