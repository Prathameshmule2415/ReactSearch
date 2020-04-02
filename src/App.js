import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list.component";
import "./App.css";
import { Search } from "./component/Searchbar/searchbar.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <Search
          placeholder="Search monster"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monster={filteredMonsters} />
      </div>
    );
  }
}

export default App;
