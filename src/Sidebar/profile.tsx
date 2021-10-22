import { ProfileNavbar } from "../Sidebar/navbar";
import { FilesPage } from "../filesPage/files";
import Password from "../ChangePassword/Password";

export default function Profile(props: any) {
//   const path = props.location.pathname;
  return (
    <>
      <ProfileNavbar user = {props.user} />
      <div className="test">Profile</div>
    </>
  );
}