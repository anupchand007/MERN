import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

// function Counter() {
//   let [counter, setCounter] = useState(5);

//   const addValue = () => {
//     if (counter === 5) {
//       console.log(`You can go above count ${counter}`);
//     } else {
//       setCounter(counter + 1);
//     }
//   };
//   const removeValue = () => {
//     if (counter === 0) {
//       console.log(`You can go below count ${counter}`);
//     } else {
//       setCounter(counter - 1);
//     }
//   };

//   return (
//     <>
//       <div>
//         <h2>Current Value: {counter}</h2>
//         <button onClick={addValue}>Add Value</button>
//         <button onClick={removeValue}>Remove Value</button>
//       </div>

//       <footer>
//         <span>Current Value: {counter}</span>
//       </footer>
//     </>
//   );
// }

// export default Counter;


// function SwitchColor() {
//   let [color, setColor] = useState("skyblue");

//   return (
//     <div
//       id="background"
//       className="flex justify-center items-center bg-gray-800 w-screen h-screen px-5 py-5"
//       style={{backgroundColor: color}}
//     >
//       <div
//         id="buttonBar"
//         className="border-none h-20 w-7xl rounded-4xl px-10 py-5 flex flex-wrap gap-2.5 justify-evenly"
//       >

//         <button className="text-black px-4 py-2 rounded-full border-none flex justify-center items-center hover:text-amber-600 hover:bg-amber-400"
//           style={{backgroundColor: "White"}}
//           onClick={() => setColor("White")}
//         >White
//         </button>

//         <button className="text-black px-4 py-2 rounded-full border-none flex justify-center items-center hover:text-amber-600"
//           style={{backgroundColor: "Gray"}}
//           onClick={() => setColor("Gray")}
//         >Gray
//         </button>

//         <button className="text-black px-4 py-2 rounded-full border-none flex justify-center items-center hover:text-amber-600"
//           style={{backgroundColor: "Purple"}}
//           onClick={() => setColor("Purple")}
//         >Purple
//         </button>

//         <button className="text-black px-4 py-2 rounded-full border-none flex justify-center items-center hover:text-amber-600"
//           style={{backgroundColor: "Lavender"}}
//           onClick={() => setColor("Lavender")}
//         >Lavender
//         </button>

//         <button className="text-black px-4 py-2 rounded-full border-none flex justify-center items-center hover:text-amber-600"
//           style={{backgroundColor: "Indigo"}}
//           onClick={() => setColor("Indigo")}
//         >Indigo
//         </button>

//       </div>
//     </div>
//   );
// }

// export default SwitchColor;

// function RandomPassword() {

//   let [length, setLenght] = useState('8')
//   let [uppercase, setUppercase ]= useState(true)
//   let [lowercase, setLowercase] = useState(false)
//   let [number, setNumber] = useState(true)
//   let [chars, setChars] = useState(false)
//   let [password, setPassword] = useState("")

//   const passwordCopy = useRef()

//   const copyPassword = useCallback (()=> {
//       passwordCopy.current?.select()
//       // passwordCopy.curren?.setSelectionRange(0, {length})
//       window.navigator.clipboard.writeText(password)
//   }, [password])


//   const RandomPasswordGenerator = useCallback (() => {
//     let pass = "";
//     let str = "";

//     if(uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     if(lowercase) str += "abcdefghijklmnopqrstuvwxyz";
//     if(number) str += "1234567890"
//     if(chars === true) str += "~!@#$%^&*()_+{}:<>?"
    
//     if(str.length === 0){
//       setPassword("PLEASE SELECT AT LEAST ONE OPTION")
//       return
//     }

//     for(let i = 0; i < length; i++){
//       let charIndex = Math.floor(Math.random() * str.length);
//       pass += str.charAt(charIndex);
      
//     }

//     setPassword(pass);
//   }, [uppercase, lowercase, number, chars, length])


//   useEffect(()=>{
//     RandomPasswordGenerator()
//   }, [uppercase, lowercase, number, chars, length,RandomPasswordGenerator])

//   return (
//     <div className="flex items-center justify-center bg-cyan-500 h-screen w-screen ">
//       <div className="flex p-0 h-9/12 w-3xl rounded-4xl justify-center items-center bg-white">
//         <div
//           id="options"
//           className="flex flex-col text-black font-bold p-0 m-0 
//           w-6/6 h-6/6 justify-center items-center box-border rounded-4xl"
//         >
//           <h1 className="flex items-center justify-center">
//             Password Generator
//           </h1>
//           <span className="flex items-center justify-center">
//           Create a strong and secure password to keep your account safe online
//           </span>
//           <div className=" h-35 w-10/12 flex items-center justify-center gap-2">
//             <input
//               type="text"
//               className="border-1 rounded-3xl h-4/12  w-4/6 mt-2 px-3"
//               readOnly
//               value={password}
//               ref= {passwordCopy}
//             />
//             <br />
//             <button
//               className="w-25 h-4/12 border-4 flex justify-center items-center border-none hover:text-red-600"
//               style={{
//                 backgroundColor: "#F9E795",
//                 // border: "2px solid pink",
//                 borderRadius: "30px",
//                 border: "none",
//               }
             
//             }
//             onClick={copyPassword}
//             >
//               Copy
//             </button>
//           </div>
//           <div className=" w-10/12 h-2/4 flex flex-col m-0 justify-evenly">
//             Password: {length}
//             <br />
//             <input
//               type="range"
//               min={6}
//               max={25}
//               onChange={(e)=> {
//                 setLenght(e.target.value)
//               }}
//             />
//             <br />
//             <div className=" flex justify-between">
//               Uppercase
//               <input type="checkbox"
//               defaultChecked={uppercase}
//               onClick={() => {
//                 setUppercase((prev) => (!prev))
//               }}/>
//             </div>
//             <br />
//             <div className=" flex justify-between">
//               LowerCase
//               <input type="checkbox" 
//               defaultChecked={lowercase}
//               onClick={() => {
//                 setLowercase((prev) => (!prev))
//               }}/>
//             </div>
//             <br />
//             <div className=" flex justify-between">
//               Numbers
//               <input type="checkbox" 
//               defaultChecked={number}
//               onClick={() => {
//                 setNumber((prev) => (!prev))
//               }}/>
//             </div>
//             <br />
//             <div className=" flex justify-between">
//               Special Characters <input type="checkbox"
//               defaultChecked={chars} 
//               onClick={() => {
//                 setChars((prev) => (!prev))
//               }}/>
//             </div>
//             <br />
//             <br />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RandomPassword;
