import React from 'react';
import {Button, Form, Input} from "antd";
import Link from 'next/link';

import style from "../index.module.scss";
import AuthWrapper from "../wrapper";

const ForgotPasswordPage = () => {
    return (
        <AuthWrapper>
            <h1 className={style['form__header']}>Forgot Password</h1>
            <Form
                layout="vertical"
                className={style['form__content']}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Email is required!'}]}
                >
                    <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item>
                    <div className={style['form__action']}>
                        <Button type="primary" htmlType="submit" className={style['form__action-btn']}>
                            Submit
                        </Button>
                        <Link href = "/auth/login">
                            <Button className={style['form__action-btn']}>
                                Back to sign in
                            </Button>
                        </Link>
                    </div>
                </Form.Item>
            </Form>
        </AuthWrapper>
    );
};

export default ForgotPasswordPage;
