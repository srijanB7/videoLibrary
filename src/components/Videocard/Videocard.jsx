import { Link } from "react-router-dom";
import { AiOutlineClockCircle, AiFillClockCircle } from "react-icons/ai";
import "./Videocard.css";
import { useVideo } from "../../contexts/VideoContext";

export const Videocard = ({ _id, title, thumbnail, views, creator }) => {
    const { watchLater, removeFromWatchLater, addToWatchLater } = useVideo();
    let isMarked = watchLater.find((video) => video?._id == _id);
    
    const handleWatchLater = () => {
        if (isMarked) removeFromWatchLater(_id);
        else addToWatchLater(_id);
    };
    
    return (
        <>
            <Link to={`/video/${_id}`} className="videocard-container">
                <img src={thumbnail} />

                <p>
                    <strong>{title}</strong>
                </p>
                <p className="extra-info">
                    {views}-{creator}
                </p>
            </Link>
            <button onClick={handleWatchLater} className="watchlater-btn">
                {!isMarked ? (
                    <AiOutlineClockCircle size="20px" />
                ) : (
                    <AiFillClockCircle size="20px" />
                )}
            </button>
        </>
    );
};
