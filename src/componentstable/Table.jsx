import React, { Component } from 'react'
import FormEditStudent from './FormEditStudent'
import FormUpdate from './FormUpdate'

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showE: false,
      showD: false
    }
  }
    //show edit
  handleShow = () => {
    this.setState({
    showE:true
  })
  }
  handleClose = () => {
    this.setState({
      showE: false,
    })
  }
  handleDelete = () => {
    this.setState({
      showD:true
    })
  }
  handleCloseD = () => {
    this.setState({
      showD:false,
    })
  }

  // constructor(props) {
  //   super(props)
  //   //khai bao state
  //   this.state = {
  //     user: [
  //       {
  //         userMasv: 1,
  //         userName: "Nguyen Van A",
  //         dateOfBirth: "12/12/2001",
  //         city: "ha noi",
  //         email: "a@gmail.com",
  //         password:"12345ed"
  //       },
  //       {
  //       userMasv: 2,
  //       userName: "Tran Thi B",
  //       dateOfBirth: "05/08/1995",
  //       city: "Ho Chi Minh",
  //       email: "b@gmail.com",
  //       password: "qwerty12"
  //       }
  //     ]
  //   }
  // }

  render() {
    return (
      <>
        {this.state.showE?<FormUpdate handleClose={this.handleClose} /> : <></>}
        {this.state.showD?<FormEditStudent handleCloseD={ this.handleCloseD} />:<></>}
            <div className="m-5">
  <table className="table table-bordered table-hover">
    <thead>
      <tr>
        <th scope="col">Mã</th>
        <th scope="col">Tên sinh viên</th>
        <th scope="col">Ngày sinh</th>
        <th scope="col">Địa chỉ</th>
        <th scope="col">Email</th>
        <th scope="col">Mật khẩu</th>
        <th className="text-center" colSpan={2} scope="col">
          Hành động
        </th>
      </tr>
    </thead>
            <tbody>
              {/* {
                this.state.user.map((users, index) => (
                  <tr>
                    <td>{ index+1}</td>
                    <td>{ users.userMasv}</td>
                    <td>{ users.dateOfBirth}</td>
                    <td>{ users.city}</td>
                    <td>{ users.email}</td>
                    <td>{ users.password}</td>
        <td>
          <i
            data-bs-toggle="modal"
            data-bs-target="#updateStudent"  
                    className="fa-solid fa-pen-to-square text-warning"
                    onClick={this.handleShow}
          />
        </td>
        <td>
          <i
            data-bs-toggle="modal"
            data-bs-target="#confirmDelete"
                    className="fa-solid fa-trash text-danger"
                    onClick={this.handleDelete}
          />
        </td>
      </tr>
                  
                ))
              } */}
      <tr>
        <td>NV001</td>
        <td>Mark</td>
        <td>13-04-2001</td>
        <td>Tokyo</td>
        <td>mark@gmail.com</td>
        <td>12345654</td>
        <td>
          <i
            data-bs-toggle="modal"
            data-bs-target="#updateStudent"  
                    className="fa-solid fa-pen-to-square text-warning"
                    onClick={this.handleShow}
          />
        </td>
        <td>
          <i
            data-bs-toggle="modal"
            data-bs-target="#confirmDelete"
                    className="fa-solid fa-trash text-danger"
                    onClick={this.handleDelete}
          />
        </td>
      </tr>
    </tbody>
  </table>
</div>

        </>
    )
  }
}
