import React from 'react'
import { BsInstagram,BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
      <a href='https://github.com/Neilketchum' target='_blank'><BsGithub /> </a>
      </div>
      <div>
      <a href='https://www.linkedin.com/in/daipayan-hati/' target='_blank'> <BsLinkedin/></a>
      </div>
      <div>
      <a href='https://www.instagram.com/neilketchum/' target='_blank'> <BsInstagram/> </a>
      </div>


    </div>
  )
}

export default SocialMedia