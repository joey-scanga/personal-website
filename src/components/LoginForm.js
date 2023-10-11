'use client'
import { useState } from 'react'

export default function LoginForm() {
    const url = "/api/login/"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onFormSubmit = async () => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            body: JSON.stringify({ email: email, password: password})
        })
    }

    return (
        <form>
            <label htmlFor='email'>Email: </label> 
            <input type='text' id='email' name='email' onChange={e => setEmail(e.target.value)}/><br/>
            <label htmlFor='password'>Password: </label> 
            <input type='password' id='password' name='password' onChange={e => setPassword(e.target.value)}/><br/>
            <button onClick={onFormSubmit}>Log In</button>
        </form>
    )
}
