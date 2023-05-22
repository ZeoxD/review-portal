import { useState } from 'react'

//styles
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('') 
    const [thumbnail, setThumbnail] = useState(null)
    const [thumbailError, setThumbnailError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password, displayName, thumbnail)
    }

    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0]
        console.log(selected)

        if(!selected) {
            setThumbnailError('Please select a file')
            return
        }
        if(!selected.type.includes('image')) {
            setThumbnailError('Selected file must be an image') 
            return
        }
        if(selected.size > 100000) {
            setThumbnailError('Image must be smaller than 100kb')
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
            <button className="btn">Sign up</button>
        </form>
    )
}

export default Login;