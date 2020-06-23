import React from 'react';
import { Button, Form, Input, Checkbox } from "antd";
import Link from 'next/link';

import style from "../index.module.scss";
import AuthWrapper from "../wrapper";

const LoginPage = () => {
    return (
        <AuthWrapper>
            <h1 className={style['form__header']}>Login</h1>
            <Form
                layout="vertical"
                className={style['form__content']}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Email is required!' }]}
                >
                    <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Password is required!' }]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <div className={style['form__tool']}>
                        <Checkbox >Remember me</Checkbox>
                        <Link href="/auth/forgot-password"><a>Forgot password</a></Link>
                    </div>
                </Form.Item>
                <Form.Item>
                    <div className={style['form__action']}>
                        <Button type="primary" htmlType="submit" className={style['form__action-btn']}>
                            Sign in
                        </Button>
                        <Link href="/auth/register">
                            <Button className={style['form__action-btn']}>
                                Register
                            </Button>
                        </Link>
                    </div>
                </Form.Item>
            </Form>
        </AuthWrapper>
    );
};

export default LoginPage;