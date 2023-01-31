import PromotionsCard from "../components/PromotionsCard/PromotionsCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect } from 'react'
import "./light.css";
import ParticlesBackground from "../components/ParticlesBackground";

const Promotions = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const promotionsTeam = [
        {
            name: "Mano Sanjay",
            team: "Website Team",
            image: "promotions/Website_ManoSanjay.jpg",
        },
        {
            name: "Keshav",
            team: "Website Team",
            image: "promotions/Website_keshav.jpg",
        },
        {
            name: "Subhash",
            team: "Website Team",
            image: "promotions/Website_SubhashB.jpg",
        },
        {
            name: "Suriya Prakash",
            team: "Website Team",
            image: "promotions/Website_SuriyaPrakash.jpg",
        },

        {
            name: "Muqaddam Aaqil Sheriff",
            team: "Social Media Team",
            image: "promotions/Socialmedia_Aaqil.jpeg",
        },
        {
            name: "Supriya",
            team: "Social Media Team",
            image: "promotions/socialmedia_supriya.jpeg",
        },
        {
            name: "Kamalakshi ",
            team: "Social Media Team",
            image: "promotions/SocialMedia_Kamalakshi.jpg",
        },

        {
            name: "Rohit Gangadhar ",
            team: "Video Team",
            image: "promotions/Rohith Gangadhar-min.JPG",
        },
        {
            name: "Rifhath Aslam ",
            team: "Video Team",
            image: "promotions/Rifhath.jpg",
        },
        {
            name: "Sai Nishit ",
            team: "Video Team",
            image: "promotions/Videoteam_R Sai Nishit.jpg",
        },
        {
            name: "Vijayakumar ",
            team: "Video Team",
            image: "promotions/Vijayakumar.jpeg",
        },
        {
            name: "Praveen",
            team: "Design Team",
            image: "promotions/Design_Praveen.jpg",
        },
        {
            name: "Monish ",
            team: "Design Team",
            image: "promotions/Design team - Monish.jpg",
        },
        {
            name: "Chandini Devi",
            team: "Design Team",
            image: "promotions/Design team-Chandini.jpg",
        },
        {
            name: "Abirami",
            team: "Design Team",
            image: "promotions/Design team -Abirami.PNG",
        },
        {
            name: "Angelin Gracia",
            team: "Design Team",
            image: "promotions/Design team - Angelin Gracia A .jpg",
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
                <div class="light flex justify-center text-4xl mb-3" data-text="PROMOTIONS TEAM">
                    <h1>PROMOTIONS TEAM</h1>
                </div>
                <div className="flex  py-6 scroll scroll-smooth snap-x flex-row flex-wrap justify-center gap-10">
                    {promotionsTeam.map((e, index) => {
                        return <PromotionsCard
                            team={e.team}
                            name={e.name}
                            image={e.image}
                            index={index + "-t"}
                            key={index}
                        />
                    })}
                </div>
                <Footer />
            </motion.div>

        </div>



    );
};

export default Promotions;
