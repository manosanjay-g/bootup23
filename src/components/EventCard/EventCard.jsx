import { useNavigate } from 'react-router-dom';
import './GlassCard.css';
const EventCard = ({ name, info, icon, index, description, short_description, rules, roundDescription, type, eligibility, organizers, link }) => {
    const uppercaseName = name !== "iCatching" ? name.toUpperCase() : "iCATCHING";
    const uppercaseInfo = info.toUpperCase();
    const navigate = useNavigate();


    const id = "event-card-" + index;


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
                <div viewport={{ once: true, amount: 0.2 }} className="mb-4 place-self-center">
                    <h2 className="font-semibold text-2xl mb-1 tracking-widest whitespace-normal ">{uppercaseName}</h2>
                    <p className="text-gray-300 font-semibold tracking-widest">{uppercaseInfo}</p>
                </div>
                <img viewport={{ once: true, amount: 0.5 }} alt="event-img" src={icon} className="w-20 my-2 self-center " />
                <button onClick={() => navigate("/event-details", { state: { name: name, info: info, type: type, eligibility: eligibility, description: description, short_description: short_description, rules: rules, roundDescription: roundDescription, organizers: organizers, link: link } })} className="ignore-btn self-center border-solid border-2 mt-5 border-white-400 rounded-lg px-4 py-2 w-fit tracking-widest transition duration-700  hover:bg-white hover:text-black">
                    MORE INFO
                </button>

            </div>

        </div>
    )
}

export default EventCard;