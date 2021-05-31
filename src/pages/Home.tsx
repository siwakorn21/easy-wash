import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';
import MOBILE_IMAGE from '../assets/images/sakdee-mobile.png';
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

    h4 {
        margin-top: 4rem;
        font-size: 1.5rem;
        text-align: center;
    }
`;

const Header1 = styled.h1`
    margin-top: 5rem;
    font-size: 2.5rem;
    text-align: center;
`;

const MobileImg = styled.img`
    position: absolute;
    top: -0%;
    width: 60%;
    z-index: -1;
`;

const Content3 = styled.div`
    margin-top: 10rem;
    z-index: 1;
    background-color: white;
    width: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10rem;
    padding-top: 6rem;

    h3 {
        font-size: 2.2rem;
        margin-left: 45%;
        margin-top: 3rem;
        /* text-align: center; */
    }

    h4 {
        text-align: center;
        font-weight: 400;
        font-size: 1.5rem;
        margin-top: 2rem;
    }

`;

const Button = styled.button`
    cursor: pointer;
    background-color: #480CA8;
    font-family: 'Prompt', sans-serif;
    font-weight: bolder;
    color: white;
    font-size: 1.2rem;
    width: 13rem;
    height: 3rem;
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

const VideoContainer = styled.div`
    width: 52%;
    height: 41vh;
    margin-top: 7rem;
    margin-left: auto;
    margin-right: auto;
`;

const Home = () => {

    const [userRole, setUserRole] = useState(0); 

    const SelectRoleHandler = (role: number) => {
        setUserRole(role);
    }

    const renderForm = () => {
        if (userRole == 0) return null;
        else if (userRole == 1) {
            return (
                <Content3>
                    <h3>กรอกข้อมูลเพื่อร่วมพัฒนาแอปพลิเคชัน
                    <br />และลุ้นรับสิทธิประโยชน์มากมาย</h3>
                    <MobileImg src={MOBILE_IMAGE} /> 
                    <UserForm />
                </Content3>
            );
        }
        else {
            return (
                <Content3>
                    <h3>กรอกข้อมูลเพื่อร่วมพัฒนาแอปพลิเคชัน
                    <br />และลุ้นรับสิทธิประโยชน์มากมาย</h3>
                    <MobileImg src={MOBILE_IMAGE} /> 
                    <StoreForm />
                </Content3>
            );
        }
    }

    return (
        <HomeContainer>
            <Content1>
                <Header1>
                    ทำไมเรายังต้องทน<br/>กับปัญหาต่างๆ เหล่านี้?
                </Header1>
                <VideoContainer>
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=1MRA8sHmJWA"
                        width= '100%'
                        height= '100%'
                    />
                </VideoContainer>
                <h4>คุณคือ ผู้ใช้บริการ หรือ ผู้ให้บริการซัก-อบ-รีด</h4>
                <br/>
                <ButtonContainer>
                    <Button onClick={() => SelectRoleHandler(1)}>ผู้ใช้บริการ</Button>
                    <Button onClick={() => SelectRoleHandler(2)}>ผู้ให้บริการ</Button>
                </ButtonContainer>
            </Content1>
            {/* <Content2>
                <MobileImg src={MOBILE_IMAGE}></MobileImg>
                <TextBox2>
                    <h2>Easy Wash</h2>
                    <h3>“ Cloud Washing Store ”</h3>
                    <p>แอปพลิเคชันที่จะช่วยให้คุณสามารถก้าวข้ามทุกข้อจำกัด 
                       <br/>ของการซักผ้าในรูปแบบเดิมๆ เพราะไม่ว่าคุณจะอยู่ที่ไหนก็ 
                       <br/>สามารถซักผ้าได้ เพียงแค่ใช้ Easy Wash</p>
                </TextBox2>
               
            </Content2> */}
            {/* <Content3> */}
                
            {/* </Content3> */}
            {renderForm()}
            <Footer />
        </HomeContainer>
    );
}

export default Home;