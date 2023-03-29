import React from 'react'
import Footer from './footer';
function About() {
  return (
<main class="container mx-auto py-12 px-4 bg-green-200">
        <h1 class="text-4xl font-bold mb-4">About Food Management System</h1>
        <p class="text-lg mb-2">Food Management System is a web application aimed at helping people in need by managing food donations and distribution. Our goal is to reduce food waste and help those who need it most.</p>
        <h2 class="text-2xl font-bold mb-2 text-black">Our Mission</h2>
        <p class="mb-2">Our mission is to make sure that no food goes to waste and that everyone has access to fresh, healthy food.</p>
        <h2 class="text-2xl font-bold mb-2 text-black">Our Team</h2>
        <p class="mb-2">We are a team of passionate individuals who believe in making a difference in the world. Our team consists of developers, designers, and food enthusiasts who are dedicated to helping others.</p>
        <h2 class="text-2xl font-bold mb-2 text-black">Contact Us</h2>
        <p class="mb-2">If you have any questions or would like to get involved with our project, please don't hesitate to contact us:</p>
        <ul class="list-disc ml-8 mb-2">
            <li>Email: contact@foodmanagementsystem.com</li>
            <li>Phone: 555-1234</li>
            <li>Address: 123 Main Street, Anytown, USA</li>
        </ul>
        <p class="mb-4">Follow us on social media:</p>
        <ul class="flex">
            <li class="mr-4"><a href="#"><i class="fab fa-facebook fa-2x text-blue-500 hover:text-blue-700"></i></a></li>
            <li class="mr-4"><a href="#"><i class="fab fa-twitter fa-2x text-blue-400 hover:text-blue-600"></i></a></li>
            <li class="mr-4"><a href="#"><i class="fab fa-instagram fa-2x text-blue-400 hover:text-blue-600"></i></a></li>
            </ul>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"/>
            <Footer/>
          </main>

  )
}

export default About;