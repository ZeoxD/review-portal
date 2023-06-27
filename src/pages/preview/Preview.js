import React from 'react'

//styles & images
import styled from "styled-components";
import previewLogo from '../../assets/preview-login-small.jpg'

const Login = (props) => {
    return (
        <Section>
            <h1>Welcome to our Personal Review Portal application.</h1>
            <img src={previewLogo} alt="Preview" />
            <h2>Register, Review & Explore all the registered Users in the Preview portal.</h2>
        </Section>
    )
}

const Section = styled.div`
    padding: 5vh 5vw;

    h1 {
        padding-bottom: 0;
        width: 55%;
        font-size: 50px;
        color: #1e4620;
        font-weight: 400;
        line-height: 70px;

        @media (max-width: 1024px) {
            margin: 0;
            text-align: center;
            font-size: 32px;
            width: 55%;
            line-height: 60px;
        }

        @media (max-width: 840px) {
            margin: 0;
            margin-top: 6vh;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            width: 100%;
            line-height: 2;
        }

        @media (max-width: 526px) {
            margin: 0;
            margin-top: 10vh;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            width: 100%;
            line-height: 2;
        }
    }

    h2 {
        padding-bottom: 0;
        width: 55%;
        font-size: 30px;
        color: #1e4620;
        font-weight: 400;
        line-height: 48px;
        margin-top: 36px;

        @media (max-width: 1024px) {
            font-size: 24px;
            text-align: center;
        }

        @media (max-width: 840px) {
            margin: 0;
            margin-bottom: 6vh;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            width: 100%;
            line-height: 2;
        }

        @media (max-width: 526px) {
            margin: 0;
            margin-bottom: 10vh;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            width: 100%;
            line-height: 2;
        }
    }

    img {
        z-index: -1;
        width: 850px;
        height: auto;
        position: absolute;
        bottom: 6vh;
        right: 6vw;

        @media (max-width: 1024px) {
            width: 600px;
        }

        @media (max-width: 840px) {
            position: static;
            bottom: 0;
            right: 0;
            margin: auto auto;
            width: 80vw;
            height: auto;
        }
    }

    @media(max-width: 840px) {
        display: flex;
        flex-direction: column;
        height: 92vh;
        padding: 0;
    }
`;

export default Login;
