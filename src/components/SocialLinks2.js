import React from 'react'
import { MdFacebook } from 'react-icons/md'
import { IoLogoLinkedin, IoLogoGithub ,IoLogoInstagram,IoLogoTwitter } from 'react-icons/io'
const SocialLinks2 = () => {
    return (
        <>
            <a target='_blank' rel="noreferrer" href='https://www.facebook.com/talha.tarique.5'><MdFacebook className='text-[#1778f2] hover:scale-125 transition duration-300' /></a>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/talha-tarique/'><IoLogoLinkedin className='text-[#0072b1] text-[26px] hover:scale-125 transition duration-300' /></a>
            <a target='_blank' rel="noreferrer" href='https://www.instagram.com/talha_tarique77/'><IoLogoInstagram className='text-[#0072b1] text-[26px] hover:scale-125 transition duration-300' /></a>
            <a target='_blank' rel="noreferrer" href='https://twitter.com/TalhaTarique1'><IoLogoTwitter className='text-[#0072b1] text-[26px] hover:scale-125 transition duration-300' /></a>
            <a target='_blank' rel="noreferrer" href='https://github.com/TalhaT298'><IoLogoGithub className=' hover:scale-125 transition duration-300'/></a>
        </>
    )
}

export default SocialLinks2