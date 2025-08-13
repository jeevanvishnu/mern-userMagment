import axios from "axios";
import  { useEffect, useState, type FormEvent } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import toast from "react-hot-toast";
const EditForm = () => {

  type User ={
    name:string,
    email:string,
  }
  const {id} = useParams()

  const navigate = useNavigate()
 
  const [user , setUser] = useState<User>({name:"",email:""})
  console.log(user?.name,"kkk")

  const URL = "http://localhost:4000/api/user";

   useEffect(() => {
    const userData = async () =>{
      try {
        await await axios.get(`${URL}/${id}`)
        .then((res)=>setUser(res.data))
        
      } catch (error) {
        console.log(error);
        
      }
    }
    userData()
  },[])

  
   const handleSubmit = async (event:FormEvent<HTMLFormElement>) =>{ 
    event.preventDefault()
    try {
      const res = await axios.put(`${URL}/${id}`,{
        name:user.name,
        email:user.email
      }
    )
    setUser(res.data)
    toast.success("User Edited Sucessfully")
    navigate('/')
    } catch (error) {
      if(error instanceof Error )
        console.log(error);
        
    }
  }
  
 
  return (
    <div className="flex justify-center items-center h-svh">
      <div className="  w-[600px]  items-center h-[300px]  border border-amber-50 ">
        <h1 className="text-3xl text-center font-serif my-6">Edit User</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center" >
      <label className=" input validator">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </svg>
        <input type="text" required placeholder="Username" value={user?.name}  onChange={(e)=>setUser({...user,name:e.target.value})} />
      </label>

      <label className="input validator my-3.5">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </g>
        </svg>
        <input type="text" required placeholder="Email" value={user?.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
      </label>
      <button type="submit" className=" btn btn-soft btn-success w-[200px]">Submit</button>
      </form>
      </div>
      </div>
  );
};

export default EditForm;
