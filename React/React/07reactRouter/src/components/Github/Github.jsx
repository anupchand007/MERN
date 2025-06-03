// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

  const data = useLoaderData()

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/anupchand007")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((e) => console.log("Error Occured" + e));
  // }, [])
  
  return (
    <div className=" bg-gray-500 text-4xl text-white flex flex-col justify-center items-center h-5/6">
    Github Repos: {data.public_repos}
    <img src={data.avatar_url} alt="userPofile" height={200} className="flex justify-center items-center"/>
  </div>
);

};
export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/anupchand007")
    return response.json();
}