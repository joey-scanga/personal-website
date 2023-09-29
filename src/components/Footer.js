import React from 'react'
import styles from '@/app/page.module.css'
import SocialLink from './SocialLink'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <SocialLink 
      name='linkedin'
      link='https://www.linkedin.com/in/joey-scanga'
      imglink='/linkedin.png'
      />
      <p>Built/maintained by Joey Scanga, 2023. Built in Next.js 13. All rights reserved.</p>

      <SocialLink
      name='github'
      link='https://www.github.com/joey-scanga'
      imglink='/white-gh.png'
      width={70}
      height={70}/>
    </footer>
  )
}
