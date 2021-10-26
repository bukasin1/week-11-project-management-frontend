import { ProfileNavbar } from "../Sidebar/navbar";
import { FilesPage } from "../filesPage/files";
import Password from "../ChangePassword/Password";
import Side from "./Side";
import Profile from "../Profile/Profile";


export default function ProfileComponent(props: any) {
    const path = props.location.pathname;
    const loggedUser = JSON.parse(localStorage.getItem('user') as string)

    return (
        <>
            <Side />
            <div className="content">
                <ProfileNavbar />
                <div className="test">
                    {path.includes('changepassword') && <Password />}
                    {path.includes('profile') && <Profile />}
                </div>
            </div>
        </>
    );
}
