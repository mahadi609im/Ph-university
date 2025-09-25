import { use, React, useState } from 'react';
import User from './User';
import Container from './Container';
import ToggleBtns from './ToggleBtns';
import Box from './Box';

const UsersManagement = ({ userDataPromise }) => {
  const [toggleBtnClick, setToggleBtnClick] = useState('All');
  const [btns, setBtns] = useState(['All', 'Pending', 'Submitted', 'Reviewed']);
  const userData = use(userDataPromise);
  const [data, setData] = useState(userData);

  let filterdData =
    toggleBtnClick === 'All'
      ? userData
      : userData.filter(el => el.status === toggleBtnClick);
  return (
    <>
      <Box data={data}></Box>

      <ToggleBtns
        toggleBtnClick={toggleBtnClick}
        setToggleBtnClick={setToggleBtnClick}
        btns={btns}
        setBtns={setBtns}
      ></ToggleBtns>

      <Container>
        {filterdData.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {filterdData.map(user => (
              <User
                key={user.ticketId}
                user={user}
                data={data}
                setData={setData}
              ></User>
            ))}
          </div>
        ) : (
          <div className="my-24 text-center font-semibold text-2xl text-slate-500">
            <h3>No data here...</h3>
          </div>
        )}
      </Container>
    </>
  );
};

export default UsersManagement;
