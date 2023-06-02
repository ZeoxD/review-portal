import { useCollectionUsersDataId } from '../../hooks/useCollectionUsersDataId'
import { useParams, useNavigate } from 'react-router-dom'
import { useCollectionPropId } from '../../hooks/useCollectionPropId'
import { useState, useEffect } from 'react'
import { useFirestorebyId } from '../../hooks/useFirestorebyId'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles & images
import styled from "styled-components";

//pages & components
import Avatar from '../../components/Avatar'
import ProfileData from './ProfileData'
import AchievementList from '../dashboard/AchievementList'
import ReviewList from './ReviewList'

const Visit = () => {

    const { id } = useParams()
    const { pidDocuments, pidError } = useCollectionPropId('users', id)
    const { udiDocuments, udiError } = useCollectionUsersDataId('achievements', id)
    const [comments, setComments] = useState(false)
    const [reviews, setReviews] = useState('')
    const { addIdDocument, response } = useFirestorebyId('reviews', id)
    const { user } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        if(user.uid == id) {
            navigate("/")
        }
    }, [])

    const handleComments = (val) => {
        setComments(val)
      }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const revs = {
            name: user.displayName,
            photoURL: user.photoURL,
            reviews
        }
        await addIdDocument(revs) 
        setReviews('')
    }


    return (
        <Container>
            <ContentProfile>
                <div className="user-card">
                    <div className="user-info">
                        <Avatar src = {pidDocuments ? pidDocuments.photoURL: "User"}/>
                        <div className="row-value score-card">
                            <img src="/images/item-icon.svg" alt=""/>
                            <h4> {pidDocuments ? isNaN(pidDocuments.score) ? 500 : pidDocuments.score : 500} </h4>
                        </div>
                    </div>
                    <div className="user-details">
                        <p className="paragraph-style border-style">{pidDocuments ? pidDocuments.displayName : "User"}</p>
                        <ProfileData id={id}/>
                    </div>
                </div>
            </ContentProfile>
            <Content>
                <h1>Achievements</h1>
            </Content>
            <ContentArea>
                {pidError && <p className="error">{pidError}</p>}
                {udiDocuments && <AchievementList achievements={udiDocuments}/>}
            </ContentArea>
            <ContentArea>
                <div className="display-center">
                    <button className="button-style" onClick={() => handleComments(true)}>View Reviews</button>
                </div>
                <div>
                    {comments && <ReviewList handleComments={handleComments} id={id}>
                    <form onSubmit={handleSubmit} className="border-style padding-12 margin-12">
                        <label>
                            <span>Write a Review:</span>
                            <textarea required type="text" onChange={(e) => setReviews(e.target.value)} value={reviews}></textarea>
                            <button className="btn margin-t12">Add Review</button>
                        </label>
                    </form>
                    </ReviewList>}
                </div>
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
  padding: 24px 24px 24px 24px;
`

export default Visit;