import logo from './logo.svg';
import './App.css';

import { DISHES } from './shared/dishes';
import { Component } from 'react/cjs/react.production.min';
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
      // <div className="App">
      //   <Navbar dark color="primary">
      //       <div className='container'>
      //         <NavbarBrand href='/'>Logo Brand</NavbarBrand>
      //       </div>
      //     </Navbar>
      //   <Menu  dishes={this.state.dishes} />
      // </div>
      <Main/>
    );
  }
}



export default App;
