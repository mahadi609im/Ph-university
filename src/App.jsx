import React, { Suspense } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import UsersManagement from './Components/UsersManagement';

let userDataPromise = fetch('./data.json').then(res => res.json());

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Suspense fallback={<h3>Loading...</h3>}>
        <UsersManagement userDataPromise={userDataPromise}></UsersManagement>
      </Suspense>
      {/* <User></User> */}
      <Footer></Footer>
    </div>
  );
};

export default App;
