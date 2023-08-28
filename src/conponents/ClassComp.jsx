import React, { Component } from 'react'
import Chiden_Class_Comp from './Chiden_Class_Comp';

export default class ClassComp extends Component {
    //khai báo constructor=>Hàm khởi tạo hay gọi là bản thiết kế của 1 đối tượng
    constructor(props) {
        super(props);//super được sử dụng để kế thừa lại các phương thức của lớp cha
        //khai báo state
        this.state = {
            //Danh sách các state muốn dùng muốn khai báo
            company: "Reikkei Accademy",
            status: true,
             userName:'David Backam',
        };
    }
    handleClick=()=> {
        // cập nhật lại state
        this.setState({
            company:"rikkiru",
        })

    }
    handStatus = () => {
        this.setState({
            status: state.status,
        })
    }

    //hàm cập nhận lại state useName
    handleChangeName = (name) => {
        this.props.handleChangeName(name)
        console.log("da nhan", name);
        this.setState({
            userName: name,
        });
        
    }
  render() {
    return (
        <>
            <div>tên công ty:{this.state.company}</div>
            <button onClick={this.handleClick} >Change State</button>
            <button onClick={this.handStatus}>{!this.state.status ? "Hien" : "An"}</button>
            <h1>UserName been trong class:{this.state.userName}</h1>
            <Chiden_Class_Comp
                userName={this.state.userName}
                handleChangeName={this.handleChangeName} />
        </>
        
    )
  }
}

//có 1 nút button có tital là show khi
// click vào hiển thị là ẩn khi click là hiện
//tạo ra 1 state có tên là tital có giá trị làm hiện
//viết 1 hàm để set lại state