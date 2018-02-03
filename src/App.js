import React, { Component } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import BooleanState from './scenes/BooleanState/index';
import BasicForm from './scenes/BasicForm/index';
import DinamicForm from './scenes/DynamicForm/index';
import FieldArrayForm from './scenes/FieldArrayForm/index';
import LoadFromState from './scenes/LoadFromState/LoadFromState';
import WizardForm from './scenes/WizardForm/WizardForm';
import MixedTechniqueForm from './scenes/MixedTechniqueForm';
import SwitchContent from './scenes/SwitchContent';
import FaBars from 'react-icons/lib/fa/bars';
import './App.scss';

class App extends Component {
  state = {
    showMenu: false,
  };

  handleClick = () => {
    this.setState({
      showMenu: true,
      key: null,
    });
  }

  handleSelect = (key) => {
    this.setState({
      key,
      showMenu: false,
    });
  }

  render() {
    const { showMenu } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Redux & Redux-Form Playground</h1>
          <Button
            className={showMenu ? 'hidden' : 'burger-menu-btn'}
            onClick={this.handleClick}
          >
            <FaBars />
          </Button>
        </header>
        <Tabs
          activeKey={this.state.key}
          onSelect={this.handleSelect}
          className={showMenu ? '' : 'hide-menu'}
          id="nav-tab"
        >
          <Tab
            title="Switch Content"
            eventKey={1}
            className="internal-page"
          >
            <div className="page-container">
              <SwitchContent/>
              {/*<ItemList />*/}
            </div>
          </Tab>
          <Tab
            title="Boolean States"
            eventKey={2}
            className="internal-page"
          >
            <div className="page-container">
              <BooleanState />
            </div>
          </Tab>
          <Tab
            title="Basic Form"
            eventKey={3}
            className="internal-page"
          >
            <div className="page-container">
              <BasicForm />
            </div>
          </Tab>
          <Tab
            title="Dinamic Form"
            eventKey={4}
            className="internal-page"
          >
            <div className="page-container">
              <DinamicForm />
            </div>
          </Tab>
          <Tab
            title="Field Array"
            eventKey={5}
            className="internal-page"
          >
            <div className="page-container">
              <FieldArrayForm />
            </div>
          </Tab>
          <Tab
            title="Load From State"
            eventKey={6}
            className="internal-page"
           >
            <div className="page-container">
              <LoadFromState />
            </div>
          </Tab>
          <Tab
            title="Wizard Form"
            eventKey={7}
            className="internal-page"
          >
            <div className="page-container">
              <WizardForm />
            </div>
          </Tab>
          <Tab
            title="Mixed Technique Form"
            eventKey={8}
            className="internal-page"
          >
            <div className="page-container">
              <MixedTechniqueForm />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
