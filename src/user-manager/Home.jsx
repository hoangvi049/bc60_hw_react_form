import React, { Component } from "react";
import { connect } from "react-redux";
import UserList from "./UserList";

class Home extends Component {
  handleOnChange = (event) => {
    const { name, value } = event.target;
    const newUser = { ...this.props.stateUserForm, [name]: value };

    const action = {
      type: "CHANGE_FORM",
      payload: newUser,
    };
    this.props.dispatch(action);
  };

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h4 className="display-4 text-center my-3 bg-dark text-white">
          Thông tin sinh viên
        </h4>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Mã sinh viên</label>
              <input
                type="number"
                className="form-control"
                name="id"
                // value={this.props.stateUserForm.id}
                onChange={this.handleOnChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Họ và tên</label>
              <input
                type="text"
                className="form-control"
                name="name"
                // value={this.props.stateUserForm.name}
                onChange={this.handleOnChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                type="number"
                className="form-control"
                name="phone"
                // value={this.props.stateUserForm.phone}
                onChange={this.handleOnChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                // value={this.props.stateUserForm.email}
                onChange={this.handleOnChange}
              />
            </div>
          </div>

          <button
            className="btn btn-success mb-2"
            onClick={() => {
              const action = {
                type: "ADD",
                payload: this.props.stateUserForm,
              };
              this.props.dispatch(action);
            }}
          >
            Thêm SV
          </button>
        </div>
        <UserList stateUserList={this.props.stateUserList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateUserList: state.stateUserList,
  stateUserForm: state.stateUserForm,
});

export default connect(mapStateToProps)(Home);
