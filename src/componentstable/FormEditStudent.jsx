import React, { Component } from 'react'

export default class FormEditStudent extends Component {
  constructor(props) {
    super(props)
  }
  HandlecloserForm = () => {
    this.props.handleCloseD()
  }
  render() {
    return (
        <>
            <div
  className="modal fade"
  id="confirmDelete"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Xác nhận
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={this.HandlecloserForm}
        />
      </div>
      <div className="modal-body">
        Bạn có xác nhận muốn xóa sinh viên có mã SV001?
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={this.HandlecloserForm}
        >
          Hủy
        </button>
        <button type="button" className="btn btn-danger">
          Xóa
        </button>
      </div>
    </div>
  </div>
</div>

        </>
    )
  }
}
