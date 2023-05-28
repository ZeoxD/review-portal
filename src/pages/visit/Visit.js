import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCollectionUsersData } from '../../hooks/useCollectionUsersData'
import { useCollectionId } from '../../hooks/useCollectionId'

import { useParams } from 'react-router-dom'
import { useCollectionPropId } from '../../hooks/useCollectionPropId'

// styles & images
import styled from "styled-components";

//pages & components
import Avatar from '../../components/Avatar'
//import ProfileDetails from './ProfileDetails'
//import Profile from './Profile'
//import AchievementList from './AchievementList'

const Visit = () => {

    const { id } = useParams()
    const { pidDocuments, pidError } = useCollectionPropId('users', id)
    const navigate = useNavigate()
    const [add, setAdd] = useState(false)
    const [cancel, setCancel] = useState(false)

    const handleAdd = (e) => {
        e.preventDefault() 
        setAdd(true)
    }

    const handleCancel = (val) => {
        setCancel(val)
    }

    return (
        <Container>
        <ContentProfile>
            <div className="user-card">
            <div className="user-info">
                <Avatar src = {'user.photoURL'}/>
                <div className="row-value score-card">
                <img src="/images/item-icon.svg" alt=""/>
                <h4> {pidDocuments ? isNaN(pidDocuments.score) ? 500 : pidDocuments.score : 500} </h4>
                </div>
            </div>
            <div className="user-details">
                <p className="paragraph-style border-style">{'user.displayName'}</p>
                {/*<Profile changeCancel={handleCancel} back={cancel}/>*/}
            </div>
            </div>
            <div>
                {/*cancel && <ProfileDetails changeCancel={handleCancel}/>*/}
            </div>
        </ContentProfile>
        <Content>
            <h1>Achievements</h1>
            <button className="btn" onClick={handleAdd}>Add achievements</button>
        </Content>
        <ContentArea>
            {pidError && <p className="error">{pidError}</p>}
            {/*udDocuments && <AchievementList achievements={udDocuments}/>*/}
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
  padding: 24px 24px 4px 24px;
`

export default Visit;