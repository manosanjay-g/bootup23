import OrganizerCard from "../components/OrganizerCard";
import { useLocation } from 'react-router-dom'
const EventDetails = () => {
    const { state } = useLocation()
    return (
        <div id="event-details" className="flex flex-col items-center py-7 px-4 bg-black">
            <div
                className="flex flex-col "
                id="event-description"
            >
                <h2 className="text-white font-bold text-center text-4xl tracking-widest">
                    {state.name.toUpperCase()}
                </h2>
                <div className="my-4 text-center">
                    <p className="text-white font-semibold text-lg  justify-center  tracking-widest">
                        {state.info.toUpperCase()}
                    </p>
                    <p className="text-gray-500 font-semibold text-lg  justify-center ">
                        {state.type.toUpperCase()}
                    </p>
                </div>
            </div>
            <div
                className="flex flex-col items-center text-center my-7"
                id="event-description"
            >
                <p className="text-white font-semibold  justify-center text-2xl  tracking-widest">
                    ELIGIBILITY
                </p>
                <p className="text-gray-500 font-semibold text-lg  justify-center">
                    {state.eligibility.toUpperCase()}
                </p>
            </div>
            <div
                className="flex flex-col items-center text-center my-7"
                id="event-description"
            >
                <p className="text-white font-semibold  justify-center text-2xl mb-4 tracking-widest">
                    DESCRIPTION
                </p>
                <p className="text-white text-lg md:w-3/4 justify-center leading-8">
                    {state.description}
                </p>
            </div>
            <div className="text-center my-7" id="event-rules">
                <p className="text-white font-semibold  justify-center text-2xl  tracking-widest">
                    RULES
                </p>
                <ul
                    className=" text-lg text-center  list-inside text-white my-2"
                    id="event-rules-list"
                >
                    {
                        state.rules.map((e, index) => {
                            return <li key={e + index}>{e}</li>
                        })
                    }
                </ul>
            </div>
            <div className="flex justify-center animate-bounce ">
                <a
                    href="https://www.google.com"
                    className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
                >
                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                        Register Now
                    </span>
                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                </a>
            </div>

            <div
                id="organizers-technical"
                className="flex flex-col py-10 sm:px-6  text-center text-white  "
            >
                <p className="text-white font-semibold  justify-center text-2xl  tracking-widest">
                    ORGANIZERS
                </p>
                <div className="flex flex-row flex-wrap justify-center gap-6 mt-4">
                    {state.organizers.map((e, index) => {
                        return <OrganizerCard event={state.name} image={e.image} index={index} name={e.name} key={index + e.name} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
