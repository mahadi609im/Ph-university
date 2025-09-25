import React, { Suspense, useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Box from './Components/Box';
// import User from './Components/User';
import ToggleBtns from './Components/ToggleBtns';
import Users from './Components/Users';

let userDataPromise = fetch('./data.json').then(res => res.json());

const App = () => {
  const [toggleBtnClick, setToggleBtnClick] = useState('All');
  const [btns, setBtns] = useState(['All', 'Pending', 'Submited', 'Reviewd']);

  return (
    <div>
      <Navbar></Navbar>
      <Box></Box>
      <ToggleBtns
        toggleBtnClick={toggleBtnClick}
        setToggleBtnClick={setToggleBtnClick}
        btns={btns}
        setBtns={setBtns}
      ></ToggleBtns>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users userDataPromise={userDataPromise}></Users>
      </Suspense>
      {/* <User></User> */}
      <Footer></Footer>
    </div>
  );
};

export default App;
