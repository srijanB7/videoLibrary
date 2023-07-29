import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineCompass, AiOutlineClockCircle } from "react-icons/ai";
import { RiPlayList2Fill } from "react-icons/ri"
import "./Sidebar.css";

export const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <NavLink to="/" className="link">
                <AiOutlineHome size="20px"/>
                <p>Home</p>
            </NavLink>
            <NavLink to="/explore"className="link">
                <AiOutlineCompass size="20px"/>
                <p>Explore</p>
            </NavLink>
            <NavLink to="/playlist" className="link">
                <RiPlayList2Fill size="20px"/>
                <p>Playlists</p>
            </NavLink>
            <NavLink to="/watchlater" className="link">
                <AiOutlineClockCircle size="20px"/>
                <p>Watch Later</p>
            </NavLink>
        </div>
    );
};
