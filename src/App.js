import {Component} from "react";



import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {

            Monsters: [],
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
    return (
        <div className='App'>
            {this.state.Monsters.map((monsters) => {
                return  <div  key={monsters.id} ><h1>{monsters.name}</h1></div>
            })}
        </div>
    );
  }


}

export default App;
