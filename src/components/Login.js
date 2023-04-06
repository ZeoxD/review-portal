import styled from "styled-components";

const login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/preview-logo-large.jpg" alt="" height="35px" width="135px"/>
                </a>
                <div>
                    <Join>Sign Up</Join>
                </div>
            </Nav>
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
        width: 135px;
        height: 34px;
        box-shadow: 1px 1px 3px black;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;
    border-radius: 5px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;

    }
`;

export default login;