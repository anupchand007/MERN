import React from "react";

function Card({username, btnText = "visit me"}) {
   
    console.log(username);
    
    
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mt-4">
      <img
        className="w-full h-48 object-cover"
        src="https://media.istockphoto.com/id/2162643372/photo/beautiful-planet-earth-with-night-lights-of-asian-cities-views-from-space-amazing-night.jpg?s=1024x1024&w=is&k=20&c=EjKhluS3_EuQmsVHHhSakXUlgkyGu4NRx73NVFBxlLQ="
        alt="Card Image"
      />

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{username}</h2>
        <p className="text-gray-600 mb-4">
          This is a simple card description. You can add more text or elements
          here as needed. 
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300">
        {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
