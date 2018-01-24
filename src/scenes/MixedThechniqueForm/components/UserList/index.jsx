import React, { Component } from 'react';
import FaUser from 'react-icons/lib/fa/user';

class UserList extends Component {
  render() {
    return (
      <div>
        <h2>User List</h2>
        <div className="form-container">
          <FaUser />
          <h4>User Name</h4>
          10/07/1998
        </div>
      </div>
    );
  }
}

export default UserList;