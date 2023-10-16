/*DEPRECATED */
'use client'
import { login } from '@/actions/login'
import { useState } from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onFormSubmit = async () => {
        await login(email, password) 
    }

    return (
        <form>
            <label htmlFor='email'>Email: </label> 
            <input type='text' id='email' name='email' onChange={e => setEmail(e.target.value)}/>
            <label htmlFor='password'>Password: </label> 
            <input type='password' id='password' name='password' onChange={e => setPassword(e.target.value)}/>
            <button onClick={onFormSubmit}>Log In</button>
        </form>
    )
}
