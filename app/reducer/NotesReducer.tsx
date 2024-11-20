import { NotesState } from "../context/NotesContext";
import Note from "../interfaces/Note";

type NoteAction = 
{ type: 'addNote', payload: Note };

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

        default:
            return state;
    }
}