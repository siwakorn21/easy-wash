import React from 'react';
import styled from 'styled-components';
import '../../index.css';

const Form = styled.form`
    width: 75%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
    padding-top: 4rem;
    margin-top: 5rem;
    padding-bottom: 5rem;
`;

const FormContainer = styled.div`
    width: 74%;
    margin-left:auto;
    margin-right: auto;
`;

const EmailContainer = styled.div`

    label {
        font-size: 1.3rem;    
    }

    input {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2rem;
        height: 4vh;
        border: 1px solid #2F2F2F;
        border-radius: 0.2rem;
    }
`;

const QuestionContainer = styled.div`
    width: 100%;
    margin-top: 4rem;
`;

const QuestionHeader = styled.label`
    font-size: 1.2rem;
    font-weight: bold;
`;

const CheckBoxList = styled.div`
    width: 75%;
    margin-top: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const CheckBox = styled.input`
    width: 30px;
    height: 30px;
`;

const CheckBoxContainer = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    margin-top: 1rem;

    &::first-child {
        margin-top: 0;
    }

    span {
        margin-left: 1rem;
    }
`;

const ButtonContainer = styled.div`
`;
const Button = styled.button`
    display: block;
    background-color: #4CC9F0;
    color: white;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 2.5rem;
    padding-left: 2.5rem;
    font-size: 1.75rem;
    font-weight: 300;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 3px #b4b4b4;
    cursor: pointer;
    margin-top: 4rem;
    margin-right: auto;
    margin-left: auto;
`;

const RegisterForm = () => {

    return (
        <Form>
            <FormContainer>
                <EmailContainer>
                    <QuestionHeader>Email:</QuestionHeader>
                    <br/>
                    <input type='email' />
                    <br/>
                </EmailContainer>
                <QuestionContainer>
                    <QuestionHeader>ปัจจุบันคุณมีวิธีจัดการเสื้อผ้าของคุณอย่างไร</QuestionHeader>
                    <br/>
                    <CheckBoxList>
                        <div className='col1'>
                            <CheckBoxContainer>
                                <CheckBox type='checkbox'/><span>ซักมือ</span>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <CheckBox type='checkbox'/><span>เครื่องซักผ้าส่วนตัว</span>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <CheckBox type='checkbox'/><span>เครื่องซักผ้าหยอดเหรียญ</span>
                            </CheckBoxContainer>
                        </div>
                        <div className="col2">
                            <CheckBoxContainer>
                                <CheckBox type='checkbox'/><span>ร้านซัก-อบ-รีด</span>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <CheckBox type='checkbox'/><span>บริการซักผ้า delivery</span>
                            </CheckBoxContainer>
                        </div>
                    </CheckBoxList>
                </QuestionContainer>
                <br/>
                <QuestionContainer>
                    <QuestionHeader>คุณเคยประสบปัญหาเหล่านี้หรือไม่ในการซักผ้า</QuestionHeader>
                    <br />
                    <CheckBoxList>
                        <div className='col1'>
                            <CheckBoxContainer>
                                <CheckBox type='checkbox'/><span>เสียเวลานาน</span>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <CheckBox type='checkbox'/><span>หาร้านซักผ้าดีๆไม่ได้</span>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <CheckBox type='checkbox'/><span>ซักผ้าเองไม่เป็น</span>
                            </CheckBoxContainer>
                        </div>
                        <div className='col2'>
                            <CheckBoxContainer>
                                <CheckBox type='checkbox'/><span>ส่งร้านซัก-อบ-รีดไป แต่ไม่รู้เวลาได้ผ้าที่แน่นอน</span>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <CheckBox type='checkbox'/><span>บริหารเวลาจัดการเวลาซักผ้าไม่ได้</span>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <CheckBox type='checkbox'/><span>ค่าใช้จ่ายแพงเกินไป</span>
                            </CheckBoxContainer>
                        </div>
                    </CheckBoxList>
                </QuestionContainer>
                <ButtonContainer>
                    <Button type='submit'>Register</Button>
                </ButtonContainer>
            </FormContainer>
        </Form>
    )
}

export default RegisterForm;