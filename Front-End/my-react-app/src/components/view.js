import React, { useState } from 'react';
import axios from 'axios';

function View() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [mobileNo, setMobileNo] = useState("");

let handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let res = await fetch("https://dizzy-goat-pea-coat.cyclic.app/food/details", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name:name,
        email:email,
         foodType:foodType,
          quantity:quantity,
           pickupLocation:pickupLocation,
            pickupDate:pickupDate,
             mobileNo:mobileNo
      }),
    });
    console.log(name);
    let resJson = await res.json();
    console.log(res);
    if (res.status === 200) {
      setName("");
      setEmail("");
      setFoodType("");
      setQuantity("");
      setPickupLocation("");
      setPickupDate("");
      setMobileNo("");
      console.log("success")
    } else {
      console.log("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
};

  return (<>
    <form class="max-w-lg mx-center p-8 bg-white rounded shadow-lg md:items-center mt-0" onSubmit={handleSubmit}>
        <h2 class="text-2xl font-bold mb-4">Donate Food</h2>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="donor-name">Your Name</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="donor-name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">Your Email</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="food-type">Food Type</label>
          <div class="relative">
            <select class="block appearance-none w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="food-type" value={foodType} onChange={(e) => setFoodType(e.target.value)}>
              <option>Choose a food type</option>
              <option>Fruits</option>
              <option>Vegetables</option>
              <option>Bread</option>
              <option>Dairy</option>
              <option>Meat</option>
              <option>Other</option>
            </select>
           
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="quantity">Quantity (in kgs)</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" placeholder="Quantity in kgs"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="location">Pickup Location</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} type="text" placeholder="Address"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="date">Pickup Date</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} type="date"/>
       </div>
       <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="contact-number">Contact Number</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact-number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} type="text" placeholder="Contact Number"/>
        </div>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="Submit" >Donate</button>
       </form>
      
       </>
  );
}

export default View;
