import { categories } from "../data/categoryData";
import { videos } from "../data/videoData";

export const INITIAL_STATE = {
    categories: categories,
    videos: videos,
    playLists: JSON.parse(localStorage.getItem("playlists")) ?? [],
    notes: JSON.parse(localStorage.getItem("notes")) ?? [],
    watchLater: JSON.parse(localStorage.getItem("watchlater")) ?? [],


}

export function reducer(state, action) {
    switch(action.type) {
        case "remove from watchLater" : {
            const updatedWatchLater = state.watchLater.filter(video => video?._id !== action.payload);
            localStorage.setItem("watchlater", JSON.stringify(updatedWatchLater));
            return {...state, watchLater: updatedWatchLater}
        }
        case "add to watchLater" : {
            const video = videos.find(video => video?._id === action.payload)
            const updatedWatchLater = [...state.watchLater, video];
            localStorage.setItem('watchlater', JSON.stringify(updatedWatchLater))
            return { ...state, watchLater: updatedWatchLater}
        }
        case "add note": {
            const updatedNotes = [...state.notes, action.payload];
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return {...state, notes: updatedNotes}
        }
        case "delete note": {
            const updatedNotes = state.notes?.filter(note => note.noteId != action.payload);
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return {...state, notes: updatedNotes};
        }

        case "add playlist": {
            const updatedPlaylists = [...state.playLists, action.payload];
            localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
            return { ...state, playLists: updatedPlaylists};
        }
        case "delete playlist": {
            const updatedPlaylists = state.playLists?.filter(playlist => playlist.id != action.payload);
            localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
            return { ...state, playLists: updatedPlaylists};
        }
    }
}