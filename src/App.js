import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ItemList from './scenes/ItemList/ItemList';
import BooleanState from './scenes/BooleanState/BooleanState';
import BasicForm from './scenes/BasicForm/BasicForm';
import DinamicForm from './scenes/DinamicForm/DinamicForm';
import FieldArrayForm from './scenes/FieldArrayForm/FieldArrayForm';
import LoadFromState from './scenes/LoadFromState/LoadFromState';
import WizardForm from './scenes/WizardForm/WizardForm';
import MixedThechniqueForm from './scenes/MixedThechniqueForm';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Redux Playground</h2>
        </header>
        <Tabs defaultActiveKey={8} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Switch Content">
            <ItemList />
          </Tab>
          <Tab eventKey={2} title="Boolean States">
            <BooleanState />
          </Tab>
          <Tab eventKey={3} title="Basic Form">
            <BasicForm/>
          </Tab>
          <Tab eventKey={4} title="Dinamic Form">
            <DinamicForm />
          </Tab>
          <Tab eventKey={5} title="Field Array">
            <FieldArrayForm />
          </Tab>
          <Tab eventKey={6} title="Load From State">
            <LoadFromState />
          </Tab>
          <Tab eventKey={7} title="Wizard Form">
            <WizardForm />
          </Tab>
          <Tab eventKey={8} title="Wizard Form">
            <MixedThechniqueForm />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
