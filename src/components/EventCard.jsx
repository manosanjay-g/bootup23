const EventCard = () => {
    return (
        <div
            id="event-card"
            class="flex flex-col items-center justify-between border-4  border-blue-400  bg-opacity-100 text-center mt-4 cursor-default lg:max-w-xs py-6 px-9  "
        >

            <div class="box top left"></div>
            <div class="box top right"></div>
            <div class="box bottom left"></div>
            <div class="box bottom right"></div>

            <div className="mb-4 place-self-center">
                <h2 class="font-semibold text-2xl mb-1 tracking-widest">EVENT NAME</h2>
                <p className="text-gray-300 font-semibold tracking-widest">EVENT INFO</p>
            </div>
            <img src={require("../assets/acmCert.png")} className="w-32 my-2 self-center" alt="event-logo" />
            <button className="self-center border-solid border-2 mt-5 border-blue-400 px-4 py-2 w-fit tracking-widest transition duration-700  hover:bg-blue-400 ">
                MORE INFO
            </button>

        </div>
    )
}

export default EventCard;