import { useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useVideo } from "../../contexts/VideoContext";
import "./Explore.css";
import { Videocard } from "../../components/Videocard/Videocard";

export const Explore = () => {
    const { videos } = useVideo();
    const [searchText, setSearchedText] = useState("");
    const displayVideos = videos.filter(video => video.title.toLowerCase().includes(searchText));
    return (
        <div className="explore-container">
            <nav>
                <h1>Explore</h1>
            </nav>
            <div className="explore-content">
                <div className="left">
                    <Sidebar />
                </div>
                <div className="right">
                    <input
                        type="text"
                        placeholder="Search for video by title"
                        value={searchText}
                        onChange={(e) => setSearchedText(e.target.value.toLowerCase())}
                    />
                    <div className="videos">
                        {
                            displayVideos.map(video => <Videocard key={video._id} {...video}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
