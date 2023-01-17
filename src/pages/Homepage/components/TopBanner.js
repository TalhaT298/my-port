import React, { useEffect, useState } from 'react'
import profile from '../../../assets/images/talha.jpeg'
import TextTransition, { presets } from "react-text-transition";
import { Link } from 'react-router-dom';
import SocialLinks2 from '../../../components/SocialLinks2';
import moment from 'moment';


const TopBanner = () => {
    const [index, setIndex] = useState(0);
    const texts = [
        "Frontend Web Developer",
        "Programmer",
        "Problem Solver"
    ];
    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <div className="w-full flex flex-col md:flex-row-reverse items-start lg:items-center md:items-center lg:flex-row-reverse justify-between lg:mt-40">
            <figure className='lg:w-1/2 md:w-1/2 w-full flex justify-center items-center mb-8' data-aos="fade-left"><img src={profile} alt='banner' className="lg:h-[450px] md:h-[400px] h-[350px] object-cover rounded-xl" /></figure>
            <div className='lg:w-1/2 md:w-1/2 flex lg:flex-row md:flex-row flex-col-reverse justify-start lg:items-center gap-10' data-aos="fade-right">
                <div className='text-2xl lg:flex md:flex gap-6 lg:flex-col md:flex-col hidden'>
                    <SocialLinks2 />
                </div>
                <div className='w-min-full'>
                    <p className="lg:text-2xl mb-2">This is Talha Tarique</p>
                    <h1 className="lg:text-5xl md:text-[30px] text-3xl font-bold flex">&nbsp;
                        <TextTransition className="text-success" springConfig={presets.wobbly}>
                            {texts[index % texts.length]}
                        </TextTransition>
                    </h1>
                    <h1 className="lg:text-5xl md:text-[30px] text-3xl font-bold flex content-center"> </h1>
                    <a href='https://drive.google.com/file/d/1fhEtkWJsWU6lLPDyvUo4zp_VMnMqbbBJ/view?usp=share_link' target="_blank" rel="noreferrer">
                        <button className="btn btn-primary btn-sm mt-8 rounded normal-case text-white">Hire Me</button>
                    </a>
                    <Link to='/contact'><button className="btn btn-primary btn-sm mt-8 rounded normal-case btn-outline ml-4">Contact Me</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TopBanner