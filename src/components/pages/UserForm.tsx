import React from 'react';
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
`;

const FormContainer = styled.div`
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

    input.normal-input {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        height: 4vh;
        border: 1px solid #2F2F2F;
        border-radius: 0.2rem;
    }
`;

const CheckBoxList = styled.div`
    width: 75%;
    margin-top: 1rem;
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
    margin-left: 0;

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

const UserForm = () => {

    return (
        <Form>
            <FormContainer>
                <label>1.Email: </label>
                <input className='normal-input' type='email' state-value='email' />
                <br />
                <label>2.อายุ: </label>
                <input className='normal-input' state-value='age' />
                <label>3.อาชีพ</label>
                <input className='normal-input' state-value='job' />
                <br />
                <label>4.รายได้ต่อเดือนโดยประมาณ</label>
                <input className='normal-input' />
                <br />
                <label>5.อาศัยอยู่แถวไหน</label>
                <br />
                <input className='normal-input' state-value='location' />
                <br />
                <label>6.ลักษณะที่พัก</label>
                <br />
                <CheckBoxList>
                    <div className='col1'>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox'/><span>บ้าน</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox'/><span>หอพัก</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox'/><span>Hostel</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox'/><span>คอนโด</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox'/><span>โรงแรม</span>
                        </CheckBoxContainer>
                    </div>
                </CheckBoxList>
                <br/>
                <label>7.ปกติซักผ้าด้วยวิธีไหน(สามารถตอบได้มากกว่า 1 ข้อ)</label>
                <br />
                <CheckBoxList>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox'/><span>ซักมือด้วยตนเอง</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox'/><span>เครื่องซักผ้าของตนเอง</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' state-value='เครื่องซักผ้าหยอดเหรียญ'/><span>เครื่องซักผ้าหยอดเหรียญ</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' state-value='ร้านตู้ซักผ้า Franchise'/><span>ร้านตู้ซักผ้า Franchise</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' state-value='ส่งร้าน ซัก-อบ-รีด' /><span>ส่งร้าน ซัก-อบ-รีด</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' state-value='ซักผ่านตู้ Locker' /><span>ซักผ่านตู้ Locker</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' state-value=''/><span>อื่นๆ</span>
                        </CheckBoxContainer>
                </CheckBoxList>
                <br />
                <label>เหตุผลที่เลือกใช้วิธีดังกล่าว</label>
                <br />
                <input className='normal-input' state-value='reason' />
                <br />
                <label>8. ความถี่ในการซักผ้า ต่อเดือน </label>
                <br />
                <input className='normal-input' state-value='frequency' />
                <br />
                <label>9. ปัญหาที่พบในการซักผ้า ณ ปัจจุบัน </label>
                <br />
                <input className='normal-input' state-value='problem' />
                <br />
                <label>10. ในการซักผ้า 1 ครั้ง มีค่าใช้จ่ายประมาณเท่าไหร่</label>
                <br />
                <CheckBoxList>
                    <div className='col1'>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox'/><span>0-50 บ.</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox'/><span>51-100 บ.</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' state-value='เครื่องซักผ้าหยอดเหรียญ'/><span>101-200 บ.</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' state-value='ร้านตู้ซักผ้า Franchise'/><span>201-500 บ.</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' state-value='ส่งร้าน ซัก-อบ-รีด' /><span>501-1000 บ.</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' state-value='ซักผ่านตู้ Locker' /><span>มากกว่า 1000 บ.</span>
                        </CheckBoxContainer>
                    </div>
                </CheckBoxList>
                <br />
                <label>11. ถ้าอยากซักผ้าให้ง่ายขึ้น อยากให้มีบริการอะไรมาช่วย</label>
                <input className='normal-input' />
                <br />
                <label>12. คุณคิดว่าการซัก-รีด ในปัจจุบันของคุณ สามารถปรับปรุงให้ดีขึ้นอย่างไรได้อีก</label>
                <br />
                <input className='normal-input' />
                <br />
                <label>13.ถ้ามีบริการซักผ้าแบบ Delivery โดยสามารถเลือกร้าน และเลือกเวลารับ-ส่ง
ตามที่คุณสะดวก คุณจะใช้บริการนี้หรือไม่</label>
                <CheckBoxList>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' state-value='ซักผ่านตู้ Locker' /><span>ใช้</span>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' state-value='ซักผ่านตู้ Locker' /><span>ไม่ใช้</span>
                    </CheckBoxContainer>
                </CheckBoxList>
                <label>14. หากคุณพร้อมที่จะร่วมพัฒนา Application ให้ดีขึ้นไปกับเรา สามารถกรอก
เบอร์โทรศัพท์เพื่อลุ้นรับสิทธิประโยชน์ต่างๆ มากมาย</label>
                <br />
                <input className='normal-input' />
                <ButtonContainer>
                    <Button type='submit'>Register</Button>
                </ButtonContainer>
            </FormContainer>
        </Form>
    )
}

export default UserForm;