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
    updateNote: (title: string, content: string, tags: string[], id: number) => void; 
    deleteNote: (id: number) => void;
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

    const updateNote = (title: string, content: string, tags: string[], id: number) => {
        dispatch({
            type: 'updateNote',
            payload: {
                title,
                content,
                tags,
                id
            }
        })
    }

    const deleteNote = (id: number) => {
        dispatch({
            type: 'deleteNote',
            payload: {
                id
            }
        })
    }

    return (
        <NotesContext.Provider value={{
            notesState: notesState,
            addNote,
            updateNote,
            deleteNote
        }}>
            {children}
        </NotesContext.Provider>
    )
}