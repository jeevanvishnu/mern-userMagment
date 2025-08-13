import axios from "axios";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const URL = "http://localhost:4000/api/user";

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post(URL, {
        name,
        email,
      });
      toast.success("User Created sucessfully !");
      navigate("/");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-svh">
      <div className=" w-[600px]  h-[300px]  border border-amber-50 ">
        <h1 className="text-3xl text-center font-serif my-6">Create User</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <label className=" input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </svg>
            <input
              type="text"
              required
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="input validator my-3.5">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="text"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" className=" btn btn-soft btn-success w-[200px]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
