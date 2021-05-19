import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaUserTie } from 'react-icons/fa';

const StyledHeader = styled.header``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SocialIcon = styled.div`
  margin: 0px 20px;
  font-size: 30px;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 153, 98, 1) 5px 5px;
  }
`;


const Header = () => (
  <StyledHeader
    style={{
      background: `white`,
    }}
  >
    <Container
      style={{
        margin: `0 auto`,
        maxWidth: 1024,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0}}>
        <Link
          to="/"
          style={{
            color: `#0036A6`,
            textDecoration: `none`,
            fontSize: `30px`,
          }}
        >
          Bioanalytical Solutions
        </Link>
      </h1>
      <SocialContainer>
        <SocialIcon>
          <a href="mailto:tiborborsosdr@gmail.com" aria-label="envelope" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={ faEnvelope } alt="envelopeIcon" style={{color: '#0036A6'}} size={32} />
          </a>
        </SocialIcon>
        <SocialIcon>
          <a href="https://www.linkedin.com/in/tibor-bors%C3%B3s-a301baab/" aria-label="linkedIn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={ faLinkedinIn } alt="linkedInIcon" style={{color: '#0036A6'}} size={32} />
          </a>
        </SocialIcon>
        <SocialIcon>
          <a href="https://www.linkedin.com/in/tibor-bors%C3%B3s-a301baab/" aria-label="linkedIn" target="_blank" rel="noopener noreferrer">
            <FaUserTie alt="userTie" style={{color: '#0036A6'}} size={26} />
          </a>
        </SocialIcon>
      </SocialContainer>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
