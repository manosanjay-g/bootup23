import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Landing from "../components/HomeView/Landing";
import TechnicalEvents from "../components/HomeView/TechnicalEvents";
import NonTechnicalEvents from "../components/HomeView/NonTechnicalEvents";
import Coordinators from "../components/HomeView/Coordinators";
import Sponsers from "../components/HomeView/Sponsors";
import Loading from "./Loading";
const Home = ({ isLoading, setLoading }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    setTimeout(() => {
        setLoading(false);
    }, 2500);
    return (
        <div>
            <ParticlesBackground />
            {isLoading === true ? (
                <Loading />
            ) : (
                <motion.div
                    className="scroll-smooth"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    exit={{ opacity: 0 }}
                >
                    <Landing />
                    <TechnicalEvents />
                    <NonTechnicalEvents />
                    <Sponsers />
                    <Coordinators />
                    {/* <PromotionTeam /> */}

                    <Footer />
                </motion.div>
            )}
        </div>
    );
};

export default Home;
