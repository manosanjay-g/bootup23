import { useNavigate } from 'react-router-dom';
import './GlassCard.css';
const EventCard = ({ name, info, icon, index, description, short_description, rules, type, eligibility, organizers, link }) => {
    const uppercaseName = name !== "iCatching" ? name.toUpperCase() : "iCATCHING";
    const uppercaseInfo = info.toUpperCase();
    const navigate = useNavigate();


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
                height: "28rem",
                minHeight: "28rem",
                maxHeight: "28rem",
            }}
            className="box flex flex-col text-center snap-center "

        >
            <span></span>
            <div
                className="content flex flex-col justify-around items-center"
                style={{
                    position: "relative",
                    width: "16rem",
                    minWidth: "16rem",
                    maxWidth: "16rem",
                    height: "24rem",
                    minHeight: "24rem",
                    maxHeight: "24rem",
                }}
            >
                <div viewport={{ once: true, amount: 0.2 }} initial="hidden" whileInView="visible" variants={textAnimate} className="mb-4 place-self-center">
                    <h2 variants={textAnimate} className="font-semibold text-2xl mb-1 tracking-widest whitespace-normal ">{uppercaseName}</h2>
                    <p variants={textAnimate} className="text-gray-300 font-semibold tracking-widest">{uppercaseInfo}</p>
                </div>
                <img viewport={{ once: true, amount: 0.5 }} initial="hidden" whileInView="visible" variants={iconAnimate} alt="event-img" src={icon} className="w-20 my-2 self-center " />
                <button onClick={() => navigate("/event-details", { state: { name: name, info: info, type: type, eligibility: eligibility, description: description, rules: rules, organizers: organizers, link: link } })} className="ignore-btn self-center border-solid border-2 mt-5 border-white-400 rounded-lg px-4 py-2 w-fit tracking-widest transition duration-700  hover:bg-white hover:text-black">
                    MORE INFO
                </button>

            </div>

        </div>
    )
}

export default EventCard;