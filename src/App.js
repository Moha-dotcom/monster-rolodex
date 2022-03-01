import {Component} from "react";

import CardList from "./components/card-list/card-list.componenet";

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {

            Monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response ) => response.json() )
            .then((users) =>  this.setState(() =>  {
                return {Monsters : users}
            }

            ));

    }


    onSearchChange =  (event) => {

        const searchField = event.target.value.toLocaleLowerCase()

        this.setState(() => {
            return {searchField};
        });

    }


    render() {


        const {Monsters, searchField} = this.state
        const {onSearchChange} = this
        const filterMonster = Monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField)
        })




    return (

        <div className='App'>
            <input className='search-box'
                   type='search'
                   placeholder='Search Monsters'
                   onChange={onSearchChange}
            />
            {filterMonster.map((monsters) => {
                return  (
                <div  key={monsters.id} >
                    <h1>{monsters.name}</h1>
                </div>
                );
            })}

            < CardList monsters={ Monsters}  />
        </div>
    );
  }


}

export default App;
