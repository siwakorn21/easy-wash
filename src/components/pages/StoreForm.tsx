import React, { useState } from 'react';
import styled from 'styled-components';
import '../../index.css';

const Form = styled.form`
    width: 75%;
    background-color: #F5F5F5;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
    padding-top: 4rem;
    margin-top: 5rem;
    padding-bottom: 5rem;
    z-index: 100;
`;

const FormContainer = styled.div`
    z-index: 2;
    width: 74%;
    margin-left:auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: space-between;

    label {
        font-size: 1.3rem;    
        /* margin-top: 2rem; */
        font-weight: bold;

        span {
            font-weight: lighter;
        }
    }

    input {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        /* margin-top: 2rem; */
        height: 4vh;
        border: 1px solid #2F2F2F;
        border-radius: 0.2rem;
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

const StoreForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        order_size: -1,
        location: '',
        market_group: '',
        pricing_method: '',
    });

    const intList = ['order_size'];

    const setInputFormState = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.getAttribute('state-value') || '';
        const val = e.target.value;
        if (intList.includes(key)) {
            const newValue = parseInt(val);
            setFormState({...formState, [`${key}`]: newValue});
        } else {
            setFormState({...formState, [`${key}`]: val});
        }
        console.log(formState);
    } 

    const submitForm = () => {
        console.log(formState);
    }

    return (
        <Form>
            <FormContainer>
                <label>1.ชื่อร้าน <span>(อาจใช้ชื่อสมมติได้ กรณีไม่อยากเปิดเผย)</span></label>
                <br />
                <input state-value='name' onChange={(e) => setInputFormState(e)}/>
                <br />
                <label>2.ขนาดของร้าน สามารถรับลูกค้าได้กี่ order ต่อวัน</label>
                <br />
                <input state-value='order_size' onChange={setInputFormState} />
                <br />
                <label>3.Location ของร้าน</label>
                <br />
                <input state-value='location' onChange={setInputFormState} />
                <br />
                <label>4.กลุ่มลูกค้าของร้านคือใคร</label>
                <br />
                <input state-value='market_group' onChange={setInputFormState} />
                <br />
                <label>5.ร้านมีวิธีคิดราคายังไง <span>(เช่นเหมารายเดือน, ราคาชิ้น, ชั่งกิโล)</span></label>
                <br />
                <input state-value='pricing_method' onChange={setInputFormState} />
            </FormContainer>
            <ButtonContainer>
                <Button type='submit' onClick={submitForm}>Register</Button>
            </ButtonContainer>
        </Form>
    )
}

export default StoreForm;