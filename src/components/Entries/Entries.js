import Entry from "./Entry";
import Card from "../UI/Card";
import "./Entries.css";

const Entries = (props) => {
  const entry = props.entry;
  return (
    <div>
      <Card className="Entry">
        <Entry
          firstName={entry[0].firstName}
          lastName={entry[0].lastName}
          phoneNumber={entry[0].phoneNumber}
          email={entry[0].email}
        />
        <Entry
          firstName={entry[1].firstName}
          lastName={entry[1].lastName}
          phoneNumber={entry[1].phoneNumber}
          email={entry[1].email}
        />
      </Card>
    </div>
  );
};

export default Entries;
