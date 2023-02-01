import React from 'react';

function Home() {
  return (
    <div className="Home">
      <main>
      <h2>Welcome to the Food Management System</h2>
      <p>We collect food from hotels, resorts, and individual homes and supply it to slum areas.</p>
    </main>
    <div class="button-container">
        <button class="large-button" >Individual</button>
        <button class="large-button">Party and Function</button>
        <button class="large-button">Hotel and Resorts</button>
    </div>

    <footer>
      <p>Copyright ©2023 Food Management System</p>
    </footer>
    </div>
  );
}

export default Home;
