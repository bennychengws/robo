import React, { Component } from 'react';
// import { robots } from './robots1';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users=> {this.setState({robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    {
    // console.log(event.target.value)
    // const filteredRobots = this.state.robots.filter(robots => {
    //   return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // })
    // console.log(filteredRobots)
    }
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    console.log(filteredRobots)
    return !robots.length ?
       <h1>Loading</h1> : 
       (
          <div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
              <ErrorBoundry>
                <CardList robots = {filteredRobots}/>
              </ErrorBoundry>
            </Scroll>
          </div>
        );
    }


}

// const App = () => {
//   return (
//       <div className='tc'>
//         <h1>RoboFriends</h1>
//         <SearchBox />
//         <CardList robots = {robots}/>
//       </div>
//     )
// }

export default App;

// import logo from './logo.svg';
// import './App.css';
     
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//              Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
     
// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
