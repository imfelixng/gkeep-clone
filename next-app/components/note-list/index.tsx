import React from 'react';
import style from "./index.module.scss";
import NoteItem from "../note-item";

type Props = {
    title?: string;
}

const NoteList: React.FC<Props> = ({ title }) => {
    return (
        <div>
            { title && <div className={style['note-list__title']}>{title}</div> }
            <div className={style['note-list__content']}>
                <NoteItem />
                <NoteItem />
                <NoteItem />
                <NoteItem />
                <NoteItem />
            </div>
        </div>
    )
};

export default NoteList;