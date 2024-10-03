import { useEffect,useState } from "react";
const Simpleinput = (props) =>
{
    const [enteredName, setEnteredName]=useState("");
    const nameInputChangeHadler=(event)=>{
        setEnteredName(event.target.value);
    };
    const formSubmissionHandler =(event)=>{
        event.preventDefault();
        console.log(enteredName);
    };
    return(
        <from onSubmit={formSubmissionHandler}>
        <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
        type="text"
        id="name"
        value={enteredName}
        onChange={nameInputChangeHadler}
        />
        </div>
        <div className="form action">
        <button>Submit</button>
        </div>
        </from>
    )
}