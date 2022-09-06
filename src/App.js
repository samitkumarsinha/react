import { useState, useEffect } from "react";
import "./App.css";
import Userlist from "./components/Userlist";

function App() {
  const [data, setData] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((items) => items.json())
      .then((data) => setData(data))
      
  });
  const records =  data.map((items, key) => {
    return <Userlist key={key} data={items} />;
  })
  return (
    <>
      {records}
    </>
  );
}
export default App;
