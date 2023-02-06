import EventCard from "../../components/EventCard/EventCard";
import '../arrow.css'

const TechnicalEvents = () => {
    const technicalEvents = [
        {
            name: "Silicon Valley",
            info: "Project Expo",
            icon: "https://img.icons8.com/windows/96/ffffff/profitable-idea.png",
            route: "/silicon-valley",
            description:
                "Want the world to gaze upon your project? Silicon Valley is the perfect platform to showcase your project, network with like-minded individuals, and gain valuable feedback on your projects.Participants will present their projects along with the working model and will be evaluated based on their presentation and the novelty of the project",
            short_description: "Offline Event",
            rules: [
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One , Master The Blaster.",
                "Theme of the event is Innovation/Startup.",
                "A working model must be shown.",
                "The product will be judged based on the concept, novelty, presentation, applicability, benefits to society, and demonstration.",
                "The participants are required to present their project along with a presentation.",
                "This is followed by the final demonstration of the end product. Scores are awarded based on the presentation of the team and the working model.",
                "Results will be published at the end of the presentation session. The team that scored the maximum points will be awarded.",
                "The Panel decision is final.",
            ],
            roundDescriptions: [],
            type: "Team Event (1-3 members)",
            eligibility: "1 Round",
            organizers: [
                {
                    name: "Surya V",
                    event: "+91 80722 28533",
                    image: "silicon_valley/SuryaV-Si_Valley.jpg",
                },
                {
                    name: "Chinna Sakthi V",
                    event: "+91 87545 10421",
                    image: "silicon_valley/SiliconValley_ChinnaSakthi_K.jpg",
                },
            ],
            link: "https://forms.gle/2SHiV6azJHV9hh4n7",
        },
        {
            name: "The Revolution",
            info: "Paper Presentation",
            icon: "https://img.icons8.com/windows/96/ffffff/presentation-screen.png",
            route: "/the-revolution",
            description:
                "Ready to dive into the depths of technology and share your insights with the world? Whether you're a developer, engineer, or entrepreneur, Look no further than our upcoming paper presentation! This is your chance to showcase your hard work and share your latest findings with the world. With interactive discussions, and Q&A sessions this is an event you won't want to miss! Sign up now, and let the competition begin.",
            short_description: "Offline Event",
            rules: [
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
                "The final presentation Template will be shared with the respective team leaders 5-6 days before the competition.",
                "If the work is discovered to be plagiarised, any team will be liable to disqualification",
                "The teams are evaluated on various technical and business competencies. The top 3 teams will be rewarded.",
                "The decision of the panel is final.",
            ],
            roundDescriptions: [
                "1. In the first round, the teams are supposed to submit an abstract giving a gist of the work  consisting of not more than 300 words. \n\n2. The top 10-15 teams will be shortlisted for the final round where the teams are supposed to present their ideas which should comprehend both technical and business aspects.",
                "1. Each team will be given a timeframe of around 10-12 minutes for their overall presentation followed by the questionnaire session by the panel.",
            ],
            type: "Team Event (1-3 members)",
            eligibility: "2 Rounds",
            organizers: [
                {
                    name: "Jeevitha C",
                    event: "+91 95001 15703",
                    image: "the_revolution/Jeevitha_.jpg",
                },
                {
                    name: "Jeevamutharasi",
                    event: "+91 89460 76575",
                    image: "the_revolution/Jeevamutharasi_.jpg  ",
                },
            ],
            link: "https://forms.gle/2SHiV6azJHV9hh4n7",
        },
        {
            name: "404 Not Found",
            info: "Code Debugging",
            icon: "https://img.icons8.com/ios/100/ffffff/bug.png",
            route: "/404-not-found",
            description:
                "Are you ready to put your bug-hunting skills to the test? Join our exciting technological competition and discover hidden flaws in the code. Don't miss out on this opportunity to flex your problem-solving muscles and come out on top as the ultimate bug-finding champion. Sign up now and let the hunt begin!",
            short_description: "Offline Event",
            rules: [
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
                "Internet access will not be provided.",
                "In case of a tie, the fastest person to debug and execute the program is deemed the winner.",
                "The decision of the panel is final.",
            ],
            roundDescriptions: [
                "1. This is pen-paper round.\n\n2. A time limit of 20 minutes is provided for debugging.",
                "1. A set of programs will be provided with errors in them.\n\n2. Participants are required to execute the program successfully.",
            ],
            type: "Individual Event",
            eligibility: "2 Rounds",
            organizers: [
                {
                    name: "Vijay A",
                    event: "+91 86670 03095",
                    image: "404_not_found/vijay_a.jpg",
                },
                {
                    name: "Zafar Sadik H D",
                    event: "+91 73053 34231",
                    image: "404_not_found/IMG_1622-min.JPG",
                },
            ],
            link: "https://forms.gle/2SHiV6azJHV9hh4n7",
        },
        {
            name: "iCatching",
            info: "Web Development",
            icon: "https://img.icons8.com/ios/100/ffffff/web.png",
            route: "/icatching",
            description:
                "Calling all web design enthusiasts! Are you ready to put your HTML and CSS skills to the test? Join our exciting website replication competition and showcase your ability to recreate a visually stunning and responsive website design. Push the boundaries of what is possible with HTML and CSS. Don't miss out on this opportunity to flex your design muscles and come out on top as the ultimate web design champion.",
            short_description: "Offline Event",
            rules: [
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
                "Participants must bring their own laptops.",
                "The topics will be provided on the day of the event.",
                "The team is expected to develop a creative front-end for the web application.",
                "The duration of the event is 90 minutes.",
                "The most creative and innovative solutions will be rewarded.",
                "The Panel's decision is final.",
            ],
            roundDescriptions: [],
            type: "Team Event (2-4 members)",
            eligibility: "1 Round",
            organizers: [
                {
                    name: "Akhila Vignesh",
                    event: "+91 91508 60054",
                    image: "iCatching/Akhila Vignesh.jpeg",
                },
                {
                    name: "Jayapriyaa RG",
                    event: "+91 96266 86122",
                    image: "iCatching/iCatching_Jayapriyaa.jpg",
                },
            ],
            link: "https://forms.gle/2SHiV6azJHV9hh4n7",
        },
        {
            name: "Halt and Catch Fire",
            info: "Code Relay",
            icon: "https://img.icons8.com/ios/100/ffffff/keyboard.png",
            route: "/halt-and-catch-fire",
            description:
                "With lightning-fast coding rounds one after another just like a relay, this competition is designed to test your skills and push you to the limit. Each team will be given a set of coding challenges that they must solve within a given time limit, and the team that completes the most challenges with the least errors will be declared the winner. Don't miss out on the chance to be a part of the action!",
            short_description: "Offline Event",
            rules: [
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
                "The relay order of the teammates will be collected prior and it cannot be changed once the round begins.",
                "Only one round will be conducted for all the teams. If the question is answered before the stipulated time then the next team member can utilize the saved time for answering the next question and so on. Each question must be answered by only one teammate. ",
                "Team members cannot help each other while solving the questions.",
                "Malpractice will not be tolerated, and if any are discovered, the corresponding teamwill be eliminated.",
                "If a teammate is unable to complete the given question within 30 mins then the corresponding status of that question will be considered for evaluation and the next team member can proceed further.",
                "The decision taken by the panel will be final.",
            ],
            roundDescriptions: [],
            type: "Team Event (Exactly 3 members)",
            eligibility: "1 Round",
            organizers: [
                {
                    name: "Jeevana V",
                    event: "+91 98402 99034",
                    image: "Halt and Catch Fire/Halt and catch fire - Jeevana V.jpg",
                },
                {
                    name: "Harish Kumar S",
                    event: "+91 90034 05276",
                    image: "Halt and Catch Fire/Halt and catch fire - Harish Kumar S.jpg",
                },
            ],
            link: "https://forms.gle/2SHiV6azJHV9hh4n7",
        },
        {
            name: "The Perfect Exploit",
            info: "Capture the flag",
            icon: "https://img.icons8.com/ios/100/ffffff/flag--v1.png",
            route: "/the-perfect-exploit",
            description:
                "Join the elite ranks of cyber warriors in our intense Capture the Flag hacking event! Assemble your team, sharpen your skills and put your cunning and expertise to the test as you race to capture flags and outsmart your opponents. With a variety of challenging vulnerabilities to exploit, this event is the ultimate test of your hacking abilities and strategy. Will you rise to the top and claim victory? Sign up now and let the games begin!",
            short_description: "Online Event",
            rules: [
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
                "* This event will be conducted on Feb 12, 2023 *",
     
                "This is a 24 hours event. This event starts from Feb 12,2023 12:00 AM and ends at 11:59 PM.",
                "The capture the flag event will be hosted on the Tryhackme Platform. The event will be private, only the registered participants can join the room to solve these challenges.",
                "The problem solving mode for this CTF is Jeopardy.",
                "The first three players that solve a challenge get rewarded with extra points. The other players solving the challenges will be given an average of points mentioned in the challenges.",
                "Challenge Categories are: \nWeb, Forensics, Cryptography, Mobile Security, Binary Exploitation, Reverse Engineering, OSINT, Miscellaneous Challenges, Pwn",
                'Flag Format: "BOOT_UP{W3lc0m3s_y0u}"',
                "Winners will be selected based on points obtained at the end of the event.",
            ],
            roundDescriptions: [],
            type: "Individual Event",
            eligibility: "1 Round",
            organizers: [
                {
                    name: "Abuthahir A",
                    event: "+91 99403 48532",
                    image: "The Perfect Exploit/ThePerfectExploit-Abuthahir.jpg",
                },
                {
                    name: "Krithic Kumar",
                    event: "+91 90927 30367",
                    image: "The Perfect Exploit/ThePerfectExploit-Krithic Kumar.jpeg",
                },
            ],
            link: "https://forms.gle/2SHiV6azJHV9hh4n7",
        },
        {
            name: "The Office",
            info: "Interview",
            icon: "https://img.icons8.com/ios-filled/100/ffffff/briefcase.png",
            route: "/the-office",
            description:
                "Get ready to ace your next job interview and take your career to new heights with our upcoming Mock Interview competition! This is your chance to showcase your skills, gain valuable feedback and take on the challenge of performing in a simulated real-world interview scenario. So, sharpen your skills, polish your resume and join us for an exciting and challenging competition.",
            short_description: "Offline Event",
            rules: [
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
                "Internet access will not be provided.",
                "Participants indulging in malpractice will be subject to disqualification.",
                "The Panel decision is final.",
            ],
            roundDescriptions: [
                "1. This is a pen-paper round. \n\n2. The participants would be given a set of aptitude and technical-based questions(DSA, OOPS).\n\n3. The duration of this round is 30 minutes.\n\n4. The highest scoring participants will be moved on to the final round.",
                "1. The final round will be conducted as a one-on-one interview where the participants will be asked technical questions as well as some general questions to test their knowledge and ability.\n\n2. The participants will be judged based on their technical skills, spontaneity, fluency, and clarity of their answers.",
            ],
            type: "Individual Event",
            eligibility: "2 Rounds",
            organizers: [
                {
                    name: "Rohit M",
                    event: "+91 70922 01124",
                    image: "the office/TheOffice_Rohit M.jpg",
                },
                {
                    name: "Sriviveknath",
                    event: "+91 80562 22577",
                    image: "the office/TheOffice_Sriviveknath S R.jpg",
                },
            ],
            link: "https://forms.gle/2SHiV6azJHV9hh4n7",
        },
        {
            name: "Machine Impossible",
            info: "PC Assembling",
            icon: "https://img.icons8.com/ios/100/ffffff/workstation.png",
            route: "/machine-impossible",
            description:
                "Are you ready to flex your computer-building muscles and show off your technical prowess? This is your chance to showcase your abilities as a computer geek and prove that you know the ins and outs of a PC. With a pile of parts and a ticking clock, this competition will test your ability to assemble a PC from scratch and get it running.The participant who completes the assembly and gets the PC running the fastest will be declared the winner.",
            short_description: "Offline Event",
            rules: [
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
                "Internet access is not allowed.",
                "Participants indulging in malpractice will be subject to disqualification.",
                "The Panel's decision is final.",
            ],
            roundDescriptions: [
                "1. This will be a pen-paper round.\n\n2. The participants with the highest scores will move on to the next round.\n\n3. The duration of this event is 30 minutes.",
                "1. The participants will be provided with the parts they need to build the PC, and they will attempt to build a complete functioning PC.\n\n2. Participants should work only with the components provided for them and are not permitted to use any other components in their build.\n\n3. The duration of this event is 60 minutes.",
            ],
            type: "Individual Event",
            eligibility: "2 Rounds",
            organizers: [
                {
                    name: "Abhijit PV",
                    event: "+91 96770 82475",
                    image: "MissionImpossible/MissionImpossible_Abhijith.jpg",
                },
                {
                    name: "Charan V",
                    event: "+91 80560 83192",
                    image: "MissionImpossible/MissionImpossible_Charan.jpg",
                },
            ],
            link: "https://forms.gle/2SHiV6azJHV9hh4n7",
        },
        {
            name: "Ex Machina",
            info: "RPA",
            icon: "https://img.icons8.com/material-rounded/96/ffffff/bot.png",
            route: "/ex-machina",
            description:
                "Want to take automation to the next level? Come and showcase your skills in our upcoming UIPath competition! This is your chance to test your knowledge of automation and prove that you know exactly where to put the machine to maximize efficiency.Participants will be given a problem statement on the spot and will have 2 hours to solve the problem using UIPath. The team or individual whose submission has the least running time will be declared the winner.",
            short_description: "Offline Event",
            rules: [
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
                "The participants must bring their own laptops with UiPath installed.",
                "The problem statement will be provided at the time of the event.",
                "Participants have to address tasks given to them and create automation for the problem given.",
                "Evaluation of the result is based on the efficiency of the solution.",
                "The time taken to build the solution is considered a parameter for tie-breakers.",
                "Participants indulging in malpractice will be subject to disqualification.",
                "The Panel decision is final.",
            ],
            roundDescriptions: [],
            type: "Individual Event",
            eligibility: "1 Round",
            organizers: [
                {
                    name: "Sriviveknath",
                    event: "+91 80562 22577",
                    image: "Ex_Machina/ExMachina_Sriviveknath S R.jpg",
                },
                {
                    name: "Sujan G",
                    event: "+91 88257 50741",
                    image: "Ex_Machina/ExMachina_Sujan_G.jpg",
                },
            ],
            link: "https://forms.gle/2SHiV6azJHV9hh4n7",
        },
        {
            name: "Fly High",
            info: "Drone Event",
            icon: "https://img.icons8.com/material-rounded/96/ffffff/drone.png",
            route: "/fly-high",
            description:
                "Interested to take flight and unleash the potential of drones? This is your chance to prove that you have what it takes to realize the untapped potential of drones and take it to the next level.Participants will present their drone projects and ideas, which will be judged on the basis of feasibility, creativity, code standards, and innovation. Whether it's a drone that can perform aerial acrobatics, a drone that can navigate through obstacles, or a drone that can perform a specific task, we want to see it all!",
            short_description: "Offline Event",
            rules: [
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
                "Participants must bring their own drones and no additional support will be given.",
                "A working model is only accepted.",
                "The drone will be judged based on its design, speed, and efficiency",
                "Participants will be disqualified if they indulge in malpractice and will not be allowed to participate in other events.",
                "The panel’s decision will be the final.",
            ],
            roundDescriptions: [
                "1. The performance of the drone is then assessed after its design has been assessed.\n\n2. The primary use case for evaluating the metrics is food delivery.\n\n3. A drone is required to fly between three points (a start, intermediate, and endpoint) while transporting water cups and book covers on separate occasions.\n\n4. The amount of water in the cup is measured for efficiency evaluations, and speed evaluations use the drone's flight time.\n\n5. All of the metrics mentioned earlier will be taken into account when choosing the winner."
            ],
            type: "Individual Event",
            eligibility: "1 Round",
            organizers: [
                {
                    name: "Jagadeep N",
                    event: "+91 70105 45365",
                    image: "Fly High/Fly High_Jagadeep N.jpeg",
                },
                {
                    name: "Nesigan M L",
                    event: "+91 70106 07327",
                    image: "Fly High/Fly High_Nesigan M L.jpg",
                },
                {
                    name: "Raghavi V",
                    event: "+91 63690 26891",
                    image: "Fly High/Fly High_Raghavi V.jpg",
                },
            ],
            link: "https://forms.gle/2SHiV6azJHV9hh4n7",
        },
    ];
    const technicalEventsMap = technicalEvents.map((e, index) => {
        return (
            <EventCard
                name={e.name}
                info={e.info}
                icon={e.icon}
                index={index + "-t"}
                key={index}
                description={e.description}
                short_description={e.short_description}
                rules={e.rules}
                eligibility={e.eligibility}
                link={e.link}
                organizers={e.organizers}
                type={e.type}
                roundDescription={e.roundDescriptions}
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
            id="events-technical"
            className="flex flex-col py-10 sm:px-6  text-white  "
        >
            <div className="flex flex-col  items-center justify-center">
                <h1 className="text-4xl font-semibold tracking-widest">EVENTS</h1>
                <p className="text-gray-400 my-2 font-semibold text-xl wide-text">
                    TECHNICAL
                </p>
                <div className="flex flex-row justify-center items-center mt-5 md:hidden">
                    <p className="text-gray-400 my-2 font-semibold text-xl wide-text">
                        SWIPE
                    </p>
                    <div className="arrows-container items-end ">
                        <div className="arrow arrow-one w-5 h-5 "></div>
                    </div>
                </div>
            </div>
            <div className="flex mx-2 gap-4 items-center justify-center">
                <img
                    src="https://img.icons8.com/ios/50/ffffff/left-squared--v1.png"
                    className=" w-10 h-10 opacity-50 hover:opacity-100 transition duration-700 cursor-pointer left-arrow"
                    alt=""
                    onClick={() => slideLeft("technical-slider")}
                />
                <div
                    id="technical-slider"
                    className="flex px-4 overflow-x-scroll gap-8 py-6 scroll scroll-smooth whitespace-nowrap md:snap-x"
                >
                    {technicalEventsMap}
                </div>
                <img
                    src="https://img.icons8.com/ios/50/ffffff/right-squared--v1.png"
                    className=" w-10 h-10 opacity-50 hover:opacity-100 transition duration-700 cursor-pointer right-arrow"
                    alt=""
                    onClick={() => slideRight("technical-slider")}
                />
            </div>
        </div>
    )
}

export default TechnicalEvents
