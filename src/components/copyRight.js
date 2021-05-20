import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    right: 2rem;
    bottom: 0;
    position: absolute;
  padding: 1rem 1rem 0 0;
  

  @media screen and (max-width: 1265px) {
    bottom: 0;
    right: 0;
    position: relative;
    text-align: center;
    padding: 30px 0 0;
  }
  
`;


const CopyRight = styled.div`
  display: flex;
  font-size: 15px;
  
`;

const CopyRightText = styled.a`
  color: #9e9e99;
  text-decoration: none;
  margin-left: 5px;
  font-size: 15px;
  transition:all .5s ease-in-out;
  &:hover {
    color: rgba(0,153,98,1);
    text-decoration: underline;
  }
`;

const CurrentYear = styled.p`
  color: #9e9e99;
  margin-left: 5px;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

    return (
        <Container>
            <CopyRight> 
                <CurrentYear>&#169; {currentYear}</CurrentYear>
                <CopyRightText  href="https://www.gabriellajs.digital/" target="_blank" rel="noopener noreferrer"> gabriellaJS</CopyRightText>
            </CopyRight>
        </Container>
    );
}