import Image from 'next/image'

export default function SocialLink(props) {
  return (
    <a className='sociallinkimgcontainer' href={props.link}>
        <Image 
        className='sociallinkimg'
        width={props.width || 65}
        height={props.width || 65}
        src={props.imglink}     
        alt={props.name}
        />
    </a>
  )
}
