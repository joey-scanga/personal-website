'use client'
import Image from "next/image";
import styles from "./page.module.css";
import ProjectPanel from "@/components/ProjectPanel";
import SocialLink from "@/components/SocialLink";
import Footer from "@/components/Footer";
import projects from "./projects.json";
import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
import { useEffect } from "react";
import useMousePosition from "@/hooks/useMousePosition";
import MouseShadow from "@/components/MouseShadow";

export default function Home() {
  const [mouseRef, mousePosition] = useMousePosition()

  return (
    <div ref={mouseRef} style={{position: "relative"}}>
      <MouseShadow mousePosition={mousePosition} />
      <NavBar />
      <header className={styles.header}>
        <h1 className="fade-in">Hi, I&apos;m Joey Scanga!</h1>
        <h2 className="fade-in">A fullstack web developer</h2>
        {/* <section className={`${styles.socialsection} fade-in`}>
          <Image
            className={styles.profilepic}
            src="/linkedin-pic.jpg"
            alt="joey scanga"
            width={200}
            height={200}
          />
        </section> */}
      </header>

      <main>
        <section className={styles.projectsection}>
          <h1 className="projectheader">Projects</h1>
          <div className={styles.cardcontainer}>
            {projects["projects"].map((project, idx) => (
              <ProjectPanel
                key={idx}
                name={project.name}
                desc={project.desc}
                imgname={project.imgpath}
                projectlink={project.projectlink}
              />
            ))}
          </div>
        </section>

        <section className={styles.contactsection}>
          <h1>Contact Me</h1>
          <ContactForm />
        </section>

        <Footer />
      </main>
    </div>
  );
}
