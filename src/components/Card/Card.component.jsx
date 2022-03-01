import {Component} from "react";

import './card.component.css'


class CardComponent extends Component {


    render() {

      const {id, name, email} = this.props.monster

        return (
            <div className='card-container'>
                <img alt={`Monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=380x380`}/>
                <h1 key={id}>{name}</h1>
                <p>{email}</p>
            </div>
        );
    }




}


export default CardComponent