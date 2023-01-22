import React from 'react';
//import {useLocation} from 'react-router-dom';

const Footer = () => {
    //const location = useLocation();
    return (
        <div id="footer" className="flex flex-col md:flex-row w-full p-7 bg-zinc-900 md:justify-start">
            <p className="text-white text-3xl  text-center md:self-center">Bootup'23</p>
            <div id="footer-items" className="flex flex-col my-4 gap-y-6 md:flex-row md:justify-evenly md:w-full">
                <div className="footer-item-links">
                    <p className="text-white font-semibold  justify-center text-2xl  tracking-widest text-2xl">Links</p>
                    <div className='h-1 w-14 bg-blue-400 mb-5'></div>
                    <p className="text-white text-white text-lg"><a href="/">Home</a></p>
                    <p className="text-white text-lg"><a href="/">Contact Us</a></p>
                    <p className="text-white text-lg"><a href="/">Organizers</a></p>
                </div>
                <div className="footer-item-events">
                    <p className="text-white font-semibold  justify-center text-2xl  tracking-widest text-2xl">Events</p>
                    <div className='h-1 w-14 bg-blue-400 mb-5'></div>
                    <p className="text-white text-lg"><a href="/#events-technical">Techincal Events</a></p>
                    <p className="text-white text-lg"><a href="/#events-non-technical">Non-Techincal Events</a></p>
                </div>
                <div className="footer-item-contacts">
                    <p className="text-white font-semibold  justify-center text-2xl  tracking-widest text-2xl">Contacts</p>
                    <div className='h-1 w-14 bg-blue-400 mb-5'></div>
                    <p className="text-white text-lg"><a href="mailto:bootup23@rajalakshmi.edu.in">bootup23@rajalakshmi.edu.in</a></p>
                    <p className="text-white text-lg">+91 9876543210</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;