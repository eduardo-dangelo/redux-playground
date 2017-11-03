import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ItemList from './containers/tab01/ItemList';
import UpdateStates from './containers/tab02/UpdateStates';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Redux Playground</h2>
        </header>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Tab 1">
            <ItemList />
          </Tab>
          <Tab eventKey={2} title="Tab 2">
            <UpdateStates />
          </Tab>
          <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
