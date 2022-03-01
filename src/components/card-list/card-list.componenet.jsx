import{Component}  from "react";
import './card-list.css'
import CardComponent from "../Card/Card.component";

class CardList extends Component {


    render() {
        const {monsters } = this.props;

        return (
            <div className='card-List'>
                {monsters.map((monster) => {
                    const {id, email, name} = monster

                    return (
                       <CardComponent monster={ monster} />
                    );
                })}

            </div>
        );
    }
}


export default CardList;