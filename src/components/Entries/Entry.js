import Card from "../UI/Card";
import "./Entry.css";


const Entry = (entry) => {

  const deleteHandler = () => {
  };

  return (
    <Card className="entry">
      <div className="entry__info">
        <h2>First name: {entry.firstName}</h2>
        <h2>Last name: {entry.lastName}</h2>
      </div>
      <div className="entry__info">
        <h2>Phone Number: {entry.phoneNumber}</h2>
        <h2>Email: {entry.email}</h2>
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
