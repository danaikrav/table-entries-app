import "./EntryForm.css";

const EntryForm = () => {
    return (
        <form>
            <div className="new-entry__controls">
                <div className="new-entry__control">
                    <label>First Name</label>
                    <input type="text" />
                    <label>Last Name</label>
                    <input type="text" />
                </div>
                <div className="new-entry__control">
                    <label>Phone Number</label>
                    <input type="text" />
                    <label>Email</label>
                    <input type="text" />
                </div>
                
            </div>
            <div className="new-entry__actions">
                    <button type="submit">Add Entry</button>
                </div>
        </form>
    )
};

export default EntryForm;