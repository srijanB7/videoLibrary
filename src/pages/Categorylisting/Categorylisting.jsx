import { useParams } from "react-router";
import { useVideo } from "../../contexts/VideoContext";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Videocard } from "../../components/Videocard/Videocard";
import "./Categorylisting.css";

export const Categorylisting = () => {
    const { category } = useParams();
    const { videos } = useVideo();
    const categoryVideos = videos.filter(
        (video) => video.category === category
    );
    //console.log(categoryVideos);
    return (
        <div className="category-list-container">
            <nav>
                <h1>{category}</h1>
            </nav>
            <div className="category-list-content">
                <div className="left">
                    <Sidebar />
                </div>
                <div className="right">
                    {
                        categoryVideos.map((videos, index) => <Videocard key={index} {...videos}/>)
                    }
                </div>
            </div>
        </div>
    );
};
