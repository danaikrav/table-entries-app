import { useEffect, useState } from "react";
import Api from "../../Api";
import Card from "../UI/Card";
import "./Entry.css";


const Entry = (entry) => {
  let user = entry.entry;
  
  const deleteHandler = () => {};

  return (
    <Card className="entry">
      <div className="entry__info">
        <h2>First name: {user.firstName}</h2>
        <h2>Last name: {user.lastName}</h2>
      </div>
      <div className="entry__info">
        <h2>Phone Number: {user.phoneNumber}</h2>
        <h2>Email: {user.email}</h2>
      </div>
      <div className="entry__info">
      <button className="entry__button" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </Card>
  );
};

export default Entry;
