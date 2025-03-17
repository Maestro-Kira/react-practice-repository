import { AdminInfoList } from "../types";
type AdminInfoProps = {
  admin: AdminInfoList;
};
const AdminInfo: React.FC<AdminInfoProps> = ({ admin }) => {
  return (
    <div>
      <h2>Admin Info:</h2>
      <p>{admin.id}</p>
      <p>{admin.name}</p>
      <p>{admin.email}</p>
      <p>{admin.lastLogin.toLocaleString()}</p>
      <p>{admin.role}</p>
    </div>
  );
};

export default AdminInfo;
