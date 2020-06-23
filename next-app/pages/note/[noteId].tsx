import React from "react";
import LayoutWrapper from '../../components/layout';
import NoteList from "../../components/note-list";


function NoteItemPage() {
    return (
        <LayoutWrapper>
            <NoteList title="PINED" />
            <NoteList title="OTHERS" />
        </LayoutWrapper>
    )
}

export default NoteItemPage;
