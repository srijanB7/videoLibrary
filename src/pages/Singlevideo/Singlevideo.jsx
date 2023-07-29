import { useParams } from "react-router";
import "./Singlevideo.css";
import { useVideo } from "../../contexts/VideoContext";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { AiOutlineClockCircle, AiFillClockCircle } from "react-icons/ai";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Modal } from "@mui/material";
import { useState } from "react";

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
export const Singlevideo = ({}) => {
    const { id } = useParams();
    const {
        videos,
        watchLater,
        removeFromWatchLater,
        addToWatchLater,
        addNotes,
        notes,
        deleteNote
    } = useVideo();
    const video = videos.find((video) => video._id == id);
    let isMarked = watchLater.find((video) => video?._id == id);

    const handleWatchLater = () => {
        if (isMarked) removeFromWatchLater(parseInt(id));
        else addToWatchLater(parseInt(id));
    };

    const [noteText, setNoteText] = useState("");

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    const addNote = () => {
        const obj = {
            _id: parseInt(id),
            text: noteText,
            noteId: notes.length + 1,
        };
        addNotes(obj);
        setNoteText("");
        handleClose();
    };

    const currNotes = notes?.filter(note => note._id == id) ?? []

    return (
        <div className="single-video-container">
            <nav>
                <h1>Video</h1>
            </nav>
            <div className="video-content">
                <div className="left-single-video">
                    <Sidebar />
                </div>
                <div className="right-single-video">
                    <iframe width="820" height="415" src={video.src}></iframe>
                    <div className="video-details">
                        <p>
                            <strong>{video.title}</strong>
                        </p>
                        <div className="controls">
                            <button onClick={handleWatchLater}>
                                {!isMarked ? (
                                    <AiOutlineClockCircle />
                                ) : (
                                    <AiFillClockCircle />
                                )}
                            </button>
                            <button>
                                <MdOutlinePlaylistAdd />
                            </button>
                            <button onClick={handleOpen}>
                                <FiEdit />
                            </button>
                        </div>
                    </div>
                    <div className="notes">
                        <h2>My Notes</h2>

                        {
                            currNotes?.map((note, index) => <p key={note.noteId}>
                                {note.text}
                                <button onClick={() => deleteNote(note.noteId)}>x</button>
                            </p>)
                        }
                    </div>
                </div>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div style={style} className="modal-container">
                        <h1>Note</h1>
                        <input
                            type="text"
                            placeholder="Enter Note"
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                        />
                        <button onClick={addNote}>Add Note</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};
