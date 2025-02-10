const UserInfo = ({ loggedIn, isAdmin }) => {
  return (
    <div>
      {loggedIn && <h2>{isAdmin ? "welcome admin" : " Welcome user"}</h2>}
    </div>
  );
};

export default UserInfo;
