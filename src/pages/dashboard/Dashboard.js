import { useAuthContext } from '../../hooks/useAuthContext'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCollection } from '../../hooks/useCollection'
import { useCollectionId } from '../../hooks/useCollectionId'

// styles & images
import styled from "styled-components";
import './Dashboard.css'

//pages & components
import Avatar from '../../components/Avatar'
import Publish from './Publish'
import Profile from './Profile'

const Dashboard = () => {

  const { idDocuments } = useCollectionId('users')
  const { documents, error } = useCollection('achievements')
  const navigate = useNavigate()
  const { user } = useAuthContext()
  const [add, setAdd] = useState(false)
  const [cancel, setCancel] = useState(false)

  useEffect(() => {
    if (add) {
      navigate("/achievements")
    }
  }, [add])

  const handleAdd = (e) => {
    e.preventDefault() 
    setAdd(true)
  }

  return (
    <Container>
      <ContentProfile>
        <div className="user-card">
          <div className="user-info">
            <Avatar src = {user.photoURL}/>
            <p>{user.displayName}</p>
          </div>
          <div className="user-details">
            <Profile />
            <div className="row-value">
              <img src="/images/item-icon.svg" alt=""/>
              <h4> {idDocuments ? isNaN(idDocuments.score) ? 500 : idDocuments.score : 500} </h4>
            </div>
            {!cancel && <button className="btn" onClick={(e) => setCancel(true)}>Edit</button>}
            {cancel && <button className="btn" onClick={(e) => setCancel(false)}>Cancel</button>}
          </div>
        </div>
        <div>
            {cancel && <Publish />}
        </div>
      </ContentProfile>
      <Content>
        <h1>Achievements</h1>
        <button className="btn" onClick={handleAdd}>Add achievements</button>
      </Content>
      <ContentArea>
        {error && <p className="error">{error}</p>}
        {documents && documents.map(doc => (
          <p key={doc.id}> {doc.title}</p>
        ))}
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
  border: 8px solid #ebebf3;
  border-radius: 20px;
  background-color: white;
  padding: 24px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1128px;
  margin: 10px auto;
  padding: 24px;
`

const ContentArea = styled.div`
  max-width: 1128px;
  margin: 10px auto;
  border-radius: 5px;
  border: 8px solid #ebebf3;
  border-radius: 20px;
  background-color: white;
  padding: 24px;
`

export default Dashboard;