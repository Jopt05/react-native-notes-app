import Tag from "./Tag";

interface Note {
    title: string;
    content: string;
    createdAt: Date;
    tags: string[];
    id: number;
}

export default Note;