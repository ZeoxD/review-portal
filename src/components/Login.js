import styled from "styled-components";
import { connect } from 'react-redux';

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/preview-logo-large.jpg" alt="" height="38px" width="145px"/>
                </a>
                <div>
                    <Join>Sign Up</Join>
                    <SignIn>Sign In</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to our Personal Review Portal application.</h1>
                    <img src="/images/preview-login-small.jpg" alt="" />
                </Hero>
                <Form>
                    <Google>
                        <img src="/images/google-logo.png" alt="" height="26px" width="auto"></img>
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

const Container = styled.div`
padding: 0px;
`;


const Nav = styled.nav`
    max-width: 98vw;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items:center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a {
        width: 145px;
        height: 38px;
        box-shadow: 1px 1px 3px black;
        border-radius: 2px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }z-index: -1;
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 12px 14px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;

    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0f2310;
    color: #1e4620;
    border-radius: 24px;
    border: 2px solid;
    transition-duration: 180ms;
    font-size: 16px;
    font-weight: bold;
    line-height: 40px;
    padding: 10px 20px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    &:hover {
        background-color: rgba(172, 233, 135, 0.12);
        text-decoration: none;
    }
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
        width: 80%;
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
            margin-top: 80px;
            margin-bottom: 60px;
            text-align: center;
            font-size: 20px;
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
            width: 80vw;
            position: initial;
            height: auto;

        }
    }
`;

const Form = styled.div`
    margin-top:100px;
    width: 408px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgba(0 0 0 / 60%), 
                inset 0 0 0 2px rgba(0 0 0 / 0%) inset 0 0 0 1px rgba(0 0 0 / 0%);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }
`;

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(Login);