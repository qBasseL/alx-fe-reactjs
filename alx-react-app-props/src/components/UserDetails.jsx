import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  // Use context to access the user data globally
  const userData = useContext(UserContext);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
