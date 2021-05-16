import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    label {
        font-size: 1.25rem
    }
`;

const RegisterForm = () => {

    return (
        <Form>
            <label>Email:</label>
            <input type='email' />
            <label>ปัจจุบันคุณมีวิธีจัดการเสื้อผ้าของคุณอย่างไร</label>
            <label>คุณเคยประสบปัญหาเหล่านี้หรือไม่ในการซักผ้า</label>
        </Form>
    )
}

export default RegisterForm;