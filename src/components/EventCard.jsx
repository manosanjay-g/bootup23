import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
const EventCard = ({ name, info, icon, index, description, short_description, rules, type, eligibility, organizers, link }) => {
    const uppercaseName = name !== "iCatching" ? name.toUpperCase() : "iCATCHING";
    const uppercaseInfo = info.toUpperCase();
    const navigate = useNavigate();
    const flipCard = () => {
        console.log(id);
        const eventCard = document.getElementById(id);
        if (eventCard.classList.contains('flip-card')) {
            eventCard.classList.remove('flip-card');
        } else {
            eventCard.classList.add('flip-card');
        }
    }
    const id = "event-card-" + index;
    const iconAnimate = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, rotate: [0, 10, 0], transition: { type: "spring", duration: 1 } },
    }
    const textAnimate = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
    }

    return (
        <div
            id={id}
            style={{
                position: "relative",
                width: "16rem",
                minWidth: "16rem",
                maxWidth: "16rem",
                height: "24rem",
                minHeight: "24rem",
                maxHeight: "24rem",
            }}
            onClick={flipCard}
            className="event-card card-both bg-gray-900  snap-center border-4 border-blue-400 text-center mt-4 cursor-default "

        >
            <div className="box top left"></div>
            <div className="box top right"></div>
            <div className="box bottom left"></div>
            <div className="box bottom right"></div>
            <div
                className="front-card flex flex-col items-center justify-between py-6 px-6"
            >
                <motion.div viewport={{ once: true, amount: 0.2 }} initial="hidden" whileInView="visible" variants={textAnimate} className="mb-4 place-self-center">
                    <motion.h2 variants={textAnimate} className="font-semibold text-2xl mb-1 tracking-widest whitespace-normal ">{uppercaseName}</motion.h2>
                    <motion.p variants={textAnimate} className="text-gray-300 font-semibold tracking-widest">{uppercaseInfo}</motion.p>
                </motion.div>
                <motion.img viewport={{ once: true, amount: 0.5 }} initial="hidden" whileInView="visible" variants={iconAnimate} alt="event-img" src={icon} className="w-20 my-2 self-center " />
                <button onClick={() => navigate("/event-details", { state: { name: name, info: info, type: type, eligibility: eligibility, description: description, rules: rules, organizers: organizers, link: link } })} className="ignore-btn self-center border-solid border-2 mt-5 border-blue-400 px-4 py-2 w-fit tracking-widest transition duration-700  hover:bg-blue-400 ">
                    MORE INFO
                </button>

            </div>
            <div
                className="back-card py-6 px-6 flex justify-center items-center text-center "
            >
                <p className="text-gray-300 font-semibold break-normal decoration-slice whitespace-pre-wrap ">{short_description}</p>
            </div>
        </div>
    )
}

export default EventCard;