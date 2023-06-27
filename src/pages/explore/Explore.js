import React from 'react'
import { useCollection } from '../../hooks/useCollection'

// styles & images
import styled from "styled-components";

// pages & componenets
import UserGrid from "./UserGrid";

function Explore() {

  const { documents } = useCollection('users')

  return (
    <Container>
      <Section>
        <h1>Explore registered user profiles here</h1>
      </Section>
      <Layout>
        {documents && documents.map(user => (
          <UserGrid key={user.id} uid={user.id} name={user.displayName} imgSrc={user.photoURL} 
          onlineStatus={user.online ? "green" : "red"} score={user.score}/>
        ))}
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 36px;
  max-width: 100vw;
`;

const Section = styled.section`
  min-height: 26px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
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
  @media (max-width: 840px) {
    flex-direction: column;
    padding: 0 5px;
  }

  @media (max-width: 526px) {
    h1 {
      font-size: 1.12rem;
    }
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
    margin: 24px 48px;
    @media (max-width: 840px) {
      display: flex;
      flex-direction: row;
      row-gap: 16px;
      column-gap: 16px;
      margin: 24px;
    }
    @media (max-width: 526px) {
      row-gap: 12px;
    }
`;

export default Explore;