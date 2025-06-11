import { useState } from "react";

function App() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {data.filter((post) => post.id <= 5).map((post) => (
          <li key={post.id}>
            <strong>{post.id} {post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
