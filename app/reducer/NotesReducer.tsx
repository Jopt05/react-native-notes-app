import { NotesState } from "../context/NotesContext";
import Note from "../interfaces/Note";

type NoteAction = 
{ type: 'addNote', payload: Note } |
{ type: 'updateNote', payload: { title: string, content: string, tags: string[], id: number }} |
{ type: 'deleteNote', payload: { id: number }};

export const NotesReducer = (state: NotesState, action: NoteAction): NotesState => {
    switch (action.type) {
        case 'addNote':
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        id: action.payload.id,
                        title: action.payload.title,
                        content: action.payload.content,
                        createdAt: action.payload.createdAt,
                        tags: action.payload.tags
                    }
                ]
            }

        case 'updateNote':
            return {
                ...state,
                notes: state.notes.map( note => {
                    if( note.id == action.payload.id ) {
                        return {
                            ...note,
                            title: action.payload.title,
                            content: action.payload.content,
                            tags: action.payload.tags,
                            createdAt: new Date()
                        }
                    }
                    return note;
                })
            }

        case 'deleteNote':
            return {
                ...state,
                notes: state.notes.filter( note => note.id != action.payload.id )
            }

        default:
            return state;
    }
}