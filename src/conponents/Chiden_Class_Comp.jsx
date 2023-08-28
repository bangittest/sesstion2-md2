import React, { Component } from 'react'

export default class Chiden_Class_Comp extends Component {
    handleClick = () => {
        this.props.handleChangeName("rose")
    
        //cap nhan lai
    }
  render() {
    return (
        <>
             <div>UserName o Childent_class_comp:{this.props.userName}</div>
             <button onClick={this.handleClick}>Change props</button>
        </>
    )
  }
}
