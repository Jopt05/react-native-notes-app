import { createContext, useReducer } from "react";
import Note from "../interfaces/Note";
import { NotesReducer } from "../reducer/NotesReducer";

export interface NotesState {
    notes: Note[];
}

export const notesInitialState: NotesState = {
    notes: []
}

export interface NotesContextProps {
    notesState: NotesState;
    addNote: (note: Note) => void;
}

export const NotesContext = createContext({} as NotesContextProps);

export const NotesProvider = ({children}: any) => {

    const [notesState, dispatch] = useReducer(NotesReducer, notesInitialState);

    const addNote = (note: Note) => {
        dispatch({
            type: 'addNote',
            payload: note
        })
    }

    return (
        <NotesContext.Provider value={{
            notesState: notesState,
            addNote
        }}>
            {children}
        </NotesContext.Provider>
    )
}