import ParticlesBackground from "../components/ParticlesBackground";
import OrganizerCard from "../components/OrganizerCard";
const EventDetails = () => {
    return (
        <>
        
        <div id="event-details" className="m-10">
            <ParticlesBackground /> 
            <div className="text-center" id="event-description">
                <h2 className="font-bold text-white my-4 font-semibold text-7xl wide-text">Silicon Valley</h2>
                <p className="text-white text-lg mx-60 justify-center mt-10 mb-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>    
            <div className="text-center" id="event-rules">
                <h2 className="font-bold text-white my-4 font-semibold wide-text text-3xl mb-5">Rules</h2>
                <ul className="px-60 text-lg list-disc list-inside text-left text-white mb-10 mt-5" id="event-rules-list">
                    <li>Eligibility</li>
                    <li>Rule#1</li>
                    <li>Rule#</li>
                </ul>
            </div>
            <div className="flex justify-center mb-20 animate-bounce ">
                <a href="#_" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Register Now</span>
                    <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                </a>
            </div>
            
            <h2 className="font-bold text-white my-4 font-semibold wide-text text-3xl mb-5 text-center">Event Organizers</h2>
            <div id="event-organizers" className="flex flex-row flex-nowrap space-x-10 justify-center">
                <div className="hover:scale-110 transition duration-300">
                <OrganizerCard
                    name="John"
                    event="Silicon Valley"
                    />
                </div>
                <div className="hover:scale-110 transition duration-300">
                <OrganizerCard
                    name="John"
                    event="Silicon Valley"
                    />
                    </div>                
                    
            </div>
        </div>
    </>
    )
}

export default EventDetails;