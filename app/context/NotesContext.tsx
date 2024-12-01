import { createContext, useEffect, useReducer } from "react";
import Note from "../interfaces/Note";
import { NotesReducer } from "../reducer/NotesReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    const getNotesFromStorage = async() => {
        const storageNotes = await AsyncStorage.getItem('notes');
        if( !storageNotes || JSON.parse(storageNotes)?.length == 0 ) return;
        dispatch({
            type: 'loadFromStorage',
            payload: {
                notes: JSON.parse(storageNotes).map((note: any) => {
                    return {
                        ...note,
                        createdAt: new Date(note.createdAt)
                    }
                })
            }
        })
    }

    const saveNotes = async() => {
        await AsyncStorage.setItem('notes', JSON.stringify(notesState.notes));
    }

    useEffect(() => {
        getNotesFromStorage();
    }, [])
    

    useEffect(() => {
        saveNotes();
    }, [notesState])

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