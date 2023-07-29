import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Videocard } from "../../components/Videocard/Videocard";
import { useVideo } from "../../contexts/VideoContext";
import "./Watchlater.css";
export const Watchlater = () => {
    const { watchLater } = useVideo();
    console.log(watchLater)
    return (
        <div className="watchlater-container">
            <nav>
                <h1>WatchLater</h1>
            </nav>
            <div className="watchlater-content">
                <div className="left">
                    <Sidebar />
                </div>
                <div className="right">

                    {
                        watchLater?.length > 0 ?
                        watchLater.map((video, ind) => <Videocard key={ind} {...video}/>)
                        : <p>No Videos saved for watching later</p>
                    }
                </div>
            </div>
        </div>
    );
};
