import { createContext } from "react";
import Note from "../interfaces/Note";

export interface NotesState {
    notes: Note[];
}

export const notesInitialState: NotesState = {
    notes: []
}

export interface NotesContextProps {
    notesState: NotesState;
}

export const NotesContext = createContext({} as NotesContextProps);

export const NotesProvider = ({children}: any) => {
    return (
        <NotesContext.Provider value={{
            notesState: notesInitialState
        }}>
            {children}
        </NotesContext.Provider>
    )
}