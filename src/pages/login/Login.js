import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

//styles
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, isPending, error } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }
 
    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label>
                <span>Email: </span>
                <input required type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <span>Password: </span>
                <input required type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </label>
            {!isPending && <button className="btn">Login</button>}
            {isPending && <button className="btn" disabled>loading...</button>}
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login;