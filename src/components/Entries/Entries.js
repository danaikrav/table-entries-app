import Entry from "./Entry";
import { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./Entries.css";

const Entries = (props) => {
  const [users, setUsers] = useState([]);

  const ftech_users = async () => {
    const res = await fetch("http://localhost:8080/users").
    then(res => {
      return res.json();
    }).
    then(data => {
      console.log(data);
      setUsers(data);
    })
  };

  return (
    <div>
      <button onClick={ftech_users}>Show users</button>
      <Card className="Entry">
        {users.map((x) => <Entry entry={x}/>
          )}
      </Card>
    </div>
  );
};

export default Entries;
