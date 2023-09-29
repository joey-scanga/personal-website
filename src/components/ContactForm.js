'use client'
import styles from '@/app/page.module.css'
import { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    })

    const [formSuccess, setFormSuccesss] = useState(false)

    const handleInput = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value

        setFormData((prevState) => ({
            ...prevState, 
            [fieldName]: fieldValue
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const formURL = e.target.action
        const data = new FormData()

        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value)
        })

        fetch(formURL, {
            method: "POST",
            body: data,
            headers: {
              'accept': 'application/json',
            },
          }).then(() => {
            setFormData({ 
              name: "", 
              email: "", 
              company: "",
              message: "" 
            })
        })

        setFormSuccesss(true)
    }

    return (
        <div className='contact-box'>
        {formSuccess ?
            <h2>Form submitted </h2> 
            :
            <form method='POST' action='/api/post-contact-form' onSubmit={onSubmit}>
                <label htmlFor='name'>Name:{'\n'}</label>
                <input type='text' id='name' name='name' onChange={handleInput}required/>
                <label htmlFor='email'>Email:{'\n'}</label>
                <input type='text' id='email' name='email' onChange={handleInput} required/>
                <label htmlFor='company'>Company (optional):{'\n'}</label>
                <input type='text' id='company' name='company' onChange={handleInput}/>
                <label htmlFor='message'>Message: {'\n'}</label>
                <textarea  id='message' name='message' placeholder='Write something...' onChange={handleInput} required/>
                <input className={styles.submitbtn} type='submit' value='Submit' />
            </form>
        }
        </div>
    )
}
