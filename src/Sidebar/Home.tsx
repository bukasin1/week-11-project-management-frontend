import HomePage from "../Home/HomePage";
import { Navbar } from "./navbar";
import Side from "./Side";
import "./Home.css";

export default function HomeComponent(props: any) {
  return (
    <>
      <Side />
      <div className="content">
        <Navbar />
        <div className="test">
          <HomePage />
        </div>
      </div>
    </>
  );
}
