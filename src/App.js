
import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header'
import Homepage from './Components/Homepage'
import Rules from './Components/Rules'
import Discordpage from './Components/Discord'
import Baseappreciation from './Components/BaseAppreciation'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <main className="App-main">
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}

          <Switch>
            <Route
              exact
              path={'/'}
              component={Homepage}
            />
            <Route
              exact
              path={'/rules'}
              component={Rules}
            />
            <Route
              exact
              path={'/discord'}
              component={Discordpage}
            />
            <Route
              exact
              path={'/baseAppreciation'}
              component={Baseappreciation}
            />
          </Switch>

        </main>
      </div>
    );
  }

}

export default App;
