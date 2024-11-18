import Tag from "./Tag";

interface Note {
    title: string;
    content: string;
    createdAt: Date;
    tags: Tag[];
    id: number;
}

export default Note;