import PromotionsCard from "../../components/PromotionsCard/PromotionsCard";
import "../../components/arrow.css";
const PromotionTeam = () => {
    const promotionsTeam = [
        {
            name: "Mano Sanjay",
            team: "Website Team",
            image: "promotions/Website_ManoSanjay.jpg",
        },
        {
            name: "Keshav",
            team: "Website Team",
            image: "promotions/Website_keshav.jpg",
        },
        {
            name: "Subhash",
            team: "Website Team",
            image: "promotions/Website_SubhashB.jpg",
        },
        {
            name: "Suriya Prakash",
            team: "Website Team",
            image: "promotions/Website_SuriyaPrakash.jpg",
        },
        {
            name: "Praveen",
            team: "Design Team",
            image: "promotions/Design_Praveen.jpg",
        },
        {
            name: "Monish ",
            team: "Design Team",
            image: "promotions/Design team - Monish.jpg",
        },

        {
            name: "Abirami",
            team: "Design Team",
            image: "",
        },
        {
            name: "Chandini Devi",
            team: "Design Team",
            image: "",
        },
        {
            name: "Supriya",
            team: "Social Media Team",
            image: "promotions/socialmedia_supriya.jpeg",
        },
        {
            name: "Muqaddam Aaqil Sheriff",
            team: "Social Media Team",
            image: "promotions/Socialmedia_Aaqil.jpeg",
        },
        {
            name: "Kamalakshi ",
            team: "Social Media Team",
            image: "promotions/SocialMedia_Kamalakshi.jpg",
        },
        {
            name: "Vijayakumar ",
            team: "Video Team",
            image: "",
        },
        {
            name: "Rohit Gangadhar ",
            team: "Video Team",
            image: "",
        },
        {
            name: "Rifhath Aslam ",
            team: "Video Team",
            image: "",
        },
        {
            name: "Sai Nishit ",
            team: "Video Team",
            image: "",
        },

    ];
    const PromotionsTeamMap = promotionsTeam.map((e, index) => {
        return (
            <PromotionsCard
                team={e.team}
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
            id="promotions-team"
            className="flex flex-col py-10 sm:px-6  text-white  "
        >
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl  font-semibold text-center tracking-widest">
                    PROMOTIONS
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
                    onClick={() => slideLeft("promotions-team-slider")}
                />
                <div
                    id="promotions-team-slider"
                    className="flex px-4 overflow-x-scroll overflow-hidden gap-8 py-6 scroll scroll-smooth whitespace-nowrap md:snap-x"
                >
                    {PromotionsTeamMap}
                </div>
                <img
                    src="https://img.icons8.com/ios/50/ffffff/right-squared--v1.png"
                    className=" w-10 h-10 opacity-50 hover:opacity-100 transition duration-700 cursor-pointer right-arrow"
                    alt=""
                    onClick={() => slideRight("promotions-team-slider")}
                />
            </div>
        </div>
    )
}

export default PromotionTeam;