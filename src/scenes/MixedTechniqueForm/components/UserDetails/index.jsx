import React, { Component } from 'react';

class UserDetails extends Component {
  render() {
    const { user } = this.props;

    if (!user.firstName) {
      return (
        <div>
          <h2>User Details</h2>
          <div className="form-container">
            No User Selected
          </div>
        </div>
      );
    }

    return (
      <div>
        <h2>User Details</h2>
        <div className="form-container">
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
        </div>
      </div>
    );
  }
}

export default UserDetails;