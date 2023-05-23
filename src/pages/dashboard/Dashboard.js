import Avatar from '../../components/Avatar'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles & images
import styled from "styled-components";

const Dashboard = (props) => {

  const { user } = useAuthContext()

  return (
    <Container>
      <Section>
        <Avatar src = {user.photoURL}/>
        <p>Hey {user.displayName}</p>
      </Section>
 
      <Content>
        <h1>Achievements</h1>
      </Content>
      <Content>
        <h1>Here we'll have the page content.</h1>
      </Content>
      <Content>
        <h1>Here we'll have the page content.</h1>
      </Content>
      <Content>
        <h1>Here we'll have the page content.</h1>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 48px;
  max-width: 100vw;
  margin-bottom: 20px;
`

const Section = styled.section`
  min-height: 26px;
  padding: 16px 0;
  margin: 12px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  border: 2px solid black;
  border-radius: 5px;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`

const Content = styled.div`
  max-width: 1128px;
  margin: 10px auto;
  border: 2px solid black;
  border-radius: 5px;
`

export default Dashboard;