const UserStatus = ({ email }: { email: string }) => {
  return (
    <div>{email ? <h1>Welcome {email}</h1> : <button>Sign up</button>}</div>
  );
};
export default UserStatus;
