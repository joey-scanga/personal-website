import React from 'react'
import Image from 'next/image'

export default function ProjectPanel(props) {
  return (
    <div className='projectpanel'>
      <Image 
      className='projectpic'
      src={`/projectscreenshots/${props.imgname}`}
      alt={props.imgname}
      width={600}
      height={400}
      />
      <div className='projectdesc'>
        <h2>{props.name}</h2> 
        <p>{props.desc}</p>
      </div> 
    </div>
  )
}
