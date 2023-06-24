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
    width: 100%;
    height: 93vh;

    h1 {
        padding-bottom: 0;
        width: 55%;
        font-size: 50px;
        color: #1e4620;
        font-weight: 400;
        line-height: 70px;
        @media (max-width: 768px) {
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
        margin-top: 48px;
        @media (max-width: 768px) {
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
        width: 50vw;
        height: auto;
        position: absolute;
        bottom: 6vh;
        right: 6vw;
        @media (max-width: 768px) {
            position: static;
            bottom: 0;
            right: 0;
            margin: auto auto;
            width: 80vw;
            height: auto;
        }
    }

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export default Login;
