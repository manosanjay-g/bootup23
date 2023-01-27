import FacultyCard from "../components/FacultyCard/FacultyCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect } from 'react'
import "./light.css";
import ParticlesBackground from "../components/ParticlesBackground";

const Promotions = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const Coordinators = [
        {
            name: "Surya V",
            event: "Silicon Valley",
            image: "",
        },
        {
            name: "Chinna Sakthi V",
            event: "Silicon Valley",
            image: "",
        },
        {
            name: "Jeevitha C",
            event: "The Revolution",
            image: "",
        },
        {
            name: "Jeevamutharasi S",
            event: "The Revolution",
            image: "",
        },
        {
            name: "Vijay A",
            event: "404 Not Found",
            image: "",
        },
        {
            name: "Zafar Sadik H D",
            event: "404 Not Found",
            image: "",
        },
        {
            name: "Akhila Vignesh",
            event: "iCatching",
            image: "",
        },
        {
            name: "Jayapriyaa RG",
            event: "iCatching",
            image: "",
        },
        {
            name: "Jeevana V",
            event: "Halt and Catch Fire",
            image: "",
        },
        {
            name: "Harish Kumar S",
            event: "Halt and Catch Fire",
            image: "",
        },
        {
            name: "Abuthahir A",
            event: "The Perfect Exploit",
            image: "",
        },
        {
            name: "Krithic Kumar U B",
            event: "The Perfect Exploit",
            image: "",
        },
        {
            name: "Rohit M",
            event: "The Office",
            image: "",
        },
        {
            name: "Sriviveknath S R",
            event: "The Office",
            image: "",
        },
        {
            name: "Abhijit PV",
            event: "Machine Impossible",
            image: "",
        },
        {
            name: "Charan V",
            event: "Machine Impossible",
            image: "",
        },
        {
            name: "Sriviveknath S R",
            event: "Ex Machina",
            image: "",
        },
        {
            name: "Sujan G",
            event: "Ex Machina",
            image: "",
        },
        {
            name: "Jagadeep N",
            event: "Fly High",
            image: "",
        },
        {
            name: "Varun Rishwandh S",
            event: "Fly High",
            image: "",
        },
    ];
    return (
        <div>

            <ParticlesBackground />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0 }}
                id="event-details" className="flex flex-col pt-7 bg-black bg-opacity-50">
                <div class="light flex justify-center text-4xl mb-3" data-text="COORDINATORS">
                    <h1>COORDINATORS</h1>
                </div>
                <div className="shadow-inner flex px-4 overflow-x-scroll gap-8 py-6 scroll scroll-smooth whitespace-nowrap snap-x lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:gap-10 ">
                    {Coordinators.map((e, index) => {
                        return <FacultyCard event={e.event} image={e.image} index={index} name={e.name} key={index + e.name} />
                    })}
                </div>
                <div class="light flex justify-center text-3xl mb-3" data-text="PROMOTIONS TEAM">
                    <h1>PROMOTIONS TEAM</h1>
                </div>
                <div className="shadow-inner flex px-4 overflow-x-scroll gap-8 py-6 scroll scroll-smooth whitespace-nowrap snap-x lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:gap-10">
                    {Coordinators.map((e, index) => {
                        return <FacultyCard event={e.event} image={e.image} index={index} name={e.name} key={index + e.name} />
                    })}
                </div>
                <Footer />
            </motion.div>

        </div>



    );
};

export default Promotions;
