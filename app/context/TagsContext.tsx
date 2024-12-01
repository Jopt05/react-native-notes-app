import { createContext, useEffect, useReducer } from "react";
import { TagReducer } from "../reducer/TagReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    const getTagsFromStorage = async() => {
        const storageTags = await AsyncStorage.getItem('tags');
        if( !storageTags || JSON.parse(storageTags)?.length == 0 ) return;
        dispatch({
            type: 'loadFromStorage',
            payload: {
                tags: JSON.parse(storageTags)
            }
        })
    }

    const saveTags = async() => {
        await AsyncStorage.setItem('tags', JSON.stringify(tagState.tags));
    }

    useEffect(() => {
        getTagsFromStorage();
    }, [])
    

    useEffect(() => {
        saveTags();
    }, [tagState])

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