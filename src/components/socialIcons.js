import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FaUserTie } from 'react-icons/fa'

const SocialIconsContainer = styled.div`
    display: inline-flex;
    margin: 20px 10px;

    @media only screen and (min-width: 650px) and (max-width: 654px) and (orientation: landscape) {
        margin: 0 10px;
    }
`;
const SocialIcon = styled.div`
    color: white;
    font-size: 35px;
    border-radius: 3px;
    cursor: pointer;
    transition: all ease-in-out 150ms;
    margin: 10px;
    padding: 10px 14px;
    -o-transition: .5s;
    -ms-transition: .5s;
    -moz-transition: .5s;
    -webkit-transition: .5s;
    transition: .5s;
    background-color: transparent;
    &:hover, &:focus {
        background-color: #0036A6;
        box-shadow: 0 0.5em 0.5em -0.4em #0036A6;
        transform: translateY(-0.25em);
    }

    @media only screen and (min-width: 567px) and (max-width: 654px) and (orientation: landscape) {
        padding: 0 5px;
    }
`;

export default function SocialIcons() {
    return (
        <div>
        <SocialIconsContainer>
            <SocialIcon>
                <a href="mailto:tiborborsosdr@gmail.com" aria-label="envelope" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={ faEnvelope } alt="envelopeIcon" style={{color: 'white'}}/>
                </a>
            </SocialIcon>
            <SocialIcon>
            <a href="https://www.linkedin.com/in/tibor-bors%C3%B3s-a301baab/" aria-label="linkedIn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faLinkedinIn } alt="linkedInIcon" style={{color: 'white'}} />
            </a>
            </SocialIcon>
            <SocialIcon>
                <a href="https://www.google.com" aria-label="personalWebsite" target="_blank" rel="noopener noreferrer">
                    <FaUserTie alt="userTie" style={{color: 'white'}} size={30} />
                </a>
            </SocialIcon>
        </SocialIconsContainer>
        </div>
    )
}