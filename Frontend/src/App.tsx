import React from 'react'
import Home from './pages/Home'
import { Route , Routes } from 'react-router-dom'
import EditForm from './components/EditForm'
import CreateUser from './components/CreateUser'

const App = () => {
 
  return (
    <div>
      <h1 className='text-center my-4 text-3xl '>User Managment</h1>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path='/create' element={<CreateUser/>}/>
        <Route path='/:id' element={<EditForm/>}/>
      </Routes>
     </div>
  )
}

export default App