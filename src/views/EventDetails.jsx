import ParticlesBackground from "../components/ParticlesBackground";
import OrganizerCard from "../components/OrganizerCard";
const EventDetails = () => {
    return (
        <>
        
        <div id="event-details">
            <ParticlesBackground /> 
            <div class="text-center" id="event-description">
                <h2 class="font-bold text-3xl">Silicon Valley</h2>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>    
            <div class="text-center" id="event-rules">
                <h2 class="font-bold text-3xl">Rules</h2>
                <ul class="list-disc list-inside text-left" id="event-rules-list">
                    <li>Elhgibility</li>
                    <li>Rule#1</li>
                    <li>Rule#</li>
                </ul>
            </div>
            <div id="event-register-btn" class="text-center">
                <button class="group relative h-10 w-40 overflow-hidden rounded-lg bg-white text-lg shadow"/>
                    <div class="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black group-hover:text-white">Register</span>
            </div>
            <div id="event-organizers">
                <OrganizerCard
                    name="John"
                    event="Silicon Valley"
                    />
            </div>
        </div>
    </>
    )
}

export default EventDetails;