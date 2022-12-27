import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';

const ContactMeForm = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ewgins2', 'template_7zp3mmm', form.current, 'ixsG2X1UrjiQMzmAT')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                toast.success("Sent successfully")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div data-aos="fade-up" className='bg-neutral rounded-lg p-6 shadow-lg'>
            <h2 className='mb-6 text-xl font-bold'> Message Me</h2>
            
            <form ref={form} onSubmit={sendEmail}>
                <input name="user_name" type="text" placeholder="Name" className="input input-bordered w-full my-2 focus:outline-none focus:border-primary" required/>
                <input name="user_email" type="email" placeholder="Email" className="input input-bordered w-full my-2 focus:outline-none focus:border-primary" required/>
                <textarea name="message" className="textarea textarea-bordered w-full mt-4 h-64 focus:outline-none focus:border-primary" placeholder="Your Message" required></textarea>

                <input type="submit" value="Send" className="btn btn-info text-white rounded-md mt-4 px-8" />
            </form>
        </div>
    )
}

export default ContactMeForm