import { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE, reducer } from "../reducer/reducer";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    function removeFromWatchLater(id) {
        dispatch({ type: "remove from watchLater", payload: id });
    }

    function addToWatchLater(id) {
        dispatch({ type: "add to watchLater", payload: id });
    }

    function addNotes(note) {
        dispatch({ type: "add note", payload: note });
    }

    function deleteNote(id) {
        dispatch({ type: "delete note", payload: id });
    }

    function createPlayList(playlist) {
        dispatch({type: "add playlist", payload: playlist});
    }
    function deletePlayList(id) {
        dispatch({type: "delete playlist", payload: id});
    }

    return (
        <VideoContext.Provider
            value={{
                ...state,
                removeFromWatchLater,
                addToWatchLater,
                addNotes,
                deleteNote,
                createPlayList,
                deletePlayList
            }}
        >
            {children}
        </VideoContext.Provider>
    );
};

export const useVideo = () => useContext(VideoContext);
