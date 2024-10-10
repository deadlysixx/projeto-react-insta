import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Body() {
    return (
        <div className="main-content">
            <div className="main-content-container">
                <div className="feed">
                    <Stories />
                    <Posts />
                </div>
                <SideBar />
            </div>
        </div>
    );
};

