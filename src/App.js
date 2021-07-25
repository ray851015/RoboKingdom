import React ,{Component}from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  OnSearchChange(event){
      console.log(event);
  }
  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.OnSearchChange}/>
        <hr />
        <Cardlist robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
