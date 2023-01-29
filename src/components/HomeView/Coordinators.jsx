import FacultyCard from "../../components/FacultyCard/FacultyCard";
const Coordinators = () => {
    const coordinators = [
        {
            name: "Dr.Kumar P",
            role: "HOD",
            image: "OrgCom/OrgCom_Varun.jpg",
        },
        {
            name: "Dr.Vinod Kumar S",
            role: "Faculty Coordinator",
            image: "OrgCom/OrgCom_Varun.jpg",
        },
        {
            name: "Mr.Bhuvaneswaran",
            role: "Final Year",
            image: "OrgCom/Bhuvaneswaran B-min.jpeg",
        },
        {
            name: "Varun Rishwandh",
            role: "Final Year",
            image: "OrgCom/WhatsApp Image 2023-01-29 at 7.44.08 PM.jpeg",
        },
        {
            name: "Daadreyaa",
            role: "Final Year",
            image: "OrgCom/OrgCom_Daadreyaa.jpg",
        },
        {
            name: "Thuhin Khanna",
            role: "Final Year",
            image: "OrgCom/OrgCom_ThuhinKhanna.png",
        },
        {
            name: "Suraj",
            role: "Final Year",
            image: "OrgCom/OrgCom_Suraj.png",
        },

        {
            name: "Sriviveknath",
            role: "Final Year",
            image: "OrgCom/OrgCom_Sriviveknath S R.jpg",
        },
    ];
    const coordinatorsMap = coordinators.map((e, index) => {
        return (
            <FacultyCard
                event={e.role}
                name={e.name}
                image={e.image}
                index={index + "-t"}
                key={index}
            />
        );
    });
    const slideLeft = (type) => {
        const technicalSlider = document.getElementById("technical-slider");
        const nonTechnicalSlider = document.getElementById("non-technical-slider");
        const organizerTechnicalSlider = document.getElementById(
            "organizer-technical-slider"
        );
        const organizerNonTechnicalSlider = document.getElementById(
            "organizer-non-technical-slider"
        );
        const coordinatorSlider = document.getElementById("coordinators-slider");
        const facultyCoordinatorSlider = document.getElementById(
            "faculty-coordinators-slider"
        );
        const promotionsTeamSlider = document.getElementById(
            "promotions-team-slider"
        );
        if (type === "technical-slider") {
            technicalSlider.scrollLeft -= 500;
        } else if (type === "non-technical-slider") {
            nonTechnicalSlider.scrollLeft -= 500;
        } else if (type === "organizer-technical-slider") {
            organizerTechnicalSlider.scrollLeft -= 500;
        } else if (type === "organizer-non-technical-slider") {
            organizerNonTechnicalSlider.scrollLeft -= 500;
        } else if (type === "coordinators-slider") {
            coordinatorSlider.scrollLeft -= 500;
        } else if (type === "faculty-coordinators-slider") {
            facultyCoordinatorSlider.scrollLeft -= 500;
        } else if (type === "promotions-team-slider") {
            promotionsTeamSlider.scrollLeft -= 500;
        } else {
        }
    };
    const slideRight = (type) => {
        const technicalSlider = document.getElementById("technical-slider");
        const nonTechnicalSlider = document.getElementById("non-technical-slider");
        const organizerTechnicalSlider = document.getElementById(
            "organizer-technical-slider"
        );
        const organizerNonTechnicalSlider = document.getElementById(
            "organizer-non-technical-slider"
        );
        const coordinatorSlider = document.getElementById("coordinators-slider");
        const facultyCoordinatorSlider = document.getElementById(
            "faculty-coordinators-slider"
        );
        const promotionsTeamSlider = document.getElementById(
            "promotions-team-slider"
        );
        if (type === "technical-slider") {
            technicalSlider.scrollLeft += 500;
        } else if (type === "non-technical-slider") {
            nonTechnicalSlider.scrollLeft += 500;
        } else if (type === "organizer-technical-slider") {
            organizerTechnicalSlider.scrollLeft += 500;
        } else if (type === "organizer-non-technical-slider") {
            organizerNonTechnicalSlider.scrollLeft += 500;
        } else if (type === "coordinators-slider") {
            coordinatorSlider.scrollLeft += 500;
        } else if (type === "faculty-coordinators-slider") {
            facultyCoordinatorSlider.scrollLeft += 500;
        } else if (type === "promotions-team-slider") {
            promotionsTeamSlider.scrollLeft += 500;
        } else {
        }
    };
    return (
        <div
            id="student-coordinators"
            className="flex flex-col py-10 sm:px-6  text-white  "
        >
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl  font-semibold text-center tracking-widest">
                    COORDINATORS
                </h1>
                <p className="text-gray-400 my-4 text-lg text-center font-medium">
                    COMPUTER SCIENCE AND ENGINEERING DEPARTMENT
                </p>
            </div>
            <div className="flex mx-2 gap-4 items-center justify-center">
                <img
                    src="https://img.icons8.com/ios/50/ffffff/left-squared--v1.png"
                    className=" w-10 h-10 opacity-50 hover:opacity-100 transition duration-700 cursor-pointer left-arrow"
                    alt=""
                    onClick={() => slideLeft("coordinators-slider")}
                />
                <div
                    id="coordinators-slider"
                    className="flex px-4 overflow-x-scroll overflow-hidden gap-8 py-6 scroll scroll-smooth whitespace-nowrap md:snap-x"
                >
                    {coordinatorsMap}
                </div>
                <img
                    src="https://img.icons8.com/ios/50/ffffff/right-squared--v1.png"
                    className=" w-10 h-10 opacity-50 hover:opacity-100 transition duration-700 cursor-pointer right-arrow"
                    alt=""
                    onClick={() => slideRight("coordinators-slider")}
                />
            </div>
        </div>
    )
}
export default Coordinators;