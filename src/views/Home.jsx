import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Landing from "../components/HomeView/Landing";
import TechnicalEvents from "../components/HomeView/TechnicalEvents";
import NonTechnicalEvents from "../components/HomeView/NonTechnicalEvents";
import Coordinators from "../components/HomeView/Coordinators";
import PromotionTeam from "../components/HomeView/PromotionTeam";
import Sponsers from "../components/HomeView/Sponsors";
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
        >
            <ParticlesBackground />
            <Landing />
            <TechnicalEvents />
            <NonTechnicalEvents />
            <Sponsers />
            <Coordinators />
            <PromotionTeam />

            <Footer />
        </motion.div>
    );
};

export default Home;
