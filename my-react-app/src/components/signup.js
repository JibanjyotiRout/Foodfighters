import React, { useState } from 'react';
import axios from 'axios';
import { useHistory,Link} from "react-router-dom";


function Signup() {
  const history = useHistory();
  const [ firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");

let handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let res = await fetch("https://dizzy-goat-pea-coat.cyclic.app/customer/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        firstName:firstName,
         lastName:lastName,
         email:email,
          password:password,
             mobileNo:mobileNo
      }),
    });
    console.log(firstName);
    let resJson = await res.json();
    console.log(res);
    if (res.status === 200) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setMobileNo("");
      console.log("success")
      alert("Successfully submitted")
    } else {
      console.log("Some error occured");
      alert("Try after sometime")
    }
  } catch (err) {
    console.log(err);
  }
};

  return (<>
  <div class="flex justify-center items-center h-screen">
    <form class="max-w-lg mx-center p-8 bg-white rounded shadow-lg md:items-center mt-0 content-center " onSubmit={handleSubmit}>
        <h2 class="text-2xl font-bold mb-4">Sign Up</h2>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="donor-name">First Name</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="donor-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Your name" required/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="donor-name">Last Name</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="donor-name" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Your name" required/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">Your Email</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" required/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="password">Password</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required/>
        </div>
       <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="contact-number">Contact Number</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact-number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} type="text" placeholder="Contact Number" required/>
        </div>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg bg-blue-600 content-center" type="Submit" >Sign Up</button>
        <br/>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Want to login? <button class="w-full text-black-800 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={()=>history.push("/login")} >Sign In</button>
                  </p>
       </form>
       </div>
       </>
  );
}

export default Signup;
