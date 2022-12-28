const EventCard = ({ name, info, icon, index, short_description }) => {
    const uppercaseName = name !== "iCatching" ? name.toUpperCase() : "iCATCHING";
    const uppercaseInfo = info.toUpperCase();

    const flipCard = () => {
        console.log(id);
        const eventCard = document.getElementById(id);
        if (eventCard.classList.contains('flip-card')) {
            eventCard.classList.remove('flip-card');
        } else {
            eventCard.classList.add('flip-card');
        }
    }
    // const goToRoute = () => {
    //     const eventCard = document.getElementById(id);
    //     if (eventCard.classList.contains('flip-card')) {
    //         eventCard.classList.remove('flip-card');
    //     }
    //     window.location.href = "https://www.google.com";

    // }
    const id = "event-card-" + index;
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
                <div className="mb-4 place-self-center">
                    <h2 className="font-semibold text-2xl mb-1 tracking-widest whitespace-normal ">{uppercaseName}</h2>
                    <p className="text-gray-300 font-semibold tracking-widest">{uppercaseInfo}</p>
                </div>
                <img alt="event-img" src={icon} className="w-20 my-2 self-center " />
                <button className="ignore-btn self-center border-solid border-2 mt-5 border-blue-400 px-4 py-2 w-fit tracking-widest transition duration-700  hover:bg-blue-400 ">
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