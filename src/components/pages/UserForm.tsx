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

    const [formState, setFormState] = useState({
        email: '',
        age: -1,
        job: '',
        income: -1,
        location: '',
        building_type: '',
        wash_method: '',
        reason_wash: '',
        freq_wash_per_month: -1,
        problem: '',
        cost: -1,
        method_help_washing: '',
        method_improve_washing: '',
        need_delivery_service: false,
        phone: ''
    });

    const [needDev, setNeedDev] = useState({'ใช่': false, 'ไม่ใช่': false});
    const [washMethod, setWashMethod] = useState<string[]>([]);
    const [another, setAnother] = useState('');

    const [buildingType, setBuildingType] = useState({
        'บ้าน': false,
        'หอพัก': false,
        'คอนโด': false,
        'Hostel': false,
        'โรงแรม': false,
    });

    const intList = ['age', 'income', 'cost', 'freq_wash_per_month'];

    const chageValueType = (key: any, value: string) => {
        if (intList.includes(key) && key !== null) {
            return parseInt(value);
        } else {
            return value;
        }
    }

    const setInputFormState = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.getAttribute('state-value');
        const value = chageValueType(key, e.target.value);
        const newState = {...formState, [`${key}`]: value};
        setFormState(newState);
        console.log(newState);
    }

    const setNeedDevService = (val: boolean) => {
        if (val === true) {
            const newState = {'ใช่': true, 'ไม่ใช่': false};
            setFormState({...formState, ['need_delivery_service']: true});
            setNeedDev(newState);
        } else {
            const newState = {'ใช่': false, 'ไม่ใช่': true};
            setFormState({...formState, ['need_delivery_service']: false});
            setNeedDev(newState);
        }
        console.log(formState)
    }

    const setBuildingState = (val: string) => {
        let newState = {
            'บ้าน': false,
            'หอพัก': false,
            'คอนโด': false,
            'Hostel': false,
            'โรงแรม': false,
        };
        setBuildingType({...newState, [val]: true});
        setFormState({...formState, ['building_type']: val});
        console.log(formState);
    }

    const setWashMethodState = (val: string) => {
        if (washMethod.includes(val)) {
            const newState = washMethod.filter(item => item !== val);
            setWashMethod(newState);
        } else {
            const newState = [...washMethod, val];
            setWashMethod(newState)
        }
        console.log(washMethod);
    }

    const submitForm = () => {
        if (another !== '' || another !== null) {
            setWashMethod([...washMethod, another]);
        }
        console.log(formState);
    }

    return (
        <Form>
            <FormContainer>
                <label>1.Email: </label>
                <input className='normal-input' type='email' state-value='email' onChange={setInputFormState}/>
                <br />
                <label>2.อายุ: </label>
                <input className='normal-input' state-value='age' onChange={setInputFormState}/>
                <label>3.อาชีพ</label>
                <input className='normal-input' state-value='job' onChange={setInputFormState}/>
                <br />
                <label>4.รายได้ต่อเดือนโดยประมาณ</label>
                <input className='normal-input' state-value='income' onChange={setInputFormState}/>
                <br />
                <label>5.อาศัยอยู่แถวไหน</label>
                <br />
                <input className='normal-input' state-value='location' onChange={setInputFormState} />
                <br />
                <label>6.ลักษณะที่พัก</label>
                <br />
                <CheckBoxList>
                    {/* <div className='col1'> */}
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' checked={buildingType['บ้าน']} onClick={() => setBuildingState('บ้าน')}/><span>บ้าน</span>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' checked={buildingType['หอพัก']} onClick={() => setBuildingState('หอพัก')} /><span>หอพัก</span>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' checked={buildingType['Hostel']} onClick={() => setBuildingState('Hostel')} /><span>Hostel</span>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' checked={buildingType['คอนโด']} onClick={() => setBuildingState('คอนโด')} /><span>คอนโด</span>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' checked={buildingType['โรงแรม']} onClick={() => setBuildingState('โรงแรม')} /><span>โรงแรม</span>
                    </CheckBoxContainer>
                    {/* </div> */}
                </CheckBoxList>
                <br/>
                <label>7.ปกติซักผ้าด้วยวิธีไหน(สามารถตอบได้มากกว่า 1 ข้อ)</label>
                <br />
                <CheckBoxList>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' onClick={() => setWashMethodState('ซักมือด้วยตนเอง')}/><span>ซักมือด้วยตนเอง</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' onClick={() => setWashMethodState('เครื่องศักผ้าตนเอง')} /><span>เครื่องซักผ้าของตนเอง</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' onClick={() => setWashMethodState('เครื่องซักผ้าหยอดเหรียญ')} /><span>เครื่องซักผ้าหยอดเหรียญ</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' onClick={() => setWashMethodState('ร้านตู้ซักผ้า Franchise')} /><span>ร้านตู้ซักผ้า Franchise</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' onClick={() => setWashMethodState('ส่งร้าน ซัก-อบ-รีด')} /><span>ส่งร้าน ซัก-อบ-รีด</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' onClick={() => setWashMethodState('ซักผ่านตู้ Locker')} /><span>ซักผ่านตู้ Locker</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' /><span>อื่นๆ</span><input onChange={(e) => setAnother(e.target.value)} style={{backgroundColor: 'transparent', borderBottom: '1px solid black', marginLeft: '1rem', fontSize:'1.2rem', padding: '0.2rem'}} />
                        </CheckBoxContainer>
                </CheckBoxList>
                <br />
                <label>เหตุผลที่เลือกใช้วิธีดังกล่าว</label>
                <br />
                <input className='normal-input' state-value='reason-wash' onChange={setInputFormState} />
                <br />
                <label>8. ความถี่ในการซักผ้า ต่อเดือน </label>
                <br />
                <input className='normal-input' state-value='freq_wash_per_month' onChange={setInputFormState} />
                <br />
                <label>9. ปัญหาที่พบในการซักผ้า ณ ปัจจุบัน </label>
                <br />
                <input className='normal-input' state-value='problem' onChange={setInputFormState} />
                <br />
                <label>10. ในการซักผ้า 1 ครั้ง มีค่าใช้จ่ายประมาณเท่าไหร่</label>
                <br />
                <input className='normal-input' state-value='cost' onChange={setInputFormState} />
                <br />
                <label>11. ถ้าอยากซักผ้าให้ง่ายขึ้น อยากให้มีบริการอะไรมาช่วย</label>
                <input className='normal-input' state-value='method_help_washing' onChange={setInputFormState} />
                <br />
                <label>12. คุณคิดว่าการซัก-รีด ในปัจจุบันของคุณ สามารถปรับปรุงให้ดีขึ้นอย่างไรได้อีก</label>
                <br />
                <input className='normal-input' state-value='method_improve_washing' onChange={setInputFormState} />
                <br />
                <label>13.ถ้ามีบริการซักผ้าแบบ Delivery โดยสามารถเลือกร้าน และเลือกเวลารับ-ส่ง
ตามที่คุณสะดวก คุณจะใช้บริการนี้หรือไม่</label>
                <CheckBoxList>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' state-value='ซักผ่านตู้ Locker' checked={needDev['ใช่']} onClick={() => setNeedDevService(true)} /><span>ใช้</span>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' state-value='ซักผ่านตู้ Locker' checked={needDev['ไม่ใช่']} onClick={() => setNeedDevService(false)} /><span>ไม่ใช้</span>
                    </CheckBoxContainer>
                </CheckBoxList>
                <label>14. หากคุณพร้อมที่จะร่วมพัฒนา Application ให้ดีขึ้นไปกับเรา สามารถกรอก
เบอร์โทรศัพท์เพื่อลุ้นรับสิทธิประโยชน์ต่างๆ มากมาย</label>
                <br />
                <input className='normal-input' state-value='phone' onChange={setInputFormState} />
                <ButtonContainer>
                    <Button onClick={submitForm} type='submit'>Register</Button>
                </ButtonContainer>
            </FormContainer>
        </Form>
    )
}

export default UserForm;