import {Component} from "react";


import CardList from "./components/card-list/card-list.componenet";
import SearchBox from "./components/searchBox/search-box";


import './apps.css'

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



            <SearchBox className = 'monsters-Search-Box' OnChangeHandler={onSearchChange} placeholder='search monsters'  />

            < CardList  monsters={ filterMonster}  searchField = {searchField} />
        </div>
    );
  }


}

export default App;


