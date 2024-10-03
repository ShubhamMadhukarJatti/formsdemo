import React,{useRef} from "react";

import classes from './AddCustomer.module.css';

function AddCustomer(props){
    const nameRef =useRef(' ');
    const emailRef=useRef('');
    const telRef=useRef(' ');
    const feedbackRef =useRef(' ');

    function submitHandler(event){
        event.preventDefault();
        //could validation here....
        const customer={
            name:nameRef.current.value,
email:emailRef.current.value,
tel:telRef.current.value,
feedback:feedbackRef.current.value,
        };
        props.onAddCustomer(customer);
    }
    return(
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' ref={nameRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' ref={emailRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='tel'>Telephone</label>
                <input type='number' id='tel' ref={telRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='feedback'>feedback</label>
                <textarea rows='5' id='feedback' ref={feedbackRef} ></textarea>
        </div>
        <button>Add custmoer</button>
        </form>
    );

    }
export default AddCustomer;