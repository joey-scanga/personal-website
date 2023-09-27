import Image from 'next/image'
import styles from './page.module.css'
import ProjectPanel from '@/components/ProjectPanel'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>Hi, I'm Joey Scanga!</h1>
        <h2>An aspiring fullstack web developer</h2>
        <img
        className={styles.profilepic}
        src='/linkedin-pic.jpg'></img>
      </header>

      <main>
        <section className={styles.projectsection}>
          <h1>Projects</h1>
          <ProjectPanel />
          <ProjectPanel />
          <ProjectPanel />
        </section>

        <section className={styles.contactsection}>
          <h1>Contact Me</h1>
          <div className='contact-box'>
            <form>
              <label htmlFor='name'>Name:{'\n'}</label>
              <input type='text' id='name' name='name' required/>
              <label htmlFor='company'>Company (optional):{'\n'}</label>
              <input type='text' id='company' name='company'/>
              <label htmlFor='message'>Message: {'\n'}</label>
              <input type='text' id='name' name='name' required/>
              <input type='submit' value='Submit' />
            </form>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <p>Built/maintained by Joey Scanga, 2023. All rights reserved.</p>
      </footer>
    </>
  )
}
