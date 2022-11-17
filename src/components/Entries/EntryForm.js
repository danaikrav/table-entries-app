import axios from "axios";
import "./EntryForm.css";
import { useState } from "react";


const EntryForm = () => {
    const [firstName, setFirstName] = useState();

    const onFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const [lastName, setLastName] = useState();

    const onLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const [phoneNumber, setPhoneNumber] = useState();

    const onPhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }

    const [email, setEmail] = useState();

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const postUser = () => {
        axios.post("http://localhost:8080/users", {id:45, firstName:firstName, lastName:lastName, phoneNumber:phoneNumber, email:email});
    }

    return (
        <form>
            <div className="new-entry__controls">
                <div className="new-entry__control">
                    <label>First Name</label>
                    <input type="text" onChange={onFirstNameChange}/>
                    <label>Last Name</label>
                    <input type="text" onChange={onLastNameChange}/>
                </div>
                <div className="new-entry__control">
                    <label>Phone Number</label>
                    <input type="text" onChange={onPhoneNumberChange}/>
                    <label>Email</label>
                    <input type="text" onChange={onEmailChange}/>
                </div>
                
            </div>
            <div className="new-entry__actions">
                    <button type="submit" onClick={postUser}>Add Entry</button>
                </div>
        </form>
    )
};

export default EntryForm;