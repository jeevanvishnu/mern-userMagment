import React from 'react'
import { Link } from 'react-router-dom'

const CreateButton = () => {
  return (
    <div>
      <Link to={"/create"} >
        <button className="btn btn-lg btn-primary my-4 ml-4">Create</button>
        </Link>
    </div>
  )
}

export default CreateButton