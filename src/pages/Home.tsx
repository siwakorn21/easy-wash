import React, { useState } from 'react';
import styled from 'styled-components';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';
import MOBILE_IMAGE from '../assets/images/e25c12b7f84cd6ecbc3c6a543ba01e78.png';
import ProblemImage from '../assets/images/problem.png';
import Footer from '../components/pages/Footer';
import RegisterForm from '../components/pages/RegisterForm';
import StoreForm from '../components/pages/StoreForm';
import UserForm from '../components/pages/UserForm';

const HomeContainer = styled.div`
    /* font-family: 'Prompt', sans-serif; */
`;

const Content1 = styled.div`
    height: 100vh;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`;

const Header1 = styled.h1`
    margin-top: 5rem;
    font-size: 2.5rem;
    text-align: center;
`;

const Video = styled.div`
    width: 85%;
    height: 600px;
    background-color: #C4C4C4;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
`;

const Content2 = styled.div`
    height: 100vh;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 4rem;
`;

const MobileImg = styled.img`
    position: relative;
    width: 120%;
    left: 5%;
`;

const TextBox2 = styled.div`
    margin-top: 10rem;
    width: 100%;

    h2 {
        font-size: 2.9rem;
    }

    h3 {
        margin-top: 2rem;
        font-size: 2rem;
        font-weight: lighter;
    }

    p {
        margin-top: 3rem;
        font-size: 1.25rem;
    }

    h4 {
        text-align: center;
        font-size: 2rem;
    }
`;

const Content3 = styled.div`
    background-color: #E5E5E5;
    width: 100%;
    /* height: 100vh; */
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10rem;
    padding-top: 6rem;

    h3 {
        font-size: 2.2rem;
        text-align: center;
    }

    h4 {
        text-align: center;
        font-weight: 400;
        font-size: 1.5rem;
        margin-top: 2rem;
    }
`;

const TmpImageContainer = styled.div`
    margin-top: 7rem;
`;

const TmpImage = styled.img``;


const Button = styled.button`
    cursor: pointer;
    background-color: #480CA8;
    font-family: 'Prompt', sans-serif;
    font-weight: bolder;
    color: white;
    font-size: 1.2rem;
    width: 15rem;
    height: 4rem;
    border-radius: 5px;
    
    &:last-child {
        margin-left: 4rem;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Home = () => {

    const [userRole, setUserRole] = useState(0); 

    const SelectRoleHandler = (role: number) => {
        setUserRole(role);
    }

    const renderForm = () => {
        if (userRole == 0) return null;
        else if (userRole == 1) return <UserForm />
        else return <StoreForm />
    }

    return (
        <HomeContainer>
            <Content1>
                <Header1>
                    ทำไมเรายังต้องทน<br/>กับปัญหาต่างๆ เหล่านี้?
                </Header1>
                <TmpImageContainer>
                    <TmpImage src={ProblemImage} />
                </TmpImageContainer>
                {/* <Video /> */}
            </Content1>
            <Content2>
                <MobileImg src={MOBILE_IMAGE}></MobileImg>
                <TextBox2>
                    <h2>Easy Wash</h2>
                    <h3>“ Cloud Washing Store ”</h3>
                    <p>แอปพลิเคชันที่จะช่วยให้คุณสามารถก้าวข้ามทุกข้อจำกัด 
                       <br/>ของการซักผ้าในรูปแบบเดิมๆ เพราะไม่ว่าคุณจะอยู่ที่ไหนก็ 
                       <br/>สามารถซักผ้าได้ เพียงแค่ใช้ Easy Wash</p>
                </TextBox2>
               
            </Content2>
            <Content3>
                <h3>กรอกข้อมูลเพื่อร่วมพัฒนาแอปพลิเคชัน
                <br />และลุ้นรับสิทธิประโยชน์มากมาย</h3>
                <h4>คุณคือ ผู้ใช้บริการ หรือ ผู้ให้บริการซัก-อบ-รีด</h4>
                <br/>
                <ButtonContainer>
                    <Button onClick={() => SelectRoleHandler(1)}>ผู้ใช้บริการ</Button>
                    <Button onClick={() => SelectRoleHandler(2)}>ผู้ให้บริการ</Button>
                </ButtonContainer>
                {renderForm()}
            </Content3>
            <Footer />
        </HomeContainer>
    );
}

export default Home;