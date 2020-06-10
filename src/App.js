
import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header'
import Homepage from './Components/Homepage'
import Rules from './Components/Rules'
import Discordpage from './Components/Discord'
import Baseappreciation from './Components/BaseAppreciation'
import Footer from './Components/Footer';
import ModsPage from './Components/ModsPage';

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
              path={'/Rules'}
              component={Rules}
            />
            <Route
              exact
              path={'/Discord'}
              component={Discordpage}
            />
            <Route
              exact
              path={'/Base-Appreciation'}
              component={Baseappreciation}
            />
            <Route
              exact
              path={'/ModsPage'}
              component={ModsPage}
            />
          </Switch>
          <footer>
            <Footer />
          </footer>

        </main>
      </div>
    );
  }

}

export default App;
