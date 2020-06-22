import React from "react";
import {Result, Row, Col} from 'antd';
import LayoutWrapper from '../../components/layout';

import style from './index.module.scss';

const AuthWrapper: React.FC<any> = ({ children }) => {
    return (
        <LayoutWrapper>
            <div className={style['login']}>
                <Row gutter={[16, 16]}
                     className={style['login__wrapper']}
                >
                    <Col span = {24} md = {12}>
                        <Result
                            status="403"
                            title = "Welcome to GKeep Clone"
                        />
                    </Col>
                    <Col span = {24} md = {12}>
                        {children}
                    </Col>
                </Row>
            </div>
        </LayoutWrapper>
    )
}

export default AuthWrapper;
