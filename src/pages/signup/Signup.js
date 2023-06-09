import React from 'react'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

//styles
import './Signup.css'

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('') 
    const [thumbnail, setThumbnail] = useState(null)
    const [thumbailError, setThumbnailError] = useState(null)
    const { signup, isPending, error } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName, thumbnail)
    }

    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0]

        if(!selected) {
            setThumbnailError('Please select a file')
            return
        }
        if(!selected.type.includes('image')) {
            setThumbnailError('Selected file must be an image') 
            return
        }
        if(selected.size > 150000) {
            setThumbnailError('Image must be smaller than 150kb')
            return
        }
        setThumbnailError(null)
        setThumbnail(selected)
        console.log('thumbnail updated')

    }

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h1>Sign up</h1>
            <label>
                <span>Email: </span>
                <input required type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <span>Password: </span>
                <input required type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </label>
            <label>
                <span>Display Name: </span>
                <input required type="text" onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
            </label>
            <label>
                <span>Profile Thumbail: </span>
                <input
                    required type="file" 
                    onChange={handleFileChange}
                />
                {thumbailError && <div className="error">{thumbailError}</div>}
            </label>
            {!isPending && <button className="btn">Sign up</button>}
            {isPending && <button className="btn" disabled>loading...</button>}
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup;