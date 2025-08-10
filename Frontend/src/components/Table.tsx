import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Table = () => {
  type User ={
    id:string,
    name:string,
    email:string,
    createdAt:string
  }
  const [user , setUser] = useState<User[]>([])
  const URL = 'http://localhost:4000/api/user'

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
        <tr className="bg-base-200" key={data.id}>
        <th>{index + 1}</th>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{formateDate(data.createdAt)}</td>
        <th>
          <button  className='mr-2 btn btn-error'>Delete</button>
          <button className='btn btn-success'>Edit</button>
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