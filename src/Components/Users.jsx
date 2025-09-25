import { use, React } from 'react';
import User from './User';
import Container from './Container';

const Users = ({ userDataPromise }) => {
  const userData = use(userDataPromise);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {userData.map(user => (
          <User key={user.ticketId} user={user}></User>
        ))}
      </div>
    </Container>
  );
};

export default Users;
