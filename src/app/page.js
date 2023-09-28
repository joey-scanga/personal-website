import Image from 'next/image'
import styles from './page.module.css'
import ProjectPanel from '@/components/ProjectPanel'
import SocialLink from '@/components/SocialLink'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1 className='fade-in'>Hi, I'm Joey Scanga!</h1>
        <h2 className='fade-in'>An aspiring fullstack web developer</h2>
        <section className={`${styles.socialsection} fade-in`}>
          <SocialLink 
          name='linkedin'
          link='https://www.linkedin.com/in/joey-scanga'
          imglink='/linkedin.png'
          />
          <Image
          className={styles.profilepic}
          src='/linkedin-pic.jpg'
          alt='joey scanga'
          width={200}
          height={200}
          />
          <SocialLink
          name='github'
          link='https://www.github.com/joey-scanga'
          imglink='/white-gh.png'
          width={70}
          height={70}/>
        </section>
      </header>

      <main>
        <section className={styles.projectsection}>
          <h1 className='projectheader'>Projects</h1>
          <ProjectPanel 
          name='platformer'
          desc='A basic Python platformer'
          imgname='platformer.png'
          />
          <ProjectPanel />
          <ProjectPanel />
        </section>


        <section className={styles.contactsection}>
          <h1>Contact Me</h1>
          <div className='contact-box'>
            <form action='/api/post-contact-form'>
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

        <Footer />

      </main>

    </>
  )
}
