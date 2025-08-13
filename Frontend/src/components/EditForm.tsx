import React from "react";

const EditForm = () => {
  return (
    <div className="flex justify-center items-center h-svh">
      <div className="flex flex-col  w-[600px]  items-center h-[300px]  border border-amber-50 ">
        <h1 className="text-3xl font-serif my-6">Edit User</h1>
      <label className=" input validator">
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
        <input type="text" required placeholder="Username" />
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
        <input type="text" required placeholder="Email" />
      </label>
      <button className=" btn btn-soft btn-success w-[200px]">Success</button>
      </div>
      </div>
  );
};

export default EditForm;
