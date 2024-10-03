import React ,{useState} from "react";
import CustomersList from './Components/CustomersList';
import './App.css';
import AddCustomer from "./Components/AddCustomer";
function App(){
  
//   const dummuyCustomers =[
// {
  
//   id:1,
//   name:'Dummy Customer 1',
//   email:'dummycustomer1@bitcode.in',
//   tel:'12345',
// },
// {
//   id:2,
//   name:'Dummy Customer 2',
//   email:'dummycustmer2@bitcode.in',
//   tel:'56789',
  
//},

//  ];
  const [customers,setcustomers]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState();
  async function fetchCustomersHandler()
  {
    //alert("test");
//     fetch("http://localhost:3000/customers").
//     then(Response =>
//     {
// return Response.json();
//     })
//     .then(data=>
//       {
//         setcustomers(data);
//       })
//   }
// async is used to make a function asychronous ,the await keyword will ask
// the exeuction to wait untill the defined task gets executed.
setIsLoading(true);
setError(null);
try{
const Response=await fetch("http://localhost:3000/customers");
if(!Response.ok)
{
  throw new Error("Something went wrong")
}
const data=await Response.json();
setcustomers(data);
}
catch(error){
  setError(error.message);
}
setIsLoading(false);
  }
  let content=<p>Found No Customers</p>;
  if(customers.length>0)
  {
    content=<CustomersList customers={customers}/>;
  }
  if(error)
  {
    content=<p>{error}</p>
  }
  if(isLoading)
  {
    content=<p>Loading data</p>
  }
  async function addCustomerHandler(customer)
  {
    const response=await fetch("http://localhost:3000/customers",
    {
      method:"POST",
      body:JSON.stringify(customer),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data=await response.json();
    console.log(data);
  }
  return(
    <React.Fragment>
    <section>
    <AddCustomer onAddCustomer={addCustomerHandler}></AddCustomer>

    </section>
    <section>
    
    
    <button onClick={fetchCustomersHandler}>Fetch Customer</button>
    </section>
    <section>
    {!isLoading && error && <p>{error}</p>}
    {!isLoading && customers.length>0 &&<CustomersList customers={customers}/> }
    {!isLoading && customers.length===0&& !error &&<p>Found No customers</p>}

    {isLoading && <p>Loading data</p>}
    </section>
    </React.Fragment>
  );

}
export default App;