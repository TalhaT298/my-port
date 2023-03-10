import React from 'react'
import { MdLocalPhone, MdLocalPostOffice, MdLocationOn } from 'react-icons/md'
import img from '../../../assets/images/image.png'
import SocialLinks2 from '../../../components/SocialLinks2'
const SideBar = () => {
    return (
        <div data-aos="fade-right" className='bg-neutral rounded-lg p-6 flex flex-col items-center shadow-lg overflow-hidden'>
            <img src={img} alt="talha tarique" className='lg:scale-125 scale-110' />
            <h2 className='lg:text-4xl text-3xl font-bold mb-3'>Talha Tarique</h2>
            <div>
                <p className='flex items-center gap-1 my-1 text-success justify-center'><MdLocationOn />Saidpur, Bangladesh</p>
                <p className='flex items-center gap-1 my-1 text-success justify-center'><MdLocalPhone />+8801785030648</p>
                <p className='flex items-center gap-1 my-1 text-success justify-center'><MdLocalPostOffice />mdtalha2008@gmail.com</p>
            </div>
            <div className='text-2xl flex items-center gap-6 mt-5'>
                <SocialLinks2/>
            </div>
        </div>
    )
}

export default SideBar