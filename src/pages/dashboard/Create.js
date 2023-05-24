import { useState } from 'react'
import { timestamp } from '../../firebase/config'
import { useFirestore } from '../../hooks/useFirestore'

//styles
import './Create.css'

function Create() {

    const { addDocument, response } = useFirestore('achievements')

    // form field hooks
    const [title, setTitle] = useState('')
    const [oname, setOname] = useState('')
    const [location, setLocation] = useState('')
    const [sdate, setSdate] = useState('')
    const [edate, setEdate] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const achievements = {
            title,
            oname,
            location, 
            setDate: timestamp.fromDate(new Date(sdate)),
            endDate: timestamp.fromDate(new Date(edate)),
            description
        }

        await addDocument(achievements)
    }

    return (
        <div className="create-form">
            <h2 className="page-title">Add your Achievements</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Title:</span>
                    <input required type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
                </label>
                <label>
                    <span>Organization Name:</span>
                    <input required type="text" onChange={(e) => setOname(e.target.value)} value={oname}></input>
                </label>
                <label>
                    <span>Location:</span>
                    <input required type="text" onChange={(e) => setLocation(e.target.value)} value={location}></input>
                </label>
                <label>
                    <span>Start Date:</span>
                    <input required type="date" onChange={(e) => setSdate(e.target.value)} value={sdate}></input>
                </label>
                <label>
                    <span>End Date:</span>
                    <input required type="date" onChange={(e) => setEdate(e.target.value)} value={edate}></input>
                </label>
                <label>
                    <span>Description:</span>
                    <textarea required type="text" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                </label>

                <button className="btn">Add Achievement</button>
            </form>
        </div>
    )
}

export default Create