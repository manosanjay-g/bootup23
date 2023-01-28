import './FacultyCard.css';
import './tilt.css';
import Tilt from './Tilt';

const FacultyCard = ({ name, event, image, index }) => {
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

    const options = {
        scale: 1.05,
        speed: 5000,
        max: 15,
        gyroscope: false,
    };
    return (
        <Tilt options={options} >
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
                className="organizer-card rounded-lg bg-zinc-900 snap-center border-4  border-purple-400 text-center mt-4 cursor-default org-container "

            >

                <div
                    className="front-card flex flex-col items-center justify-between py-6 px-6 gradient bg-zinc-900 rounded-lg"
                >

                    <div viewport={{ once: true, amount: 0.2 }} initial="hidden" whileInView="visible" variants={textAnimate} className="mb-4 place-self-center">
                        <h2 variants={textAnimate} className="font-semibold text-xl mb-1 mx-2 tracking-widest decoration-slice whitespace-normal ">{uppercaseName}</h2>
                        <p variants={textAnimate} className="text-gray-300 font-semibold tracking-widest decoration-slice whitespace-pre-wrap">{uppercaseEvent}</p>
                    </div>
                    <div></div>

                    <img viewport={{ once: true, amount: 0.5 }} initial="hidden" whileInView="visible" variants={imageAnimate} alt="organizer-img" src={process.env.PUBLIC_URL + '/cropped/' + image} className="h-48 w-48 object-cover rounded-md my-2 self-center " />
                    <div></div>
                </div>
            </div>
        </Tilt>
    )
}

export default FacultyCard;