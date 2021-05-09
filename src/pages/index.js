import * as React from "react"
//import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainImage from '../components/image'
import SocialIcons from '../components/socialIcons'
import Logo from '../components/logo'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:  center;

  @media only screen and (max-width: 1265px)  {
    flex-direction: column;
  }
`;


const TextContainer = styled.div`
  height: 100vh;
  width: 50%;
  background: linear-gradient(184deg, rgba(0,54,166,1) 0%, rgba(0,153,98,1) 100%);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  @media only screen and (max-width: 1265px)  {
    height: 40vh;
    padding: 2rem;
    width: 100vw;
    padding-top: 8rem;
    text-align: center;
  }
`;

const Text = styled.div`
  color: white;
  font-family: Gotham-medium;

  > :first-child {
    font-family: Gotham-medium;

    @media screen and (max-width: 396px) {
      font-size: 25px;
    }
  }
`;

const ImageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1265px) {
    top: 0px;
    padding: 0;
    margin: 50px 0 0; 
    height: 70vh;
}
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Logo />
    <Container>
      <TextContainer>
        <Text>
          <h1>We are working on something big.</h1>
          <p>We will start soon.</p>
        </Text>
        <SocialIcons />
      </TextContainer>
      <ImageContainer>
        <MainImage />
      </ImageContainer>
    </Container>
  </Layout>
)

export default IndexPage
