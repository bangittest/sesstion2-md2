import React from 'react'
import ChidrenComp from './ChidrenComp'

export default function ParentComp() {
    const userName = "Nguyen van A"
    const age=21
  return (
      <div>
          <h1>UserName cua Parent :{userName}</h1>
          <ChidrenComp userName={ userName} age={age} />
    </div>
  )
}
