import { Navbar } from "./navbar";
import Side from "./Side";

export default function HomeComponent(props: any) {
    return (
        <>
            <Side/>
            <div className="content">

                <Navbar />
                <div className="test">
                    

                </div>

            </div>
        </>
    );
}