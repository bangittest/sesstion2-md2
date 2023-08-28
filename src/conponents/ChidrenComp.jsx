
import React from 'react'

export default function ChidrenComp(props) {
    console.log(props.userName)
    console.log(props.age)
  return (
      <div>{ props.userName}</div>
  )
}
