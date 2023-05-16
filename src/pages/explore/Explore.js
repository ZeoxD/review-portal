import styled from "styled-components";
import UserGrid from "./UserGrid";

const Explore = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Want to explore various profiles? - </a>
        </h5>
        <p>
          Find various users using our Search mechanism in the explore tab.
        </p>
      </Section>
      <Layout>
        <UserGrid name= "Andrew"/>
        <UserGrid name= "John" />
        <UserGrid name= "James" />
        <UserGrid name= "Johnson" />
        <UserGrid name= "Jeffrey" />
        <UserGrid name= "Josesph" />
        <UserGrid name= "Evan" />
        <UserGrid name= "Keith" />
        <UserGrid name= "Harrison" />
        <UserGrid name= "Adam" />
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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 40px;
    row-gap: 40px;
    /* grid-template-row: auto; */
    margin: 25px 0;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
  }
`;

export default Explore;