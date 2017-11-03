import React, { Component } from 'react';
import { actions } from '../../reducers/tab02/UpdateStateReducer';
import { ButtonGroup, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UpdateStates extends Component {
  render() {
    const { 
      states,
      selectItem1,
      unselectItem1,
      selectItem2,
      unselectItem2,
      selectItem3,
      unselectItem3,
      selectAll,
      unselectAll, 
    } = this.props;

    const data = [
      {
        name: 'item 1',
        prop: states.item1,
        action1: selectItem1,
        action2: unselectItem1
      },
      {
        name: 'item 2',
        prop: states.item2,
        action1: selectItem2,
        action2: unselectItem2
      },
      {
        name: 'item 3',
        prop: states.item3,
        action1: selectItem3,
        action2: unselectItem3
      },
    ];

    return (
      <div>
        <h1>Boolean States</h1>
        {data.map((item, key) => {
          return (
            <div>
              <img 
                src={item.prop ? require('./switch_on.png') : require('./switch_off.png')}
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
            onClick={() => selectAll()}
          >
            SELECT ALL
          </Button>
          <Button
            bsStyle="default"
            onClick={() => unselectAll()}
          >
            UNSELECT ALL
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    states: state.states
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...actions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStates);