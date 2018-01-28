import React, { Component } from 'react';
import FaUser from 'react-icons/lib/fa/user';
import { map } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../reducer';


class UserList extends Component {
  selectUser = (item) => ()  => {
    const { actions } = this.props;
    actions.selectUser(item);
  }

  renderUserList = (users) => {
    return map(users, (item, key) => {
      return (
        <div className="form-container" key={key} onClick={this.selectUser(item)}>
          <FaUser />
          <h4>{item.firstName} {item.lastName}</h4>
          <p>{item.email}</p>
        </div>
      );
    });
  }

  render() {
    const { formValues } = this.props;
    console.log('formvalues user list', formValues)

    return (
      <div>
        <h2>User List</h2>
        {this.renderUserList(formValues.users)}
      </div>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(UserList);