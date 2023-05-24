import { useAuthContext } from '../../hooks/useAuthContext'
import { useState } from 'react'

// styles & images
import styled from "styled-components";
import './Dashboard.css'

//pages & components
import Create from './Create'
import Avatar from '../../components/Avatar'

const Dashboard = (props) => {

  const { user } = useAuthContext()
  const [add, setAdd] = useState(false)

  return (
    <Container>
      <ContentProfile>
        <div className="user-card">
          <div className="user-info">
            <Avatar src = {user.photoURL}/>
            <p>{user.displayName}</p>
          </div>
          <div className="user-details">
            <div className="row-value">
              <p>{user.displayName}</p> <p>{user.displayName}</p> <p>{user.displayName}</p>
              <p>{user.displayName}</p> <p>{user.displayName}</p> <p>{user.displayName}</p>
            </div>
            <div className="row-value">
              <p>{user.displayName}</p> <p>{user.displayName}</p> <p>{user.displayName}</p>
              <p>{user.displayName}</p> <p>{user.displayName}</p> <p>{user.displayName}</p>
            </div>
            <div className="row-value">
              <p>{user.displayName}</p> <p>{user.displayName}</p> <p>{user.displayName}</p>
              <p>{user.displayName}</p> <p>{user.displayName}</p> <p>{user.displayName}</p>
            </div>
            <div className="row-value">
              <p>{user.displayName}</p> <p>{user.displayName}</p> <p>{user.displayName}</p>
              <p>{user.displayName}</p> <p>{user.displayName}</p> <p>{user.displayName}</p>
            </div>
          </div>
        </div>
      </ContentProfile>
      <Content>
        <h1>Achievements</h1>
        { !add && <button className="btn" onClick={(e) => setAdd(true)}>Add</button> }
        { add && <button className="btn" onClick={(e) => setAdd(false)}>Close</button> }
      </Content>
      <ContentArea>
        { add && <Create />}
      </ContentArea>

    </Container>
  );
};

const Container = styled.div`
  padding-top: 48px; 
  max-width: 100vw;
  margin-bottom: 20px;
`

const ContentProfile = styled.div`
  max-width: 1128px;
  margin: 10px auto;
  border: 2px solid black;
  border-radius: 20px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1128px;
  margin: 10px auto;
  border-radius: 5px;
`

const ContentArea = styled.div`
  max-width: 1128px;
  margin: 10px auto;
  border-radius: 5px;
`

export default Dashboard;