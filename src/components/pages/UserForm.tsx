import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import config from '../../config';
import '../../index.css';

// Config Variable
const url = `http://${config.BACKEND_IP}:${config.BACKEND_PORT}`;
// const url = `backend:8080`;

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
        padding: 0.5rem;
        font-size: 1.2rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        height: 4vh;
        border: 1px solid #2F2F2F;
        border-radius: 0.2rem;
    }

    @media only screen and (max-width: 600px) {
        input.normal-input {
            height: 6vh;
        }

        label {
            font-size: 1rem;
            margin-top: 1rem;
        }
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
        wash_method: [],
        reason_wash: '',
        freq_wash_per_month: -1,
        problem: '',
        cost: -1,
        method_help_washing: '',
        method_improve_washing: '',
        need_delivery_service: false,
        phone: ''
    });

    const [needDev, setNeedDev] = useState({'?????????': false, '??????????????????': false});
    const [washMethod, setWashMethod] = useState<string[]>([]);
    const [another, setAnother] = useState('');

    const [buildingType, setBuildingType] = useState({
        '????????????': false,
        '???????????????': false,
        '???????????????': false,
        'Hostel': false,
        '??????????????????': false,
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
        // validateInput(e.target.value, key);
        // console.log(newState);
    }

    const setNeedDevService = (val: boolean) => {
        if (val === true) {
            const newState = {'?????????': true, '??????????????????': false};
            setFormState({...formState, ['need_delivery_service']: true});
            setNeedDev(newState);
        } else {
            const newState = {'?????????': false, '??????????????????': true};
            setFormState({...formState, ['need_delivery_service']: false});
            setNeedDev(newState);
        }
        // console.log(formState)
    }

    const setBuildingState = (val: string) => {
        let newState = {
            '????????????': false,
            '???????????????': false,
            '???????????????': false,
            'Hostel': false,
            '??????????????????': false,
        };
        setBuildingType({...newState, [val]: true});
        setFormState({...formState, ['building_type']: val});
        // console.log(formState);
    }

    const setWashMethodState = (val: string) => {
        let newState: string[] = [];
        if (washMethod.includes(val)) {
            newState = washMethod.filter(item => item !== val);
        } else {
            newState = [...washMethod, val];
        }
        setFormState({...formState, [`${'wash_method'}`]: newState})
        setWashMethod(newState);
    }

    const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let sendData = formState;
        if (another !== '' || another !== null) {
            sendData = {...sendData, [`${'wash_method'}`]: [...washMethod, another]};
        }

        let newWashMethod = [];

        for (var i = 0; i < formState['wash_method'].length; i++) {
            newWashMethod.push({[`${'method'}`] : formState['wash_method'][i]})
        }
        sendData = {...formState, [`${'wash_method'}`]: newWashMethod};
        
        axios
            .post(`${url}/user/form`, sendData)
            .then(response => {
                console.log("response: ", response);
                window.alert('Submit form success. Thank you for taking the time.')
                window.location.reload();
            })
            .catch(err => {
                console.error(err);
                window.alert('Something went wrong. Please try again.')
                window.location.reload();
            });
    }

    const validateInput = (input: string, type: string | null) => {
        if (type === null) return;
        // if (intList.includes(type)) {
        //     console.log('asdasd')
        //     console.log(parseInt(input));
        //     if (Number.isNaN(parseInt(input))) {
        //         window.alert('??????????????????????????????????????????????????????');
        //         setFormState({...formState, [type]: -1});
        //     }
        // }
    }

    return (
        <Form>
            <FormContainer>
                <label>1.Email: </label>
                <input className='normal-input' type='email' state-value='email' onChange={setInputFormState}/>
                <br />
                <label>2.????????????: </label>
                <input className='normal-input' state-value='age' onChange={setInputFormState} />
                <label>3.???????????????</label>
                <input className='normal-input' state-value='job' onChange={setInputFormState}/>
                <br />
                <label>4.????????????????????????????????????????????????????????????????????? (??????????????????????????????????????????????????????)</label>
                <input className='normal-input' state-value='income' onChange={setInputFormState} />
                <br />
                <label>5.?????????????????????????????????????????????</label>
                <br />
                <input className='normal-input' state-value='location' onChange={setInputFormState} />
                <br />
                <label>6.????????????????????????????????????</label>
                <br />
                <CheckBoxList>
                    {/* <div className='col1'> */}
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' checked={buildingType['????????????']} onClick={() => setBuildingState('????????????')}/><span>????????????</span>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' checked={buildingType['???????????????']} onClick={() => setBuildingState('???????????????')} /><span>???????????????</span>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' checked={buildingType['Hostel']} onClick={() => setBuildingState('Hostel')} /><span>Hostel</span>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' checked={buildingType['???????????????']} onClick={() => setBuildingState('???????????????')} /><span>???????????????</span>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' checked={buildingType['??????????????????']} onClick={() => setBuildingState('??????????????????')} /><span>??????????????????</span>
                    </CheckBoxContainer>
                    {/* </div> */}
                </CheckBoxList>
                <br/>
                <label>7.???????????????????????????????????????????????????????????????(????????????????????????????????????????????????????????? 1 ?????????)</label>
                <br />
                <CheckBoxList>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' onClick={() => setWashMethodState('?????????????????????????????????????????????')}/><span>?????????????????????????????????????????????</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' onClick={() => setWashMethodState('??????????????????????????????????????????????????????')} /><span>???????????????????????????????????????????????????????????????</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' onClick={() => setWashMethodState('?????????????????????????????????????????????????????????????????????')} /><span>?????????????????????????????????????????????????????????????????????</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' onClick={() => setWashMethodState('??????????????????????????????????????? Franchise')} /><span>??????????????????????????????????????? Franchise</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' onClick={() => setWashMethodState('????????????????????? ?????????-??????-?????????')} /><span>????????????????????? ?????????-??????-?????????</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' onClick={() => setWashMethodState('?????????????????????????????? Locker')} /><span>?????????????????????????????? Locker</span>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox' /><span>???????????????</span><input onChange={(e) => setAnother(e.target.value)} style={{backgroundColor: 'transparent', borderBottom: '1px solid black', marginLeft: '1rem', fontSize:'1.2rem', padding: '0.2rem'}} />
                        </CheckBoxContainer>
                </CheckBoxList>
                <br />
                <label>???????????????????????????????????????????????????????????????????????????????????????</label>
                <br />
                <input className='normal-input' state-value='reason_wash' onChange={setInputFormState} />
                <br />
                <label>8. ?????????????????????????????????????????????????????? ???????????????????????? (??????????????????????????????????????????????????????)</label>
                <br />
                <input className='normal-input' state-value='freq_wash_per_month' onChange={setInputFormState} />
                <br />
                <label>9. ??????????????????????????????????????????????????????????????? ??? ???????????????????????? </label>
                <br />
                <input className='normal-input' state-value='problem' onChange={setInputFormState} />
                <br />
                <label>10. ????????????????????????????????? 1 ??????????????? ?????????????????????????????????????????????????????????????????????????????? (??????????????????????????????????????????????????????)</label>
                <br />
                <input className='normal-input' state-value='cost' onChange={setInputFormState} />
                <br />
                <label>11. ???????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????</label>
                <input className='normal-input' state-value='method_help_washing' onChange={setInputFormState} />
                <br />
                <label>12. ?????????????????????????????????????????????-????????? ???????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????</label>
                <br />
                <input className='normal-input' state-value='method_improve_washing' onChange={setInputFormState} />
                <br />
                <label>13.???????????????????????????????????????????????????????????? Delivery ?????????????????????????????????????????????????????? ?????????????????????????????????????????????-?????????
?????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????</label>
                <CheckBoxList>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' state-value='?????????????????????????????? Locker' checked={needDev['?????????']} onClick={() => setNeedDevService(true)} /><span>?????????</span>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type='checkbox' state-value='?????????????????????????????? Locker' checked={needDev['??????????????????']} onClick={() => setNeedDevService(false)} /><span>??????????????????</span>
                    </CheckBoxContainer>
                </CheckBoxList>
                <label>14. ??????????????????????????????????????????????????????????????????????????? Application ??????????????????????????????????????????????????? ??????????????????????????????
????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????</label>
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