import OrganizerCard from "../components/OrganizerCard/OrganizerCard";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom'
import { motion } from "framer-motion";
import { useEffect } from 'react'
import "./light.css";
import ParticlesBackground from "../components/ParticlesBackground";
const Promotions = () => {
    const { state } = useLocation()
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
            <div class="light flex justify-center text-5xl mb-3" data-text="Co-Ordinators">
                <h1>Co-Ordinators</h1>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-10 my-10">
                {Coordinators.map((e, index) => {
                    return <OrganizerCard event={e.event} image={e.image} index={index} name={e.name} key={index + e.name} />
                })}
            </div>
            <div class="light flex justify-center text-5xl mb-3" data-text="Promotion Team">
                <h1>Promotion Team</h1>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-10 my-10">
                {Coordinators.map((e, index) => {
                    return <OrganizerCard event={e.event} image={e.image} index={index} name={e.name} key={index + e.name} />
                })}
            </div>
            <Footer />
            </motion.div>
                
        </div>

        

    );
};

export default Promotions;
