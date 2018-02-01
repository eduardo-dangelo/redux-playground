import React, { Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './reducer';
import { map } from 'lodash';
import './style.scss';

class SwitchContent extends Component {
  selectItem = (item) => {
    const { actions } = this.props;
    actions.selectItem(item);
  }

  renderList = () => {
    const { switchContent: { itemList , itemSelected } } = this.props;
    return(
      <ListGroup>
        {itemList.map((item, key) => {
          const isActive = itemSelected && itemSelected.title === item.title;
          return (
            <ListGroupItem
              key={key}
              active={isActive}
              onClick={() => this.selectItem(item)}
            >
              {item.title}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }

  renderContent = () => {
    const { switchContent: { itemList , itemSelected } } = this.props;

    if (!itemSelected) {
      return (
        <div>
          <Panel>
            <div className="title">
              <h4>Please select an item</h4>
            </div>
            <div className="content">
              <p>No item selected...</p>
            </div>
          </Panel>
        </div>
      );
    }

    if (itemSelected) {
      return (
        <div>
          <Panel>
            <div className="title">
              <h4>{itemSelected.title}</h4>
            </div>
            <div className="content">
              <p>{itemSelected.info}</p>
            </div>
          </Panel>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Switch Content</h1>
        <div className="switch-content-container">
          <Row>
            <Col sm={4}>
              {this.renderList()}
            </Col>
            <Col sm={8}>
              {this.renderContent()}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      switchContent: state.switchContent,
    }
  },
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(SwitchContent);