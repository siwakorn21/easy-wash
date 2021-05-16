import React from 'react';
import styled from 'styled-components';
import MOBILE_IMAGE from '../assets/images/e25c12b7f84cd6ecbc3c6a543ba01e78.png';
import RegisterForm from '../components/pages/RegisterForm';

const HomeContainer = styled.div`
`;

const Header1 = styled.h1`
    margin-top: 5rem;
    font-size: 2.5rem;
    font-family: 'Roboto';
    text-align: center;
`;

const Video = styled.div`
    width: 60%;
    height: 600px;
    background-color: #C4C4C4;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
`;

const Content2 = styled.div`
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: row;
`;

const MobileImg = styled.img`
    top: 20%;
    width: 100%;
`;

const TextBox2 = styled.div`

`;

const Header2 = styled.h2`
    font-size: 2rem;
`;

const Header3 = styled.h3`

`;

const Content3 = styled.div`
    background-color: #E5E5E5;
`;

const Header4 = styled.h3`
    font-size: 1.75rem;
`;
const Home = () => {

    return (
        <HomeContainer>
            <Header1>
                ทำไมเรายังต้องทน<br/>กับปัญหาต่างๆ เหล่านี้?
            </Header1>
            <Video />
            <Content2>
                <MobileImg src={MOBILE_IMAGE}></MobileImg>
                <TextBox2>
                    <Header2>Easy Wash</Header2>
                    <Header3>“ Cloud Washing Store ”</Header3>
                    <p>แอปพลิเคชันที่จะช่วยให้คุณสามารถก้าวข้ามทุกข้อจำกัด 
                       <br/>ของการซักผ้าในรูปแบบเดิมๆ เพราะไม่ว่าคุณจะอยู่ที่ไหนก็ 
                       <br/>สามารถซักผ้าได้ เพียงแค่ใช้ Easy Wash</p>
                </TextBox2>
            </Content2>
            <Content3>
                <Header4>ลงทะเบียนเพื่อร่วมพัฒนาแอปพลิเคชัน
                    <br/>และลุ้นรับสิทธิประโยชน์ก่อนใคร</Header4>
                    <RegisterForm />
            </Content3>
        </HomeContainer>
    )
}

export default Home;