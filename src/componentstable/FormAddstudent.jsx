import React, { Component } from "react";

export default class FormAddstudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userCode: "",
        userName: "",
        dateOfBirth: "",
        address: "",
        email: "",
        password: "",
      },
    };
  }

  //ham lắng nghe sự thay đổi của các ô input
  //hàm xử lí gưie dữ liệu
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("form duoc guwi di")
  // };
  HandlecloseForm = () => {
    this.props.handleClose(false);
  };
  handleChangeInput = (e) => {
    const { value, name } = e.target;

    //set laji state
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };
  //ham xu ly du lieu
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.user);
  };
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Thêm mới sinh viên
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={this.HandlecloseForm}
                  onChange={(e) => this.handleChangeInput(e)}
                />
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  {" "}
                  //sự kiện submit form
                  <div className="mb-2">
                    <label htmlFor="studentCode" className="form-label">
                      Mã sinh viên
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="studentCode"
                      value={this.userCode}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                    <div className="text-danger"></div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="studentName" className="form-label">
                      Tên sinh viên
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="studentName"
                      value={this.userName}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                    <div className="text-danger"></div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="dateOfBirth" className="form-label">
                      Ngày sinh
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dateOfBirth"
                      value={this.dateOfBirth}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                    <div className="text-danger"></div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="address" className="form-label">
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={this.address}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={this.email}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                    <div className="text-danger"></div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="password" className="form-label">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={this.password}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                    <div className="text-danger"></div>
                  </div>
                  <div className="d-flex justify-content-end gap-3">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={this.HandlecloseForm}
                    >
                      Hủy
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
