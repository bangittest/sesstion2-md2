import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FormAddstudent from './componentstable/FormAddstudent'
import FormEditStudent from './componentstable/FormEditStudent'
import Header from './componentstable/Header'
import Modal from './componentstable/Modal'
import Table from './componentstable/Table'
import Toolbar from './componentstable/Toolbar'
import ListUser from './componentstable/ListUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ParentComp/> */}
      {/* <ClassComp/> */}
      {/* <ListUser/> */}
      
      <Header />
      <Toolbar />
      <Table />
      {/* <FormAddstudent />
      <FormEditStudent />
       <Modal /> */}
    </>
  )
}

export default App
