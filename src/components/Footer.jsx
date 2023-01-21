import React from 'react';
//import {useLocation} from 'react-router-dom';

const Footer = () => {
    //const location = useLocation();
    return (
        <div id="footer" className="flex flex-col w-full bg-zinc-900">
            <p className="text-white text-3xl my-10 text-center">Bootup 2023</p>
            <div id="footer-items" className="flex flex-row flex-wrap justify-around">
                <div className="footer-item-links">
                    <p className="text-white font-semibold  justify-center text-2xl  tracking-widest text-2xl">Links</p>
                    <div className='h-1 w-14 bg-blue-400 mb-5'></div>
                    <p className="text-white text-white text-lg"><a href="/">Home</a></p>
                    <p className="text-white text-lg"><a href="/">Contact Us</a></p>
                    <p className="text-white text-lg mb-7"><a href="/">Organizers</a></p>
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