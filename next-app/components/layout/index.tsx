import {useState} from "react";

import { Layout, Menu, Avatar, Input, Popover, Button } from 'antd';
import {
    BulbOutlined,
    BellOutlined,
    TagOutlined,
    EditOutlined,
    CloudDownloadOutlined,
    DeleteOutlined,
    MenuOutlined,
    SearchOutlined,
    AppstoreOutlined,
    ReloadOutlined
} from '@ant-design/icons';

import style from './index.module.scss';
import UserContent from "./user-content";

const { Sider, Content } = Layout;

const LayoutWrapper = ({ children }: any) => {
    const [isCollapseSider, setCollapseSider] = useState<boolean>(false);

    const _handleToggleSider = () => {
        setCollapseSider(!isCollapseSider);
    }

    return (
        <Layout>
            <Sider
                theme = "light"
                trigger={null}
                collapsible
                collapsed={isCollapseSider}
                className={style['app__sider']}
            >
                <div
                    className={style['app__sider-logo']}
                >
                    <img
                        src = "https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
                        alt = "App Logo"
                    />
                    {
                        !isCollapseSider && (
                            <span className={style['app__sider-site']}>GKeep Clone</span>
                        )
                    }
                </div>
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="notes" icon={<BulbOutlined style = {{ fontSize: 20 }}/>}>
                        Notes
                    </Menu.Item>
                    <Menu.Item key="reminders" icon={<BellOutlined style = {{ fontSize: 20 }}/>}>
                        Reminders
                    </Menu.Item>
                    <Menu.Item key="goal" icon={<TagOutlined style = {{ fontSize: 20 }}/>}>
                        Goal
                    </Menu.Item>
                    <Menu.Item key="manage-label" icon={<EditOutlined style = {{ fontSize: 20 }}/>}>
                        Manage Labels
                    </Menu.Item>
                    <Menu.Item key="archive" icon={<CloudDownloadOutlined style = {{ fontSize: 20 }}/>}>
                        Archive
                    </Menu.Item>
                    <Menu.Item key="trash" icon={<DeleteOutlined style = {{ fontSize: 20 }}/>}>
                        Trash
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className={style['app__wrapper']}>
                <div className = {style['app__header']}>
                    {
                        isCollapseSider && (
                            <span className={style['header__site']}>GKeep Clone</span>
                        )
                    }
                    <MenuOutlined className = {style['header__menu']} onClick = {_handleToggleSider} />
                    <div className = {style['header__search']}>
                        <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />
                    </div>
                    <div className = {style['header__action']}>
                        <div className = {style['header__action-group']}>
                            <ReloadOutlined className = {style['header__action-refresh']}/>
                            <AppstoreOutlined className = {style['header__action-mode']}/>
                            <BellOutlined className={style['header__action-noti']} />
                        </div>
                        <Popover placement="bottomRight" content={UserContent} trigger="click">
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} size = {36} className = {style['header__action-avatar']}>U</Avatar>
                        </Popover>
                    </div>
                </div>
                <Content
                    className = {style['app__content']}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutWrapper