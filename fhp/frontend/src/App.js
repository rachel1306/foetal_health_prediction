import React, { useState, useEffect } from "react";
import "./App.css";
import FormPage from "./Components/FormPage.js";

function App() {
  const [data, setdata] = useState([{
    id:"",value:"",
  }]);

  const addValuesHandler= enteredValue =>{};

// Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            setdata({
                number: data.Number,
                description: data.Description,
            });
        })
    );
}, []);
  return (
    <div className="App">
      <FormPage onAddValues={addValuesHandler}/>
    </div>
  );
}

export default App;
