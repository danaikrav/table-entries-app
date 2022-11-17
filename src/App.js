import React, { useEffect, useState } from "react";

import logo from './logo.svg';
import './App.css';
import Header from "./components/UI/Header";
import Entries from './components/Entries/Entries';
import NewEntry from './components/Entries/NewEntry';

import Api from "./Api";

function App() {

  const entry = [{id: 1,
          firstName: "Dany",
          lastName: "Kravariti",
          phoneNumber: "6969420420",
          email: "dany@indahouse.com",
          },
          {id: 2,
          firstName: "Dany",
          lastName: "Kravariti",
          phoneNumber: "6969420420",
          email: "dany@indahouse.com",
          }
  ]
  /* const [entry, setEntry] = useState([{firstName: "Dany",
  lastName: "Kravariti",
  phoneNumber: "6969420420",
  email: "dany@indahouse.com",
  }]);


  useEffect(()  => {
    const getEntry = async () => {
      try{
        const response = await Api.get("/users", {headers: {"Access-Control-Allow-Origin": "*"} });
      setEntry(response.data);
      console.log(response.data);
    } catch (err) {
      // Not in the 200 response range
      console.log(err.response.data)
    }
    };
    getEntry();
  }, []); */

  return (
    <div className="App">
      <Header></Header>
      <NewEntry></NewEntry>
      <Entries entry={entry}></Entries>
    </div>
  );
}

export default App;
