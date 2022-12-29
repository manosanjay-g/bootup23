import { motion } from 'framer-motion'
const OrganizerCard = ({ name, event, image, index }) => {
    const uppercaseName = name.toUpperCase();
    const uppercaseEvent = event !== "iCatching" ? event.toUpperCase() : "iCATCHING";

    const id = "organizer-card-" + index;
    const imageAnimate = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 1 } },
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
            className="organizer-card bg-[#3e1709] snap-center border-4 border-orange-400 text-center mt-4 cursor-default "

        >
            <div className="box-organizers top left"></div>
            <div className="box-organizers top right"></div>
            <div className="box-organizers bottom left"></div>
            <div className="box-organizers bottom right"></div>
            <div
                className="front-card flex flex-col items-center justify-between py-6 px-6"
            >

                <motion.div viewport={{ once: true, amount: 0.2 }} initial="hidden" whileInView="visible" variants={textAnimate} className="mb-4 place-self-center">
                    <motion.h2 variants={textAnimate} className="font-semibold text-xl mb-1 mx-2 tracking-widest decoration-slice whitespace-pre-wrap ">{uppercaseName}</motion.h2>
                    <motion.p variants={textAnimate} className="text-gray-300 font-semibold tracking-widest decoration-slice whitespace-pre-wrap">{uppercaseEvent}</motion.p>
                </motion.div>
                <motion.img viewport={{ once: true, amount: 0.5 }} initial="hidden" whileInView="visible" variants={imageAnimate} alt="event-img" src={image} className="w-20 my-2 self-center " />
                <div></div>
            </div>
        </div>
    )
}

export default OrganizerCard;