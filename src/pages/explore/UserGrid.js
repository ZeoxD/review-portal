// styles & images
import styled from "styled-components";
import './UserGrid.css'

// pages & components
import Avatar from '../../components/Avatar'

const UserGrid = (props) => {

  const {name, imgSrc, onlineStatus, score } = props
  console.log(props)

  return (
    <Container>
      <ArtCard>
        <UserInfo>
            <Avatar src={imgSrc}/>
        </UserInfo>
        <UserName className={onlineStatus}>
          <Link to={`/visit/${'id'}`}>{name}</Link>
        </UserName>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt=""/>
            <h4>{score}</h4>
          </span>
        </Item>
      </ArtCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: ;
  width: 250px;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 20px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 1px 1px 3px black;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 36px 0;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;
  word-wrap: break-word;
  word-break: break-word;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
  svg {
    color: rgba(0, 0, 0, 1);
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
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;


export default UserGrid;