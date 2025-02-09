const UserStatus = ({ loggedIn, isAdmin }) => {
  return (
    <div>
      {loggedIn && <h2>{isAdmin ? " Welcome Admin" : " Welcome user"}</h2>}
    </div>
  );
};

export default UserStatus;
