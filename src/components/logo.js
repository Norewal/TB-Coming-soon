import React from 'react'
import styled from "styled-components"
import Img from "../images/logo.png";

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    margin: 1rem 3rem;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 1350px) {
        flex-direction: column
    }
    @media only screen and (max-width: 1265px)  {
        flex-direction: row;
    }
`;

const LogoImg = styled.img `
    width: 4em;
    padding: 0 10px 0 0;
`;

const LogoText = styled.div`
    font-size: 23px;
    padding: 0 20px 15px 0;
    color: white;
    font-family: Gotham;
    
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

`; 



export default function Logo() {
    return (
        <div>
            <LogoContainer>
                <LogoImg src={Img} alt="Logo" />
                <LogoText>Bioanalytical Solutions</LogoText>
            </LogoContainer>
        </div>
    )
}