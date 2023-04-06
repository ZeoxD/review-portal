import styled from "styled-components";

const login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/preview-logo.jpg" alt="" />
                </a>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
    padding: 0px;
`;
const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;<div>
    <h1>Login</h1>
</div>
    display: flex;
    align-items:center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;

export default login;