import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
    background-color: white;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow:0px 4px 3px #C4C4C4;
`;

const Logo = styled.div`
    margin-right: auto;
    margin-left: 6rem;
`

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
`

const NavBar = () => {
    return (
        <NavBarContainer>
            <Logo>
                Logo
            </Logo>
            <NavBarMenu>
                <NavBarMenuItem href='#'>Home</NavBarMenuItem>
                <NavBarMenuItem href='#'>Register</NavBarMenuItem>
                <NavBarMenuItem href='#'>Contact us</NavBarMenuItem>
            </NavBarMenu>
        </NavBarContainer>
    );
}

export default NavBar;