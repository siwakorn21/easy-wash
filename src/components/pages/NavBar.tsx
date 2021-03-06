import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/images/logo-1.png';

const NavBarContainer = styled.div`
    background-color: white;
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow:0px 4px 3px #C4C4C4;
`;

const LogoContainer = styled.div`
    margin-right: auto;
    margin-left: 6rem;
    width: 20%;

    @media only screen and (max-width: 600px) {
        width: 30%;
        margin-left: 2rem;
    }
`;

const Logo = styled.img`
    width: 50%;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;


const NavBarMenu = styled.div`
    margin-right: 6rem;
`;

const NavBarMenuItem = styled.a`
    margin-right: 4rem;
    color: black;
    text-decoration: none;
    &:last-child {
        margin-right: 0;
    }

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

const NavBarMenuMobile = styled.div`

`;

const NavBar = () => {
    return (
        <NavBarContainer>
            <LogoContainer>
                <Logo src={LogoImage} />
            </LogoContainer>
            <NavBarMenu>
                <NavBarMenuItem href='#'>Home</NavBarMenuItem>
                <NavBarMenuItem href='#'>Register</NavBarMenuItem>
                <NavBarMenuItem href='#'>Contact us</NavBarMenuItem>
            </NavBarMenu>
            <NavBarMenuMobile>

            </NavBarMenuMobile>
        </NavBarContainer>
    );
}

export default NavBar;