import React from 'react'
import Image from 'next/image'
import styles from '@/app/page.module.css'

export default function ProjectPanel(props) {
  return (
    <a href={props.projectlink}>
      <div className={styles.projectpanel}>
        <img
        className={styles.projectpic}
        src={`/projectscreenshots/${props.imgname}`}
        alt={props.imgname}
        ></img>
        <div className={styles.projectdesc}>
          <h2 className={styles.projectdesch2}>{props.name}</h2> 
          <p>{props.desc}</p>
        </div> 
      </div>
    </a>
  )
}
