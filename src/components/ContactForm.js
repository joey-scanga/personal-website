'use client'
import { useEffect, useState } from 'react'
import styles from '@/app/page.module.css'
import { submitContactFormAction } from '@/actions/submitContactForm'

export default function ContactForm(props) {

  const [formObj, setFormObj] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  }) 

  const [submitted, setSubmitted] = useState(false)

  const handleInput = (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    setFormObj((prev) => ({
      ...prev,
      [fieldName]: fieldValue 
    }));
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (formObj.name !== "" && formObj.email !== "" & formObj.message !== "") {
      await submitContactFormAction(formObj)
      setSubmitted(true)
    }
  }


  return (
    <>
    {!submitted ? (
        <form>
          <label htmlFor="name">Name:{"\n"}</label>
          <input type="text" id="name" name="name" onChange={handleInput} required />
          <label htmlFor="email">Email:{"\n"}</label>
          <input type="email" id="email" name="email"onChange={handleInput} required />
          <label htmlFor="company">Company (optional):{"\n"}</label>
          <input type="text" id="company" name="company"onChange={handleInput} />
          <label htmlFor="message">Message: {"\n"}</label>
          <textarea
              id="message"
              name="message"
              placeholder="Write something..."
              onChange={handleInput}
              required
          />
          <div></div> {/*Empty div for layout purposes*/}
          <button id="submit" className={styles.submitbtn} onClick={onSubmit}>
              Submit
          </button>
        </form>
    ) : (<p>Form submitted!</p>)
    }  
    </>
  )
}
