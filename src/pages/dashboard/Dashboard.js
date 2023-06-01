import { useAuthContext } from '../../hooks/useAuthContext'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCollectionUsersData } from '../../hooks/useCollectionUsersData'
import { useCollectionId } from '../../hooks/useCollectionId'

// styles & images
import styled from "styled-components";
import './Dashboard.css'

//pages & components
import Avatar from '../../components/Avatar'
import ProfileDetails from './ProfileDetails'
import Profile from './Profile'
import AchievementList from './AchievementList'
import CommentsList from './CommentsList'

const Dashboard = () => {

  const { idDocuments } = useCollectionId('users')
  const { udDocuments, udError } = useCollectionUsersData('achievements')
  const navigate = useNavigate()
  const { user } = useAuthContext()
  const [add, setAdd] = useState(false)
  const [cancel, setCancel] = useState(false)
  const [comments, setComments] = useState(false)

  useEffect(() => {
    if (add) {
      navigate("/achievements")
    }
  }, [add])

  const handleAdd = (e) => {
    e.preventDefault() 
    setAdd(true)
  }

  const handleCancel = (val) => {
    setCancel(val)
  }

  const handleComments = (val) => {
    setComments(val)
  }

  return (
    <Container>
      <ContentProfile>
        <div className="user-card">
          <div className="user-info">
            <Avatar src = {user.photoURL}/>
            <div className="row-value score-card">
              <img src="/images/item-icon.svg" alt=""/>
              <h4> {idDocuments ? isNaN(idDocuments.score) ? 500 : idDocuments.score : 500} </h4>
            </div>
          </div>
          <div className="user-details">
            <p className="paragraph-style border-style">{user.displayName}</p>
            <Profile changeCancel={handleCancel} back={cancel}/>
          </div>
        </div>
        <div>
            {cancel && <ProfileDetails changeCancel={handleCancel}/>}
        </div>
      </ContentProfile>
      <Content>
        <h1>Achievements</h1>
        <button className="btn" onClick={handleAdd}>Add achievements</button>
      </Content>
      <ContentArea>
        {udError && <p className="error">{udError}</p>}
        {udDocuments && <AchievementList achievements={udDocuments}/>}
      </ContentArea>
      <ContentArea>
        <div className="display-center">
          <button className="button-style" onClick={() => handleComments(true)}>View Reviews</button>
        </div>
        <div>
          {comments && <CommentsList handleComments={handleComments} />}
        </div>
      </ContentArea>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 48px; 
  max-width: 100vw;
  margin-bottom: 72px;
`

const ContentProfile = styled.div`
  max-width: 1128px;
  margin: 10px auto;
  border: 1px solid #dfdfec;
  box-shadow: 1px 1px 3px #dfdfec;
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
  border: 1px solid #dfdfec;
  box-shadow: 1px 1px 3px #dfdfec;
  border-radius: 20px;
  background-color: white;
  padding: 24px 24px 24px 24px;
`

export default Dashboard;