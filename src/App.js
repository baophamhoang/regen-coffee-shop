import './App.css';
import { DISHES } from './shared/dishes';
import { Component } from 'react'
import Main from './components/MainComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return (
      <Main/>
    );
  }
}



export default App;
