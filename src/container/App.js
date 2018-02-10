import React, { Component } from 'react';
import SearchBox from "../components/SearchBox";
import './App.css';
import CardList from "../components/CardList";
import "tachyons";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor(){
    super();
    this.state = {
      coins:[],
      searchfield: "",
      select: "name"
    }}
  componentWillMount(){
    fetch("https://api.coinmarketcap.com/v1/ticker/")
      .then(response => response.json())
      .then(data => this.setState({coins:data}));
     }
   onSearchField = (event) => {
     return this.setState({searchfield: event.target.value});
   }
   onselectfunction = (event) => {
     return this.setState({select: event.target.value});
   }

  render() {
    const {searchfield, coins, select} = this.state;
    const searchfilter = coins.filter(coin => {
      return isNaN(coin[select])
      ? coin[select].toLowerCase().includes(searchfield.toLowerCase())
      : coin[select].includes(searchfield);
    })
    return (
      <div className= 'tc f3'>
        <h1 className = 'shadow-4 pa4'>CrptoCurrency</h1>
        <SearchBox
          search = {this.onSearchField}
          selects = {this.onselectfunction}/>
        <Scroll>
          <CardList coinlist = {searchfilter}/>
        </Scroll>>
      </div>
    );
  }
}

export default App;
