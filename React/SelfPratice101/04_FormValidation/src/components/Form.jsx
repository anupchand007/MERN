import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [data, setdata] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (name.trim() === " ") {
      setError("Please Enter a valid name");
      return
    }

    if (password.trim() === "") {
      setError("Please Enter a password");
      return
    }

    if (email.trim() === "") {
      setError("Please Enter a email");
      return
    }

    setError("");
    alert(`Submitted Successfully `);
    setdata(`Submitted name: ${name}, Email: ${email}, and Password: ${password}`)
  };

  return (
    <div className="h-screen p-10 flex flex-col justify-center items-center ">
      <h2 className="text-4xl font-bold text-center mb-5">Registration Form</h2>
      <form onSubmit={handleForm} className="  flex flex-col justify-evenly">
        <div className="mt-2  flex gap-3 items-center justify-between">
          <label htmlFor="name" className="text-2xl font-semibold ">
            Name:
          </label>
          <br />
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            className=" p-2 rounded-sm border"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-2  flex gap-3  items-center justify-between">
          <label htmlFor="email" className="text-2xl font-semibold ">
            Email:
          </label>
          <br />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            className=" p-2 rounded-sm border w-fit"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-2  flex gap-3  items-center justify-between">
          <label htmlFor="password" className="text-2xl font-semibold ">
            Password:
          </label>
          <br />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            className=" p-2 rounded-sm border"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="error">{error}</div>
        <div className="error">{data}</div>
        <button type="submit" className="border p-2 rounded-full
        mt-10 bg-blue-400 text-black font-bold text-center flex justify-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

// import React, { useState } from "react";

// const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleForm = (e) => {
//     e.preventDefault();

//     // Simple validation checks
//     if (name.trim() === "") {
//       setError("Please enter a valid name.");
//       return;
//     }

//     if (email.trim() === "") {
//       setError("Please enter a valid email.");
//       return;
//     }

//     if (password.trim() === "") {
//       setError("Please enter a password.");
//       return;
//     }

//     // If all good
//     setError("");
//     alert("Form submitted successfully!");
//   };

//   return (
//     <div className="h-screen p-10">
//       <h2 className="text-4xl font-bold text-center mb-5">Registration Form</h2>
//       <form onSubmit={handleForm} className="border p-5 w-[500px] mx-auto flex flex-col gap-4">
//         <div className="flex gap-3 items-center">
//           <label htmlFor="name" className="text-2xl font-semibold w-28">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             className="p-2 rounded-sm border flex-1"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="flex gap-3 items-center">
//           <label htmlFor="email" className="text-2xl font-semibold w-28">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             className="p-2 rounded-sm border flex-1"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="flex gap-3 items-center">
//           <label htmlFor="password" className="text-2xl font-semibold w-28">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             className="p-2 rounded-sm border flex-1"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         {error && <div className="text-red-500">{error}</div>}

//         <button type="submit" className="border p-2 rounded bg-blue-500 text-white">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
