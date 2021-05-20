import * as React from "react"
//import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainImage from '../components/image'
import SocialIcons from '../components/socialIcons'
import Logo from '../components/logo'
import Footer from '../components/copyRight'

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
    height: 60vh;
    padding: 2rem;
    width: 100vw;
    padding-top: 8rem;
    text-align: center;
  }

  @media only screen and (min-width: 380px) and (max-width: 940px) and (orientation: landscape) {
    height: 95vh;
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

const TextH1 = styled.h1`
  @media only screen and (min-width: 567px) and (max-width: 654px) and (orientation: landscape) {
    font-size: 1.5rem;
    margin-top: 20px;
  }
`;

const TextP = styled.p`
  @media only screen and (min-width: 650px) and (max-width: 654px) and (orientation: landscape) {
    margin-bottom: 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  @media screen and (max-width: 1265px) {
    top: 0px;
    padding: 0;
    margin: 50px 0 0; 
    height: fit-content;
  }

  @media only screen and (min-width: 567px) and (max-width: 850px) and (orientation: landscape) {
    margin: 20px 0;
    width: 70%;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="I am Tibor Borsos, the creator and owner of Bioanalytical Solutions, a consultancy specialising in training and supporting analytical labs, especially in the field of LC-MC bioanalysis. I offer expertise to laboratories of pharmaceutical companies, universities, start-ups and CROs." />
    <Logo />
    <Container>
      <TextContainer>
        <Text>
          <TextH1>We are working on something big.</TextH1>
          <TextP>We will start soon.</TextP>
        </Text>
        <SocialIcons />
      </TextContainer>
      <ImageContainer>
        <MainImage />
        <Footer />
      </ImageContainer>
    </Container>
  </Layout>
)

export default IndexPage
