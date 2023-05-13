import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Bottom from "./Bottom";

const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Want to increase your Review score? - </a>
        </h5>
        <p>
          Add various achievements to your profile to increase your Review score.
        </p>
      </Section>
      <Layout>
        <Leftside />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 72px;
  max-width: 100vw;
`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  min-height: 26px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
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
`;

const Layout = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 72vw;
    padding-left: 14vw;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    /* grid-template-row: auto; */
    margin: 25px 0;
    @media (max-width: 768px) {
        display: flex;
        padding: 0 5px;
  }
`;

export default Home;