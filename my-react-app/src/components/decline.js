import React from 'react'
import { Link } from 'react-router-dom';
import 'flowbite';
import Distribute from './distribute';
import View from './view';

function Decline() {
  return (
   
<>
<main class="flex-grow p-6">
  <h1 class="text-3xl font-bold mb-6">Dashboard</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-semibold mb-4 text-red-400">Total Donations</h2>
      <p class="text-4xl font-bold text-center">350</p>
    </div>
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-semibold mb-4 text-red-400">Food Categories</h2>
      <p class="text-4xl font-bold text-center">10</p>
    </div>
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-semibold mb-4 text-red-400">Food Banks</h2>
      <p class="text-4xl font-bold text-center">20</p>
    </div>
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-semibold mb-4 text-red-400">Volunteers</h2>
      <p class="text-4xl font-bold text-center">50</p>
    </div>
  </div>

   <Distribute/>
</main>

</>
  )
}

export default Decline;