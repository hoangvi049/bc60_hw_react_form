import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";

class UserList extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead className="bg-dark text-white">
            <tr>
              <th>Mã SV</th>
              <th>Họ và tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.stateUserList.map((item) => {
              return <User key={item.id} user={item} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(UserList);
