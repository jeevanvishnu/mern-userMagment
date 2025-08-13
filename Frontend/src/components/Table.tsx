import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';


const Table = () => {
  type User ={
    _id: string,
    name:string,
    email:string,
    createdAt:string
  }
  
  
  const [user , setUser] = useState<User[]>([])

  const URL = 'http://localhost:4000/api/user'
  const {id} = useParams()
  console.log(id)
  const formateDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-Us",{
      month:"short",
      day:"numeric",
      year:"numeric"
    });
  }
 

  useEffect(() => {
    const userData = async () =>{
      try {
        await await axios.get(URL)
        .then((res)=>setUser(res.data))
        
      } catch (error) {
        console.log(error);
        
      }
    }
    userData()
  })
  const deletUser = async (id:string,e)  =>{
    e.preventDefault()
    try {
      await axios.delete(`${URL}/${id}`)
      setUser(pre => pre.filter((user)=>user._id !== id))
      toast.success("Delete sucessfully")
    } catch (error) {
      if(error instanceof Error)
        console.log(error);
        
    }
  }

  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        
        <th>No</th>
        <th>Name</th>
        <th>email</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
      user.map((data, index)=>(
        <tr className="bg-base-200" key={data._id}>
        <th>{index + 1}</th>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{formateDate(data.createdAt)}</td>
        <th>
          <button onClick={(e)=>deletUser(data._id,e)}  className='mr-2 btn btn-error'>Delete</button>
          <Link to={`/${data._id}`}>
          <button className='btn btn-success'>Edit</button>
          </Link>
        </th>
      </tr>
      ))
     }
      
      
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Table