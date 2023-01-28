import EventCard from "../../components/EventCard/EventCard";
import '../arrow.css'
const NonTechnicalEvents = () => {
    const nonTechnicalEvents = [
        {
            name: "#Vanmam",
            info: "Rant Talk",
            icon: "https://img.icons8.com/ios-filled/100/ffffff/voice-recognition-scan.png",
            route: "/vanmam",
            description:
                "Ranting is like yoga, it is healthy but it is not everyones cup of tea. Vanmam presents a platform for the ranter in you to shine and show off your skills.               Participants will be given an image, which will be the main subject of the rant.  The participant will be evaluated on their logic, comedic skills, quick wit, and stage presence.",
            short_description: "Offline Event",
            rules: [
                "Participants will be provided with a picture of a celebrity, animal, meme & so on and are asked to rant about it.",
                "For example, participants are shown an image such as an image of 2 small dogs and they are asked to hate or rant about that image",
                "Time limit of 2-3 minutes will be provided to each participants.",
                "Usage of profanity is discouraged",
                "Usage of both tamil and english is allowed.",
                "The participant with the most logical, comical and fluent speech is declared the winner.",
            ],
            roundDescriptions: [],
            type: "Individual Event",
            eligibility: "1 Round",
            organizers: [
                {
                    name: "Mohanapriya R",
                    event: "#Vanmam",
                    image: "Vanmam/Vanmam_",
                },
                {
                    name: "Potheeswari J",
                    event: "#Vanmam",
                    image: "Vanmam/Vanmam_Potheeswari J.jpg",
                },
                {
                    name: "Pavithra S",
                    event: "#Vanmam",
                    image: "Vanmam/Vanmam_Pavithra S.jpeg",
                },
                {
                    name: "Mierudhula Sa",
                    event: "#Vanmam",
                    image: "Vanmam/Vanmam_Mierudhula Sa.jpg",
                },
            ],
            link: "",
        },
        {
            name: "Ready Player One",
            info: "(Valorant)",
            icon: "https://img.icons8.com/ios/100/ffffff/valorant.png",
            route: "/ready-player-one-valorant",
            description:
                "Ready, Steady, Game...\n\nAttack, Defend and Win. It’s the time to apply your strategies and gaming skills to test. \n\n               Experience the ultimate gaming battle in the virtual world of Valorant with our 'Ready Player One' event! Gather your team, sharpen your skills, this event will test your abilities, your strategy, and your ability to navigate the virtual world. Will you be the one to conquer the battleground and emerge victorious? Let the game begins!",
            short_description: "Offline Event\n\n* Entry Fee : Rs. 50 per person *",
            rules: [
                "Players should play on their main account.",
                "A knockout system will be followed",
                "Maps will be decided by community vote.",
                "Any instance of cheating will result in an immediate removal from the tournament.",
                "Trash talking during/after the game is not encouraged,will result in immediate disqualification.",
                "Both teams will be playing a 5v5 mode in custom game,time out can be claimed and cheats are disabled",
            ],
            roundDescriptions: [
                "1. This is an online round.\n\n2. Players winning both the matches will advance to the next round.",
                "1. This is an offline round.\n\n2. PCs will be provided for this round of matches.",
            ],
            type: "Team Event (Exactly 5 members + Substitutes as needed)",
            eligibility: "2 Rounds",
            organizers: [
                {
                    name: "Dhanush Aravind A",
                    event: "Ready Player One",
                    image: "",
                },
                {
                    name: "Adesh Sai A",
                    event: "Ready Player One",
                    image: "",
                },
                {
                    name: "Udhayachandhiran",
                    event: "Ready Player One",
                    image: "",
                },
                {
                    name: "Venkatesan R S",
                    event: "Ready Player One",
                    image: "",
                },
            ],
            link: "",
        },
        {
            name: "Ready Player One",
            info: "(BGMI)",
            icon: "https://img.icons8.com/ios-glyphs/90/ffffff/pubg.png",
            route: "/ready-player-one-bgmi",
            description:
                "Ready, Steady, Game...\n\nAttack, Defend and Win. It’s the time to apply your strategies and gaming skills to test. \n\n               Experience the ultimate gaming battle in the virtual world of BGMI(Battlegrounds Mobile India) with our 'Ready Player One' event! Gather your team, sharpen your skills, this event will test your abilities, your strategy, and your ability to navigate the virtual world. Will you be the one to conquer the battleground and emerge victorious? Let the game begins!,",
            short_description: "Offline Event\n\n* Entry Fee : Rs. 200 per team *",
            rules: [
                "Players should play on their main account.",
                "Maximum duration of a match is 40 minutes",
                "Each team should take a screenshot and submit the result(Ranking).",
                "Any instance of cheating will result in an immediate removal from the tournament.",
                "Trash talking during/after the game is not encouraged and will result in immediate disqualification.",
                "Prizes are based on the number of teams.",
            ],
            roundDescriptions: [],
            type: "Team Event (1-4 members)",
            eligibility: "1 Round",
            organizers: [
                {
                    name: "Sudarchanan MS",
                    event: "Ready Player One",
                    image: "",
                },
                {
                    name: "Varun S",
                    event: "Ready Player One",
                    image: "bgmi/BGMI_VARUN.jpg",
                },
                {
                    name: "Sriram TK",
                    event: "Ready Player One",
                    image: "bgmi/BGMI_SRIRAM.jpg",
                },
                {
                    name: "Sriramakrishnan B",
                    event: "Ready Player One",
                    image: "",
                },
            ],
            link: "",
        },
        {
            name: "Oru Naal President",
            info: "Presidential Campaign",
            icon: "https://img.icons8.com/external-others-pike-picture/100/ffffff/external-President-democracy-others-pike-picture-3.png",
            route: "/oru-naal-president",
            description:
                '"When I become the President I will.." is a statement we dont hear ofter. What would happen if your favourite pop culture idols campaign to be one? Can you convince the judges to vote for them?\n\nOru Naal President tingles the persuader in you while testing your comedic, reasoning and oratorical skills.\n\n Participants are given a character on the spot and are asked to explain why they(as the character) should be elected as the president of the country. The participant with the best reason, fluency and comical element to their speech is deemed the winner.',
            short_description: "Offline Event",
            rules: [
                "The theme of this event is based on ‘Pop Culture’ (Eg: Chandler, Yogi Babu, Elon Musk, and people not in politics).",
                "Every participant will be given a personality and 30 seconds to prepare, following which they need to let the judges know why they should be selected as president.",
                "Usage of profanity is discouraged",
                "Usage of both tamil and english is allowed.",
                "Time limit of 2-3 minutes will be provided to each participants.",
                "The Panel will score the participant's performances based on reasoning, fluency, and the participant's ability to grab the attention of the audience.",
                "The Panel's decision is final.",
            ],
            roundDescriptions: [],
            type: "Individual Event",
            eligibility: "1 Round",
            organizers: [
                {
                    name: "Anagha Nambiar",
                    event: "Oru Naal President",
                    image: "Oru Naal President/OruNaalPresident_AnaghaNambiar.jpg",
                },
                {
                    name: "Deepthi P",
                    event: "Oru Naal President",
                    image: "Oru Naal President/Deepthi_P.jpeg",
                },
                {
                    name: "Nandita Sajeev",
                    event: "Oru Naal President",
                    image: "Oru Naal President/Nandita_Sajeev.jpg",
                },
            ],
            link: "",
        },
        {
            name: "Fandom Wars",
            info: "Fandom Quiz",
            icon: "https://img.icons8.com/ios-filled/100/ffffff/fandom.png",
            route: "/fandom-quiz",
            description:
                "Get to know if you have what it takes to be the ultimate fan of pop culture. We challenge your knowledge in Pop culture movies, TV sitcoms, Anime and Comics. Brush up the details and be ready with the Batman to your Robin, the Joey to your Phoebe, the Sheldon to your Leonard, the Dr. Bruce to your Stark. To face the burning questions.\n\n                The first round is a kahoot quiz round. The time limit would be 20 minutes with around 15-20 questions.\n\n Top-scoring teams would be selected for the finals.\n\n                The second round is a buzzer round. The fastest team to score the highest points will be given the title of the ultimate fan.",
            short_description: "Offline Event",
            rules: [
                "The domain for this event includes popular television series both new & old, movies and other pop culture references.",
                "Internet access is not allowed.",
                "The Panel decision is final.",
            ],
            roundDescriptions: [
                "1. This is a pen-paper round.\n\n2. Each team will be provided with a set of 20 questions and are asked to complete it within the stipulated time.\n\n3. The teams with the highest scores will move on to the final round.",
                "1. This is a buzzer round.\n\n2. A time limit of 30 seconds is provided to answer a question, the team who hit the buzzer has to answer within 5 seconds of pressing it.",
            ],
            type: "Team Event (1 - 2 members)",
            eligibility: "2 Rounds",
            organizers: [
                {
                    name: "Anjana D",
                    event: "Fandom Wars",
                    image: "Fandom wars/Fandomwars_Anjana.JPG",
                },
                {
                    name: "Deepika R",
                    event: "Fandom Wars",
                    image: "Fandom wars/Fandomwars_Deepika.jpg",
                },
                {
                    name: "Dhanalakshmi R",
                    event: "Fandom Wars",
                    image: "Fandom wars/FandomWars-Dhanalakshmi.jpeg",
                },
                {
                    name: "Kesheka E",
                    event: "Fandom Wars",
                    image: "Fandom wars/FandomWars-E Kesheka.jpg",
                },
            ],
            link: "",
        },
        {
            name: "Naduvula Konjam Audio-va Kaanom",
            info: "Audio Dubbing",
            icon: "https://img.icons8.com/material-sharp/96/ffffff/micro.png",
            route: "/naduvula-konjam-audiova-kaanom",
            description:
                "Step into the spotlight and let your dubbing talent shine in our uproarious Naduvula Konjam Audio-va Kaanom event! Gather your team, pick your scenes and get ready for a non-stop laughter ride as you lip-sync and dub over your favourite movies and TV shows. With a wide range of comical and challenging scenes to choose from, this event is the ultimate test of your dubbing skills and creativity. Will you be the one to steal the show? Sign up now and let the fun begin!",
            short_description: "Offline Event",
            rules: [
                "This event is based on ‘Tamil and English Movie Scenes’.",
                "Each participate will be provided with a muted video clip of around 1 minute in duration.",
                "The video will be played once or maximum twice to the participants.",
                "The participants will be given 60 seconds to prepare",
                "Participants should dub for a muted video that will be played for them. The motive is to bring humor with the background vocals for the muted boring video clip.",
                "Usage of profanity is discouraged",
                "The participants will be judged based on their creativity, spontaneity, humor, and consistency.",
                "The Panel's decision is final.",
            ],
            roundDescriptions: [],
            type: "Individual Event",
            eligibility: "1 Round",
            organizers: [
                {
                    name: "Aruna S",
                    event: "Naduvula Konjam Audio-va Kaanom",
                    image: "NaduvulaKonjamAudiovaKanom/",
                },
                {
                    name: "Deepasree R",
                    event: "Naduvula Konjam Audio-va Kaanom",
                    image: "NaduvulaKonjamAudiovaKanom/IMG_20220306_141201.jpg",
                },
                {
                    name: "Geethanjali M",
                    event: "Naduvula Konjam Audio-va Kaanom",
                    image: "NaduvulaKonjamAudiovaKanom/NaduvulaKonjamAudiovaKanom-Geethanjali.jpeg",
                },
            ],
            link: "",
        },
        {
            name: "Tiki-Taka ",
            info: "Futsal",
            icon: "https://img.icons8.com/ios-glyphs/90/ffffff/beach-soccer.png",
            route: "/tiki-taka",
            description:
                "Unleash your inner football star in our ultimate Tiki-Taka tournament! Assemble your team, perfect your strategy and unleash your skills as you battle it out on the field for glory. With a series of challenging opponents to face, this event is designed to test your limits and bring out the champion in you. Will you lead your team to victory and lift the coveted Tiki-Taka? Sign up now and let the games begin!",
            short_description: "Offline Event\n\n* Entry Fee : Rs. 400 per team *",
            rules: [
                "Maximum of 8 people in a team is allowed.",
                "5 players are allowed on the pitch at anytime and the rest are substitutes.",
                "The timings of the event will be 5+5 minutes, and a break of 1 minute will be given.",
                "College ID cards are required for verification.",
                "Goalkeeper gloves, shin pads, and full stockings are required.",
                "A knockout system will be followed.",
                "Teams must report before their matches.",
                "Any kind of intentional physical contact or use of foul language on the pitch will lead to disqualification from the event",
                "The referee's decision is final.",
            ],
            roundDescriptions: [],
            type: "Team Event (5 players + 3 substitutes)",
            eligibility: "Knockout",
            organizers: [
                {
                    name: "Harish S",
                    event: "Tiki-Taka",
                    image: "tiki-taka/Harish.jpg",
                },
                {
                    name: "Lakshmi Prasath S",
                    event: "Tiki-Taka",
                    image: "tiki-taka/.jpg",
                },
                {
                    name: "Krishna Vamsee",
                    event: "Tiki-Taka",
                    image: "tiki-taka/KrishnaVamsee.png",
                },
                {
                    name: "Jabez Samuel W",
                    event: "Tiki-Taka",
                    image: "tiki-taka/JabezSamuel.jpg",
                },
                {
                    name: "Kevin Austin",
                    event: "Tiki-Taka",
                    image: "tiki-taka/Kevin.jpg",
                },
            ],
            link: "",
        },
        {
            name: "Master the Blaster",
            info: "Box Cricket",
            icon: "https://img.icons8.com/ios/100/ffffff/cricket.png",
            route: "/master-the-blaster",
            description:
                "Ready, set, blast! Join our epic Master The Blaster Box Cricket tournament and showcase your skills as you lead your team to glory. With challenging opponents and thrilling matches, this event is the ultimate test of your cricketing talent and strategy. Will you reign supreme and lift the Master The Blaster trophy? Sign up now and let the games begin!",
            short_description: "Offline Event\n\n* Entry Fee : Rs. 100 per team *",
            rules: [
                "The team must consist of 5 players.",
                "A total of 16 teams can participate in this event.",
                "Team allocation will be done on the basis of First Come First Basis",
                "The registrations will be closed once 16 teams have registered.",
                "Every match is a knockout match.",
                "Every innings will be for 5 overs.",
                "Timings for each match will be for 30 minutes (maximum).",
                "Every team should bring their own bat.",
                "The ball type is a Tennis ball (Mercury +).",
                "Umpires decision will be final.",
            ],
            roundDescriptions: [],
            type: "Team Event (Exactly 5 players)",
            eligibility: "Open to all departments",
            organizers: [
                {
                    name: "Sabarish Abishek",
                    event: "Master the Blaster",
                    image: "Master The Blaster/Master the Blaster - Sabarish Abishek W R.jpg",
                },
                {
                    name: "Riyazuddin",
                    event: "Master the Blaster",
                    image: "Master The Blaster/Master the Blaster - Riyazuddin R.jpg",
                },
                {
                    name: "Sabarish VU",
                    event: "Master the Blaster",
                    image: "Master The Blaster/Master the Blaster - Sabarish V U.jpg",
                },
                {
                    name: "Santhosh R",
                    event: "Master the Blaster",
                    image: "Master The Blaster/Master the Blaster - Santhosh R.jpg",
                },
                {
                    name: "Sasidharan S",
                    event: "Master the Blaster",
                    image: "Master The Blaster/Master the blaster-Sasidharan S.jpg",
                },
            ],
            link: "",
        },
        {
            name: "Kodak",
            info: "Photograph",
            icon: "https://img.icons8.com/ios-glyphs/90/ffffff/compact-camera.png",
            route: "/kodak",
            description:
                "The art of capturing moments is called photography. With the whole campus as your subject capture the spirit of the day and wow us with your skills. This is your chance to showcase your talent and creativity in photography. The participants will submit their entries in the form of a presentation and the best pictures should be submitted in the forms provided. The submissions should be in the form of a slideshow and it will be evaluated on the basis of creativity, consistency and the general look and feel.",
            short_description: "First Round is Online & Final round is Offline",
            rules: [
                "Participants can use any kind of device to capture pictures.",
                "The photograph must be original and no watermark of any kind should be on the photograph.",
                "Participants can submit color or black-and-white photography.",
                "The photograph must be of the highest resolution possible.",
                "The photograph that has been digitally altered beyond standard optimization (dust removal, cropping, color, contrast, etc.) will be disqualified.",
                "For final round submission, both macro photography submission and event photography submissions are required.",
                "Photographs should be submitted in JPEG and PNG format; other formats are not valid and will be disqualified.",
                "The Panel's decision is final.",
            ],
            roundDescriptions: [
                "1. This is a selection round.\n\n2. The theme will be pet animals or vehicles. Participants can select any one theme and submit a picture they have shot recently.\n\n3. The finals will be taking place on Feb 13 and the shortlisted participants will be informed prior to the event.",
                "1. This will be conducted offline in the college premises.\n\n2. Participants are encouraged to stroll around the campus and capture the magic of the symposium.\n\n3. The participants are asked to submit two photos based on the theme of macro photography and a minimum of 10 photos of other events conducted in BOOT UP 23.",
            ],
            type: "Individual Event",
            eligibility: "2 Rounds",
            organizers: [
                {
                    name: "Sharveshwaran R",
                    event: "Kodak",
                    image: "Kodak/Kodak_Santoshkumar.jpg",
                },
                {
                    name: "Shwetha M",
                    event: "Kodak",
                    image: "Kodak/Kodak_Sharveshwaran.jpg",
                },
                {
                    name: "Santoshkumar PA",
                    event: "Kodak",
                    image: "Kodak/Kodak_Shwetha.jpg",
                },
            ],
            link: "",
        },
        {
            name: "She Boss!",
            info: "Exclusive to WOMEN",
            icon: "https://img.icons8.com/ios-filled/100/ffffff/woman-head.png",
            route: "/she-boss",
            description:
                "ATTENTION GIRLS !! It’s a callout to all the women entrepreneurs out there. She Boss! Is a womens only event conducted in the spirit of entrepreneurship and women empowerment. Be ready to pitch your product to the judges. Participants are expected to be ready with a product pitch of their own and give their pitch to the juries. The pitches will be judged based on innovation, market viability, fluency, confidence of the contestant and monetary value of the product.",
            short_description: "Offline Event",
            rules: [
                "This event is exclusively for women.",
                "There is no specific theme. Any kind of project tackling real-life problems is accepted.",
                "The participants will be given 5 minutes to pitch their product to the panel.",
                "The participants are required to come prepared with a PPT for the event.",
                "The pitch must represent a clear representation of the problem being solved and the market value along with the investment plans.",
                "The pitches will be judged based on innovation, market viability and the monetary value of the product.",
                "The Panel's decision is final.",
            ],
            roundDescriptions: [],
            type: "Team Event (1 - 2 members)",
            eligibility: "1 Round",
            organizers: [
                {
                    name: "Varsha P",
                    event: "She Boss!",
                    image: "She Boss/She Boss-Varsha P.jpg",
                },
                {
                    name: "Urjha MB",
                    event: "She Boss!",
                    image: "She Boss/She Boss-Urjha M B.jpg",
                },
                {
                    name: "Pooja V",
                    event: "She Boss!",
                    image: "She Boss/She_boss_-_Pooja_V.jpg",
                },
            ],
            link: "",
        },
    ];

    const nonTechnicalEventsMap = nonTechnicalEvents.map((e, index) => {
        return (
            <EventCard
                name={e.name}
                info={e.info}
                icon={e.icon}
                index={index + "-nt"}
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
            id="events-non-technical"
            className="flex flex-col py-10 sm:px-6  text-white  "
        >
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl tracking-widest font-semibold">EVENTS</h1>
                <p className="text-gray-400 my-2 text-xl wide-text font-semibold">
                    NON-TECHNICAL
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
            <div className="flex mx-2 gap-4 items-center">
                <img
                    src="https://img.icons8.com/ios/50/ffffff/left-squared--v1.png"
                    className=" w-10 h-10 opacity-50 hover:opacity-100 transition duration-700 cursor-pointer left-arrow"
                    alt=""
                    onClick={() => slideLeft("non-technical-slider")}
                />
                <div
                    id="non-technical-slider"
                    className="shadow-inner flex px-4 overflow-x-scroll gap-8 py-6 scroll scroll-smooth whitespace-nowrap md:snap-x"
                >
                    {nonTechnicalEventsMap}
                </div>
                <img
                    src="https://img.icons8.com/ios/50/ffffff/right-squared--v1.png"
                    className=" w-10 h-10 opacity-50 hover:opacity-100 transition duration-700 cursor-pointer right-arrow"
                    alt=""
                    onClick={() => slideRight("non-technical-slider")}
                />
            </div>
        </div>
    )
}

export default NonTechnicalEvents;