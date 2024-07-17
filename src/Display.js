import React, { useState } from "react";

function Display(props){
   const [name,setName]=useState(props.name);
   const [address,setAddress]=useState(props.address);


   const handleNameChange = (event) => {
   
  setName(event.target.value);
};
  const handleAddressChange = (event) => {
   setAddress(event.target.value)
   
  };
    return (
      <div>
        {/* <h2>Display Component</h2> */}
        <label> Name:
          <input type="text"  value={name} onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Address: <input type="text"  value={address} onChange={handleAddressChange}
          />
        </label>
      </div>
    );
  
  }
  export default Display;