import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ItemList from './containers/tab01/ItemList';
import UpdateStates from './containers/tab02/UpdateStates';
import BasicReduxForm from './containers/tab03/BasicReduxForm';
import DinamicForm from './containers/tab04/DinamicForm';
import FieldArrayForm from './containers/tab05/FieldArrayForm';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Redux Playground</h2>
        </header>
        <Tabs defaultActiveKey={5} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Switch Content">
            <ItemList />
          </Tab>
          <Tab eventKey={2} title="Boolean States">
            <UpdateStates />
          </Tab>
          <Tab eventKey={3} title="Basic Form">
            <BasicReduxForm/>
          </Tab>
          <Tab eventKey={4} title="Dinamic Form">
            <DinamicForm />
          </Tab>
          <Tab eventKey={5} title="Field Array">
            <FieldArrayForm />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
