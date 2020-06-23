import React from 'react';
import style from "../index.module.scss";
import {Button, Form, Input} from "antd";
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
                        <Button className={style['form__action-btn']}>
                            Back to sign in
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </AuthWrapper>
    );
};

export default ForgotPasswordPage;
