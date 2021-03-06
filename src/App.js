import React, { Component } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import BooleanState from './scenes/BooleanState/index';
import BasicForm from './scenes/BasicForm/index';
import DynamicForm from './scenes/DynamicForm/index';
import FieldArrayForm from './scenes/FieldArrayForm/index';
import LoadFromState from './scenes/LoadFromState/index';
import WizardForm from './scenes/WizardForm/index';
import MixedTechniqueForm from './scenes/MixedTechniqueForm';
import SwitchContent from './scenes/SwitchContent';
import FaBars from 'react-icons/lib/fa/bars';
import FaGithub from 'react-icons/lib/fa/github';
import logo from './img/redux _logo.png'
import './App.scss';

class App extends Component {
  state = {
    showMenu: false,
  };

  handleClick = () => {
    this.setState({
      showMenu: true,
      // key: null,
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
          <div className="title">
            <img src={logo} alt="redux"/>
            <h2>Redux Playground</h2>
          </div>
          <Button
            className={'burger-menu-btn'}
            onClick={this.handleClick}
          >
            <FaBars />
          </Button>
        </header>
        <div className="app-body">
          <Tabs
            activeKey={this.state.key}
            onSelect={this.handleSelect}
            id="nav-tab"
            className={showMenu ? 'show-menu-xs' : 'hide-menu-xs'}
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
              title="Dynamic Form"
              eventKey={4}
              className="internal-page"
            >
              <div className="page-container">
                <DynamicForm />
              </div>
            </Tab>
            <Tab
              title="Field Array Form"
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
        <div className="footer">
          <a href="https://github.com/eduardo-dangelo/redux-playground" rel="noopener">
            <FaGithub/> eduardo-dangelo
          </a>
        </div>
      </div>
    );
  }
}

export default App;
