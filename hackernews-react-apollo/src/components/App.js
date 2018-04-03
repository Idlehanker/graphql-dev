import React, {Component} from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

//
import LinkList from './LinkList'
import CreateLink from './CreateLink';

//
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/
/*
class App extends Component{
  render(){
    return <LinkList />
  }
}
*/
/*
class App extends Component{
  render(){
    return <CreateLink />
  }
}
*/
class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header/>
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList}/>
            <Route exact path="/create" component={CreateLink}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
