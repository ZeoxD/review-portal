//styles & images
import styled from "styled-components";
import previewLogo from '../../assets/preview-login-small.jpg'

const Login = (props) => {
    return (
        <Container>
            <Section>
                <Hero>
                    <h1>Welcome to our Personal Review Portal application.</h1>
                    <img src={previewLogo} alt="Preview" />
                </Hero>
                <Hero>
                    <h2>Register, Review & Explore all the registered Users in the Preview portal.</h2>
                </Hero>
            </Section>
        </Container>
    )
}

const Container = styled.div`
    padding: 0px;
`;

const Section = styled.section`
    display: flex;    
    align-content: start;
    min-height: 700px;
    padding-bottom: 140px;
    paddint-top: 40px;
    padding: 0 60px;
    position: relative;
    flex-wrap: wrap;
    width: 90%;
    max-width: 100vw;
    margin: auto;
    @media(max-width: 768px) {
        margin: auto;
        min-height: 0;
        width: 70%;
    }
    
`;

const Hero = styled.div`
    width: 100%;
    h1 {
        padding-bottom: 0;
        width: 55%;
        font-size: 50px;
        color: #1e4620;
        font-weight: 400;
        line-height: 70px;
        @media (max-width: 768px) {
            margin-top: 60px;
            margin-bottom: 60px;
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
            margin-top: 60px;
            margin-bottom: 40px;
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
            top: 230px;
            width: 55vw;
            position: initial;
            height: auto;

        }
    }
`;

export default Login;
