import React from "react";
import LayoutWrapper from '../../components/layout';
import NoteItem from "../../components/note-item";

function NotePage() {
    return (
        <LayoutWrapper>
            <div>
                <NoteItem />
            </div>
        </LayoutWrapper>
    )
}

export default NotePage;
