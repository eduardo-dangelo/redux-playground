import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap';
import { selectItem } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ItemList extends Component {
  renderList = () => {
    const { itens, selectItem } = this.props;
    return(
      <ListGroup>
        {itens.map((item, key) => {
          return (
            <ListGroupItem
              href="#"
              key={key}
              active={false}
              onClick={() => selectItem(item)}
            >
              {item.title}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }

  render() {
    const { item } = this.props; 
    return(
      <div>
        <Col sm={3}>
          {this.renderList()}
        </Col>
        {item ? (
          <Col sm={9}>
            <h1>{item && item.title}</h1>
            <h3>{item && item.info}</h3>
          </Col>
        ) : (
          <h1>Please, select an item</h1>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    itens: state.itens,
    item: state.itemSelected,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectItem: selectItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
