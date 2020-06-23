import React from 'react';
import {Button, Form, Input} from "antd";
import Link from 'next/link';

import style from "../index.module.scss";
import AuthWrapper from "../wrapper";

const RegisterPage = () => {
    return (
        <AuthWrapper>
            <h1 className={style['form__header']}>Register</h1>
            <Form
                layout="vertical"
                className={style['form__content']}
            >
                <Form.Item
                    label="Full Name"
                    name="full_name"
                    rules={[{required: true, message: 'Full name is required!'}]}
                >
                    <Input placeholder="Full Name"/>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Email is required!'}]}
                >
                    <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Password is required!'}]}
                >
                    <Input.Password placeholder="Password"/>
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirm_password"
                    rules={[{required: true, message: 'Confirm password is required!'}]}
                >
                    <Input.Password placeholder="Confirm Password"/>
                </Form.Item>
                <Form.Item>
                    <div className={style['form__action']}>
                        <Button type="primary" htmlType="submit" className={style['form__action-btn']}>
                            Register
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

export default RegisterPage;
