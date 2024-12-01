import { createContext, useReducer } from "react";
import { TagReducer } from "../reducer/TagReducer";

export interface TagState {
    tags: string[];
}

export const tagInitialState: TagState = {
    tags: [],
}

export interface TagContextProps {
    tagState: TagState;
    addTag: (tagName: string) => void;
    deleteTag: (tagName: string) => void;
}

export const TagContext = createContext({} as TagContextProps);

export const TagProvider = ({children}: any) => {

    const [tagState, dispatch] = useReducer(TagReducer, tagInitialState);

    const addTag = (tag: string) => {
        dispatch({
            type: 'addTag',
            payload: {
                tag
            }
        })
    }

    const deleteTag = (tag: string) => {
        dispatch({
            type: 'deleteTag',
            payload: {
                tag
            }
        })
    }

    return (
        <TagContext.Provider value={{
            tagState: tagState,
            addTag,
            deleteTag
        }}>
            {children}
        </TagContext.Provider>
    )
}