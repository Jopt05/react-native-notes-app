import { TagState } from "../context/TagsContext"

type TagAction = 
    { type: 'addTag', payload: { tag: string } } |
    { type: 'deleteTag', payload: { tag: string } } |
    { type: 'loadFromStorage', payload: {  tags: string[] } }

export const TagReducer = (state: TagState, action: TagAction): TagState => {
    switch (action.type) {
        case 'addTag':
            return {
                ...state,
                tags: [
                    ...state.tags,
                    action.payload.tag
                ]
            }

        case 'deleteTag':
            return {
                ...state,
                tags: state.tags.filter( tag => tag != action.payload.tag )
            }

        case 'loadFromStorage':
            return {
                ...state,
                tags: action.payload.tags
            }

        default:
            return state;
    }
}