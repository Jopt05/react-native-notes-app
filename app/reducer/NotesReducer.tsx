import { NotesState } from "../context/NotesContext";
import Tag from "../interfaces/Tag";

type NoteAction = 
{ type: 'addNote', payload: { id: number; title: string; content: string; date: Date; tags: Tag[]; } };

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
                        createdAt: action.payload.date,
                        tags: action.payload.tags
                    }
                ]
            }

        default:
            return state;
    }
}