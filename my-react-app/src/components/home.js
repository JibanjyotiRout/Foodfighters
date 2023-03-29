import React from 'react';
import Footer from './footer';
import imag from "./donate.jpg"
import { useHistory,Link } from "react-router-dom";
import "./style.css"
function Home() {
  const history = useHistory();
  return (
    <div className="Home">
      <link rel="stylesheet" href="style.css"></link>
    <body>
    <main>
      <section id="hero">
        <img class="mx-auto mt-0" src={imag}></img>
      <div class="button-container mt-0">
        <button onClick={()=>history.push("/donate")} class="large-button" >Individual</button>
        <button onClick={()=>history.push("/donate")} class="large-button">Party and Function</button>
        <button onClick={()=>history.push("/donate")} class="large-button">Hotel and Resorts</button>
    </div>
        <h2 class="text-red-500">Join us in fighting food waste and hunger</h2>
        <p>We are a food management system that collects surplus food from hotels, resorts, and individuals and supplies it to communities in need. Help us make a difference by donating or volunteering today.</p>
        <Link href="#donate" to="/donate" class="cta-button">Donate Food</Link>
      </section>
    </main>
    
  </body>
  <Footer/>
  </div>
  );
}

export default Home;
