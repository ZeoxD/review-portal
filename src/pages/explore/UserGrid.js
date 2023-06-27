import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext';

// styles & images
import styled from "styled-components";
import './UserGrid.css';
import ItemIcon from "../../assets/item-icon.svg";

// pages & components
import Avatar from '../../components/Avatar'

const UserGrid = (props) => {

  const {uid, name, imgSrc, onlineStatus, score } = props
  const { user } = useAuthContext()

  let id = `/visit/${uid}`
  if(uid === user.uid) {
    id = `/`
  }

  return (
    <Container>
      <ArtCard>
        <UserInfo>
            <Avatar src={imgSrc} classAvatar="avatar-responsive" />
        </UserInfo>
        <UserName className={onlineStatus}>
          <Link className="username-link" key={uid} to={id}>{name}</Link>
          <span></span>
        </UserName>
        <Item>
          <span>
            <img src={ItemIcon} alt="item"/>
            <h4>{score}</h4>
          </span>
        </Item>
      </ArtCard>
    </Container>
  );
};

const Container = styled.div` 
  width: 210px;
  @media (max-width: 840px) {
    width: 132px;
  }
  @media (max-width: 526px) {
    width: 300px;
  }
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 20px;
  transition: box-shadow 83ms;
  position: relative;
  box-shadow: 1px 1px 3px black;
  @media (max-width: 526px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 32px 0;
  @media (max-width: 840px) {
    padding: 24px 0;
  }
  @media (max-width: 526px) {
    padding: 12px;
  }
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 8px;
  word-wrap: break-word;
  word-break: break-word;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  @media (max-width: 526px) {
    display: flex;
    flex-direction: row;
    padding: 0 8px;
  }
`;

const Item = styled.div`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 1.1rem;
  display: block;
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(230, 208, 13);
    img {
      height: 20px;
      margin-right: 4px;
    }
  }

  @media (max-width: 526px) {
    display: flex;
    flex-direction: row;
    padding: 12px;
  }
`;


export default UserGrid;