import React from 'react'
import { GrFacebookOption, GrGithub, GrLinkedinOption,GrInstagram,GrTwitter } from 'react-icons/gr'
const SocialLinks = () => {
    return (
        <div className='flex gap-3 text-white mx-8'>
            <a target='_blank' rel="noreferrer" href='https://www.facebook.com/talha.tarique.5' className='border-[1px] p-[5px] rounded-full hover:bg-[#444] transition duration-300'><GrFacebookOption /></a>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/talha-tarique/' className='border-[1px] p-[5px] rounded-full hover:bg-[#444] transition duration-300'><GrLinkedinOption /></a>
            <a target='_blank' rel="noreferrer" href='https://www.instagram.com/talha_tarique77/' className='border-[1px] p-[5px] rounded-full hover:bg-[#444] transition duration-300'><GrInstagram /></a>
           
            <a target='_blank' rel="noreferrer" href='https://github.com/TalhaT298' className='text-[28px] hover:text-base-content transition duration-300'><GrGithub /></a>
        </div>
    )
}

export default SocialLinks