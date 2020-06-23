import React from "react";
import LayoutWrapper from '../../components/layout';

import NoteList from "../../components/note-list";
import { Modal } from "antd";

import { useRouter } from 'next/router'

function NotePage() {
    const router = useRouter();
    const { noteId } = router.query || {};
    console.log(router.query);
    return (
        <LayoutWrapper>
            <NoteList title = "PINED"/>
            <NoteList title = "OTHERS"/>
            <Modal
                title="Basic Modal"
                visible={!!noteId}
                getContainer={() => document.querySelector('#__next') as any}
                closable
                onCancel={() => router.push('/note')}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </LayoutWrapper>
    )
}

export default NotePage;
