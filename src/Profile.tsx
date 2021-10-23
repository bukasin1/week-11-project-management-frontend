import Side from "../src/Sidebar/Side";
import { ProfileNavbar } from "../src/Sidebar/navbar";

export default function Profile(props: any) {
  return (
    <>
      <Side />
      <div className="content">
        <ProfileNavbar />
        <div className="test">
          <h1>Omotosho Joseph</h1>
        </div>
      </div>
    </>
  );
}
