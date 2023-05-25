import { useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import { useUpdateScore } from '../../hooks/useUpdateScore'

function ProfileDetails({changeCancel}) {

    const { addDocument } = useFirestore('profile')
    const { score } = useUpdateScore()

    // form field hooks
    const [title, setTitle] = useState('')
    const [education, setEducation] = useState('')
    const [location, setLocation] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const profile = {
            title,
            education,
            location
        }
        await addDocument(profile)
        await score()
        changeCancel(false)
    }

    return (
        <div className="content-div">
            <div className="create-form">
                <div className="form-header">
                    <h2 className="page-title">Update User Info</h2>
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
    )
}

export default ProfileDetails