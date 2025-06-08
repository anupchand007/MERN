import React from "react";

const Form = () => {
  const handleForm = () => {};

  return (
    <div className="border h-screen p-10">
      <h2 className="text-4xl font-bold text-center mb-5">Registration Form</h2>
      <form onSubmit={handleForm()}>
        <div className="mt-2  flex gap-3 justify-center-safe items-center"><label htmlFor="name" className="text-2xl font-semibold">
          Name:{" "}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className=" p-2 rounded-sm border
        "
        />
        </div>
         <div className="mt-2  flex gap-3 justify-center-safe items-center">
        <label htmlFor="email" className="text-2xl font-semibold">
          Email:{" "}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className=" p-2 rounded-sm border
        "
        />
        </div>
         <div className="mt-2  flex gap-3 justify-center-safe items-center">
        <label htmlFor="password" className="text-2xl font-semibold">
          Password:{" "}
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className=" p-2 rounded-sm border
        "
        />
</div>
        <button type="submit" className="border p-2 rounded-f">Submit</button>
      </form>
    </div>
  );
};

export default Form;
