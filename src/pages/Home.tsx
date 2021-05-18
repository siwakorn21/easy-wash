import React from 'react';
import styled from 'styled-components';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';
import MOBILE_IMAGE from '../assets/images/e25c12b7f84cd6ecbc3c6a543ba01e78.png';
import Footer from '../components/pages/Footer';
import RegisterForm from '../components/pages/RegisterForm';

const HomeContainer = styled.div`
`;

const Content1 = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`;

const Header1 = styled.h1`
    margin-top: 5rem;
    font-size: 2.5rem;
    font-family: 'Roboto';
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
`;

const Content3 = styled.div`
    background-color: #E5E5E5;
    width: 100%;
    /* height: 80vh; */
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10rem;
    padding-top: 6rem;

    h3 {
        font-size: 2.2rem;
        text-align: center;
    }
`;

const Home = () => {

    return (
        <HomeContainer>
            <Content1>
                <Header1>
                    ทำไมเรายังต้องทน<br/>กับปัญหาต่างๆ เหล่านี้?
                </Header1>
                <Video />
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
                <h3>ลงทะเบียนเพื่อร่วมพัฒนาแอปพลิเคชัน
                    <br/>และลุ้นรับสิทธิประโยชน์ก่อนใคร</h3>
                    <RegisterForm />
            </Content3>
            <Footer />
        </HomeContainer>
    );
}

export default Home;