import {Component} from "react";



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
            },
                () => console.log(this.state)

            ));

    }


    render() {
        const filterMonster = this.state.Monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(this.state.searchField)
        })



    return (

        <div className='App'>
            <input className='search-box' type='search' placeholder='Search Monsters' onChange={
                (event) => {

                    const searchField = event.target.value.toLocaleLowerCase()

                    this.setState(() => {
                        return {searchField};
                    });

                }
            }
            />
            {filterMonster.map((monsters) => {
                return  <div  key={monsters.id} ><h1>{monsters.name}</h1></div>
            })}
        </div>
    );
  }


}

export default App;
