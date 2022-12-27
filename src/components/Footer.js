import React from 'react'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'
import {FaHome} from 'react-icons/fa'
import {ImBlog} from 'react-icons/im'
import {MdPermContactCalendar} from 'react-icons/md'
import {RxResume} from 'react-icons/rx'


const Footer = () => {
    return (
        <div className='bg-secondary mt-20'>
            <footer className="footer footer-center p-10 text-base-content rounded max-w-[1250px] mx-auto">
                <div className="grid grid-flow-col gap-4">
                    <Link to='/' className="link link-hover"><FaHome size='2rem' color='white'></FaHome></Link>
                    <Link to='/blogs' className="link link-hover"><ImBlog size='2rem' color='white'></ImBlog></Link>
                    <Link to='/contact' className="link link-hover"><MdPermContactCalendar size='2rem' color='white'></MdPermContactCalendar></Link>
                    <Link to='/resume' className="link link-hover"><RxResume size='2rem' color='white'></RxResume></Link>
                </div>
                <div>
                    <SocialLinks/>
                </div>
                <div>
                    <p>Copyright ©2022 All right reserved by Talha Tarique</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer