import React from 'react';
import style from "../index.module.scss";
import {Button, Form, Input} from "antd";
import AuthWrapper from "../wrapper";

const RegisterPage = () => {
    return (
        <AuthWrapper>
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
                        <Button className={style['form__action-btn']}>
                            Sign in
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </AuthWrapper>
    );
};

export default RegisterPage;
