import { useState } from 'react'
import { useFirestorebyId } from '../../hooks/useFirestorebyId'
import { useUpdateScore } from '../../hooks/useUpdateScore'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles & images
import './ProfileDetails.css'

function ProfileDetails({changeCancel}) {

    const { user } = useAuthContext()
    const { addIdDocument } = useFirestorebyId('profile', user.uid)
    const { score } = useUpdateScore()

    // form field hooks
    const [title, setTitle] = useState('')
    const [education, setEducation] = useState('')
    const [location, setLocation] = useState('')

    const handleClose = (e) => {
        e.preventDefault()
        changeCancel(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const profile = {
            title,
            education,
            location
        }
        await addIdDocument(profile)
        await score()
        changeCancel(false)
    }

    return (
        <div className="content-backdrop">
            <div className="content-modal">
                <div className="create-form">
                    <div className="form-header">
                        <h2 className="page-title">Update User Info</h2>
                        <button className="btn" onClick={handleClose}>Close</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Title:</span>
                            <input required type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
                        </label>
                        <label>
                            <span>Education:</span>
                            <input required type="text" onChange={(e) => setEducation(e.target.value)} value={education}></input>
                        </label>
                        <label>
                            <span>Location:</span>
                            <input required type="text" onChange={(e) => setLocation(e.target.value)} value={location}></input>
                        </label>

                        <button className="btn">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails