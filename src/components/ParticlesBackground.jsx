import { useCallback } from "react";
import Particles from "react-tsparticles";
import { motion } from 'framer-motion'
import { loadFull } from "tsparticles";
const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0 }}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    fullScreen: {
                        zIndex: -1,
                    },
                    background: {
                        color: "#000"
                    },
                    interactivity: {

                        events: {
                            onClick: {
                                enable: false,
                            },
                            onHover: {
                                enable: false,
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            enable: true,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 900,
                            },
                            value: 40,
                        },
                        opacity: {
                            value: 0.2,
                        },
                        shape: {
                            type: "square",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </motion.div>
    );
};

export default ParticlesBackground