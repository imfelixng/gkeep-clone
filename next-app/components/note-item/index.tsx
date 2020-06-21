import React from 'react';

import {
    BellOutlined,
    UserAddOutlined,
    FireOutlined,
    PictureOutlined,
    CloudDownloadOutlined,
    TagsOutlined,
    DeleteOutlined,
    PushpinFilled,
    PushpinOutlined
} from '@ant-design/icons';

import { Tooltip } from 'antd';

import style from './index.module.scss';

const NoteItem = () => {
    return (
        <div className={style['note-item']}>
            <div className={style['note-item__img-list']}>
                <img alt = "media" src = "https://hotromicrosoft.com/wp-content/uploads/2018/11/sticky_notes_0.jpg"/>
                <img alt = "media" src = "https://hotromicrosoft.com/wp-content/uploads/2018/11/sticky_notes_0.jpg"/>
                <Tooltip title="Pin note">
                    <PushpinOutlined  className={style['note-item__img-no-pin']}/>
                </Tooltip>
            </div>
            <div className={style['note-item__content-wrapper']}>
                <div className={style['note-item__top']}>
                    <div className={style['note-item__title']}>
                        This is title This is titleThis is titleThis is title
                    </div>
                    {/*<Tooltip title="Unpin note">*/}
                    {/*    <PushpinFilled  className={style['note-item__pin']}/>*/}
                    {/*</Tooltip>*/}
                    {/*<Tooltip title="Pin note">*/}
                    {/*    <PushpinOutlined  className={style['note-item__no-pin']}/>*/}
                    {/*</Tooltip>*/}
                </div>
                <div className={style['note-item__content']}>
                    This is content This is content This is content This is content This is content This is content This is content
                </div>
                <div className={style['note-item__action']}>
                    <Tooltip title="Reminder">
                        <BellOutlined className={style['note-item__action-item']}/>
                    </Tooltip>
                    <Tooltip title="Collaborator">
                        <UserAddOutlined className={style['note-item__action-item']}/>
                    </Tooltip>
                    <Tooltip title="Change color">
                        <FireOutlined className={style['note-item__action-item']}/>
                    </Tooltip>
                    <Tooltip title="Add image">
                        <PictureOutlined className={style['note-item__action-item']}/>
                    </Tooltip>
                    <Tooltip title="Make archive">
                        <CloudDownloadOutlined className={style['note-item__action-item']}/>
                    </Tooltip>
                    <Tooltip title="Add label">
                        <TagsOutlined className={style['note-item__action-item']}/>
                    </Tooltip>
                    <Tooltip title="Delete note">
                        <DeleteOutlined className={style['note-item__action-item']}/>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
};

export default NoteItem;