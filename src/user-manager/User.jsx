import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
  render() {
    const { user, deleteUser } = this.props;
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            <i className="fa fa-pen"></i>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(User);
