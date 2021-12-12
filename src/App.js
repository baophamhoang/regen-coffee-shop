import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
            <div className='container'>
              <NavbarBrand href='/'>Logo Brand</NavbarBrand>
            </div>
          </Navbar>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <Menu  dishes={this.state.dishes} />
      </div>
    );
  }
}



export default App;
