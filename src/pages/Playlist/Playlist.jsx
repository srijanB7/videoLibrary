import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useVideo } from "../../contexts/VideoContext";
import { Modal } from "@mui/material";
import "./Playlist.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export const Playlist = () => {
    const { playLists, createPlayList } = useVideo();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [playlistName, setPlayListName] = useState("");
    console.log(playLists)
    const handleCreate = () => {
        const playlist = {
            id: playLists.length + 1,
            name: playlistName,
            videos: [],
            src: "https://picsum.photos/200/300"
        }

        createPlayList(playlist);
        setPlayListName("");
        handleClose();
    };

    return (
        <div className="playlists-container">
            <nav>
                <h1>Playlists</h1>
            </nav>
            <div className="playlists-content">
                <div className="left">
                    <Sidebar />
                </div>
                <div className="right">
                    <button className="add-playlist-btn" onClick={handleOpen}>
                        Add
                    </button>
                    {
                        playLists.length > 1 ?
                        playLists?.map((playlist) => <div key={playlist.id}>
                            <button>X</button>
                            <Link to={`/playlist/${playlist.id}`}>
                                <img src={playlist.src} />
                                <p>{playlist.name}</p>
                            </Link>
                        </div>) :
                        <p>Add something to playlist</p>
                    }
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={style} className="playlist-modal">
                    <h1>New Playlist</h1>
                    <input
                        type="text"
                        placeholder="Enter playlist name"
                        value={playlistName}
                        onChange={(e) => setPlayListName(e.target.value)}
                    />
                    <button onClick={handleCreate}>Create</button>
                </div>
            </Modal>
        </div>
    );
};
