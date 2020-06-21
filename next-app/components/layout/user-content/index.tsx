import React from 'react';
import {Avatar, Button} from "antd";
import {
    LogoutOutlined
} from '@ant-design/icons';

import style from './index.module.scss';

const UserContent = () => {
    return (
        <div className ={style['user-content']}>
            <Avatar
                style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                size = {100}
                className ={style['user-content__avatar']}
            >A</Avatar>
            <div className ={style['user-content__info']}>
                <span className ={style['user-content__name']}>An Nguyen</span><br/>
                <span className ={style['user-content__email']}>ngquangan@gmail.com</span>
            </div>
            <Button block danger icon = {<LogoutOutlined />}>Sign out</Button>
        </div>
    );
};

export default UserContent;
