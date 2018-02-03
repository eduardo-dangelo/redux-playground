import React, { Component } from 'react';
import { actions } from './reducer';
import { ButtonGroup, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class BooleanState extends Component {
  render() {
    const { states, actions } = this.props;

    const pageContent = [
      {
        name: 'item 1',
        prop: states.item1,
        action1: actions.setItemOneTrue,
        action2: actions.setItemOneFalse,
      },
      {
        name: 'item 2',
        prop: states.item2,
        action1: actions.setItemTwoTrue,
        action2: actions.setItemTwoFalse,
      },
      {
        name: 'item 3',
        prop: states.item3,
        action1: actions.setItemThreeTrue,
        action2: actions.setItemThreeFalse,
      },
    ];

    return (
      <div>
        <h1>Boolean States</h1>
        {pageContent.map((item, key) => {
          return (
            <div key={key}>
              <img 
                src={item.prop ? require('./img/switch_on.png') : require('./img/switch_off.png')}
                alt="switch"
                onClick={() => {item.prop ? item.action2() : item.action1()}}
              />
              <ButtonGroup>
                <Button
                  bsStyle={item.prop ? 'info' : 'default'}
                  onClick={() => item.action1()}
                >
                  TRUE
                </Button>
                <Button
                  bsStyle={item.prop ? 'default' : 'info'}
                  onClick={() => item.action2()}
                >
                  FALSE
                </Button>
              </ButtonGroup>
            </div>
          );
        })}

        <ButtonGroup>
          <Button
            bsStyle="default"
            onClick={() => actions.setAllItensTrue()}
          >
            SELECT ALL
          </Button>
          <Button
            bsStyle="default"
            onClick={() => actions.setAllItensFalse()}
          >
            UNSELECT ALL
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      states: state.states,
    }
  },
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(BooleanState);