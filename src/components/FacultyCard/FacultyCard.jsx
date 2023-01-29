import './FacultyCard.css';
import './tilt.css';
import Tilt from './Tilt';

const FacultyCard = ({ name, event, image, index }) => {
    const uppercaseName = name.toUpperCase();
    const uppercaseEvent = event !== "iCatching" ? event.toUpperCase() : "iCATCHING";

    const id = "organizer-card-" + index;

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
                className="organizer-card rounded-lg bg-zinc-900 snap-center border-4  border-purple-400 text-center mt-4 cursor-default organizers-container"

            >

                <div
                    className="front-card flex flex-col items-center justify-between py-6 px-6 gradient bg-zinc-900 rounded-lg"
                >

                    <div viewport={{ once: true, amount: 0.2 }} className="mb-2 place-self-center">
                        <h2 className="font-semibold text-lg mb-1 mx-2 tracking-widest decoration-slice  whitespace-normal">{uppercaseName}</h2>
                        <p className="text-gray-300 font-semibold tracking-widest decoration-slice ">{uppercaseEvent}</p>
                    </div>
                    <div></div>

                    <img viewport={{ once: true, amount: 0.5 }} alt="organizer-img" src={process.env.PUBLIC_URL + '/cropped/' + image} className="h-48 w-48 object-cover rounded-md self-center " />
                    <div></div>
                </div>
            </div>
        </Tilt>
    )
}

export default FacultyCard;