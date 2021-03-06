import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/images/logo-2.png';

const FooterContainer = styled.div`
    margin-top: 2rem;
    background-color: #480CA8;
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    width: 30%;
`;

const LogoContainer = styled.div`
    width: 20%;
    height: 30%;
    margin-right: auto;
    margin-left: 5rem;

    @media only screen and (max-width: 600px) {
        width: 45%;
    }
`;

const ContactContainer = styled.div`
    margin-right: 6rem;
    span {
        color: white;
        font-size: 1rem;
    }

    @media only screen and (max-width: 600px) {
        span {
            font-size: 0.35rem;
        }
    }
`;

const Footer = () => {

    return (
        <FooterContainer>
            <LogoContainer>
                <Logo src={LogoImage} />
            </LogoContainer>
            <ContactContainer>
                <span>Email : Customer@easywash.com</span>
            </ContactContainer>
        </FooterContainer>
    );
}

export default Footer;