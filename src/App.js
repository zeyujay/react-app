import './App.css';
import { useEffect, useState } from 'react';
function App () {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://43.206.19.9:3002/test/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setList(res);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div>
      <ul>
        {list &&
          list.map((item) => {
            console.log(item);
            return <li key={item._id}>{JSON.stringify(item)}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
