import React, { Component } from 'react'
import FormAddstudent from './FormAddstudent';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    //Khoi tao state
    this.state = {
      show:false,
    }
  }
  //show form them moi
  handleShow = () => {
    this.setState({
      show: true
    })
  }

    handleClose = (status) => {
    this.setState({
      show: false,
      show: status,
      userName:"",
    })
  }
  //hafm lăng nghe sự thay đổi trong ô input
  handleChange = (even) => {
    console.log(even.target.value)
    //set laji gia tri state
    this.setState({
      userName:even.target.value,
    })
    
  }


  render() {
    return (
      <>
        {this.state.show === true ? <FormAddstudent handleClose={this.handleClose} />:<></>}
            <div className="d-flex m-5 justify-content-between">
  <div className="d-flex align-items-center gap-4">
    <div style={{ width: 263, fontWeight: 600, fontSize: 20 }}>
      Quản lý sinh viên
    </div>
    <select className="form-select">
      <option value="">-- Sắp xếp theo tên --</option>
      <option value="">Tăng dần</option>
      <option value="">Giảm dần</option>
    </select>
  </div>
  <div className="d-flex align-items-center gap-4">
    <input
      style={{ minWidth: 300 }}
      type="text"
      className="form-control"
              placeholder="Tìm kiếm sinh viên theo tên"
              value={this.state.userName}
              onChange={(e)=>this.handleChange(e)}
    />
    <button
      style={{ minWidth: 170 }}
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={this.handleShow}
    >
      Thêm mới sinh viên
    </button>
  </div>
</div>

        </>
    )
  }
}
