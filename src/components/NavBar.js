'use client'
import { useRef } from 'react'

export default function NavBar() {
  const navRef = useRef()
  const headerRef = useRef()
  const closeBtnRef = useRef()

  const toggleNav = () => {
    navRef.current.classList.toggle("responsive-nav")
    headerRef.current.classList.toggle("responsive-header")
    closeBtnRef.current.classList.toggle("responsive-close-btn")
  }

  return (
    <header ref={headerRef} className='nav-header'>
      <nav ref={navRef}>
        <a href="https://docs.google.com/document/d/e/2PACX-1vSMjknHtTbxJJ58alTb4jacZhk6AT9c1BTq6ml5p8C-sBPORQOFwK8R1_z-patV03Y8FbYPzOywwOHo/pub">
          CV
        </a>
        <a href="https://www.github.com/joey-scanga">Github</a>
        <a href="https://www.linkedin.com/in/joey-scanga">LinkedIn</a>
        <button ref={closeBtnRef} className='close-btn' onClick={toggleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </nav>
      <button className='hamb-btn' onClick={toggleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
      </button>
    </header>
  )
}
