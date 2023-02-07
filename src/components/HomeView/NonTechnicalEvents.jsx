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
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
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
                    event: "+91 93613 25944",
                    image: "Vanmam/Vanmam_MOHANAPRIYA-min.jpg",
                },
                {
                    name: "Potheeswari J",
                    event: "+91 95002 80512",
                    image: "Vanmam/Vanmam_Potheeswari J.jpg",
                },
                {
                    name: "Pavithra S",
                    event: "+91 94449 65295",
                    image: "Vanmam/Vanmam_Pavithra S.jpeg",
                },
                {
                    name: "Mierudhula Sa",
                    event: "+91 96598 30830",
                    image: "Vanmam/Vanmam_Mierudhula Sa.jpg",
                },
            ],
            link: "https://www.rajalakshmi.org/bootup23/",
        },
        {
            name: "Ready Player One",
            info: "(Valorant)",
            icon: "https://img.icons8.com/ios/100/ffffff/valorant.png",
            route: "/ready-player-one-valorant",
            description:
                "Ready, Steady, Game...\n\nAttack, Defend and Win. It’s the time to apply your strategies and gaming skills to test. \n\n               Experience the ultimate gaming battle in the virtual world of Valorant with our 'Ready Player One' event! Gather your team, sharpen your skills, this event will test your abilities, your strategy, and your ability to navigate the virtual world. Will you be the one to conquer the battleground and emerge victorious? Let the game begins!",
            short_description: "Online Event\n\n* Entry Fee : Rs. 200 per team *",
            rules: [
                "This is a online event, which will be for two days, 11th and 12th of February",
                "Players should play on their main account.",
                "A knockout system will be followed",
                "Maps will be decided by community vote.",
                "Any instance of cheating will result in an immediate removal from the tournament.",
                "Trash talking during/after the game is not encouraged,will result in immediate disqualification.",
                "Both teams will be playing a 5v5 mode in custom game,time out can be claimed and cheats are disabled",
            ],
            roundDescriptions: [
                // "1. This is an online round.\n\n2. Players winning both the matches will advance to the next round.",
                // "1. This is an offline round.\n\n2. PCs will be provided for this round of matches.",
            ],
            type: "Team Event (Exactly 5 members + Substitutes as needed)",
            eligibility: "Rounds vary as the teams progress.",
            organizers: [
                {
                    name: "Dhanush Aravind A",
                    event: "+91 91761 58019",
                    image: "valorant/ReadyPlayerOne(Valorant)_Dhanush.jpg",
                },
                {
                    name: "Adesh Sai A",
                    event: "+91 99405 81913",
                    image: "valorant/Adesh.jpg",
                },
                {
                    name: "Udhayachandiran",
                    event: "+91 73959 89910",
                    image: "valorant/udhayachandiran.jpg",
                },
                {
                    name: "Venkatesan R S",
                    event: "+91 99625 65751",
                    image: "valorant/valo_venkat.jpg",
                },
            ],
            link: "https://forms.gle/Lj5yAWDXzZvYW3HE7",
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
                    event: "+91 93615 70062",
                    image: "bgmi/BGMI_ SUDARCHANAN.jpg",
                },
                {
                    name: "Varun S",
                    event: "+91 80720 61100",
                    image: "bgmi/BGMI_VARUN.jpg",
                },
                {
                    name: "Sriram TK",
                    event: "+91 94455 39784 ",
                    image: "bgmi/BGMI_SRIRAM.jpg",
                },

            ],
            link: "https://forms.gle/Lj5yAWDXzZvYW3HE7",
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
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
                "The theme of this event is based on ‘Pop Culture’ (Eg: Chandler, Yogi Babu, Elon Musk, and people not in politics).",
                "Every participant will be given a personality and 30 seconds to prepare, following which they need to let the judges know why they should be selected as president.",
                "Usage of profanity is discouraged",
                "Usage of both tamil and english is allowed.",
                "Time limit of 2-3 minutes will be provided to each participants.",
                "The Panel will score the participant's performance based on reasoning, fluency, and the participant's ability to grab the attention of the audience.",
                "The Panel's decision is final.",
            ],
            roundDescriptions: [],
            type: "Individual Event",
            eligibility: "1 Round",
            organizers: [
                {
                    name: "Anagha Nambiar",
                    event: "+91 93840 00428",
                    image: "Oru Naal President/OruNaalPresident_AnaghaNambiar.jpg",
                },
                {
                    name: "Deepthi P",
                    event: "+91 77089 51558",
                    image: "Oru Naal President/Deepthi_P.jpeg",
                },
                {
                    name: "Nandita Sajeev",
                    event: "+91 73584 40920",
                    image: "Oru Naal President/Nandita_Sajeev.jpg",
                },
            ],
            link: "https://www.rajalakshmi.org/bootup23/",
        },
        {
            name: "Fandom Wars",
            info: "Fandom Quiz",
            icon: "https://img.icons8.com/ios-filled/100/ffffff/fandom.png",
            route: "/fandom-quiz",
            description:
                "Get to know if you have what it takes to be the ultimate fan of pop culture. We challenge your knowledge in Pop culture movies, TV sitcoms, Anime and Comics. Brush up the details and be ready with the Batman to your Robin, the Joey to your Phoebe, the Sheldon to your Leonard, the Dr. Bruce to your Stark. To face the burning questions.\n\n ",
            short_description: "Offline Event",
            rules: [
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
                "The domain for this event includes popular television series both new & old and other pop culture references.",
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
                    event: "+91 63836 90775",
                    image: "Fandom wars/Fandomwars_Anjana.jpeg",
                },
                {
                    name: "Deepika R",
                    event: "+91 88700 09343",
                    image: "Fandom wars/Fandomwars_Deepika.jpg",
                },
                {
                    name: "Dhanalakshmi R",
                    event: "+91 90251 28205",
                    image: "Fandom wars/FandomWars-Dhanalakshmi.jpeg",
                },
                {
                    name: "Kesheka E",
                    event: "+91 94455 35577",
                    image: "Fandom wars/FandomWars-E Kesheka.jpg",
                },
            ],
            link: "https://www.rajalakshmi.org/bootup23/",
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
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
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
                    event: "+91 91509 98095",
                    image: "NaduvulaKonjamAudiovaKanom/nkak_aruna.jpg",
                },
                {
                    name: "Deepasree R",
                    event: "+91 91501 83228",
                    image: "NaduvulaKonjamAudiovaKanom/IMG_20220306_141201.jpg",
                },
                {
                    name: "Geethanjali M",
                    event: "+91 63693 11310",
                    image: "NaduvulaKonjamAudiovaKanom/NaduvulaKonjamAudiovaKanom-Geethanjali.jpeg",
                },
            ],
            link: "https://www.rajalakshmi.org/bootup23/",
        },
        // {
        //     name: "Tiki-Taka ",
        //     info: "Futsal",
        //     icon: "https://img.icons8.com/ios-glyphs/90/ffffff/beach-soccer.png",
        //     route: "/tiki-taka",
        //     description:
        //         "Unleash your inner football star in our ultimate Tiki-Taka tournament! Assemble your team, perfect your strategy and unleash your skills as you battle it out on the field for glory. With a series of challenging opponents to face, this event is designed to test your limits and bring out the champion in you. Will you lead your team to victory and lift the coveted Tiki-Taka? Sign up now and let the games begin!",
        //     short_description: "Offline Event\n\n* Entry Fee : Rs. 400 per team *",
        //     rules: [
        //         "Maximum of 8 people in a team is allowed.",
        //         "5 players are allowed on the pitch at anytime and the rest are substitutes.",
        //         "The timings of the event will be 5+5 minutes, and a break of 1 minute will be given.",
        //         "College ID cards are required for verification.",
        //         "Goalkeeper gloves, shin pads, and full stockings are required.",
        //         "A knockout system will be followed.",
        //         "Teams must report before their matches.",
        //         "Any kind of intentional physical contact or use of foul language on the pitch will lead to disqualification from the event",
        //         "The referee's decision is final.",
        //     ],
        //     roundDescriptions: [],
        //     type: "Team Event (5 players + 3 substitutes)",
        //     eligibility: "Knockout",
        //     organizers: [
        //         {
        //             name: "Harish S",
        //             event: "+91 79048 87508",
        //             image: "tiki-taka/Harish.jpg",
        //         },
        //         {
        //             name: "Lakshmi Prasath",
        //             event: "+91 70103 58491",
        //             image: "tiki-taka/LakshmiPrasath.jpg",
        //         },
        //         {
        //             name: "Krishna Vamsee",
        //             event: "+91 97898 01173",
        //             image: "tiki-taka/KrishnaVamsee.png",
        //         },
        //         {
        //             name: "Jabez Samuel W",
        //             event: "+91 63691 22317",
        //             image: "tiki-taka/JabezSamuel.jpg",
        //         },
        //         {
        //             name: "Kevin Austin",
        //             event: "+91 90807 95301",
        //             image: "tiki-taka/Kevin.jpg",
        //         },
        //     ],
        //     link: "https://forms.gle/qkLP2rBUWoS5NwPE9",
        // },
        {
            name: "Master the Blaster",
            info: "Box Cricket",
            icon: "https://img.icons8.com/ios/100/ffffff/cricket.png",
            route: "/master-the-blaster",
            description:
                "Ready, set, blast! Join our epic Master The Blaster Box Cricket tournament and showcase your skills as you lead your team to glory. With challenging opponents and thrilling matches, this event is the ultimate test of your cricketing talent and strategy. Will you reign supreme and lift the Master The Blaster trophy? Sign up now and let the games begin!",
            short_description: "Offline Event\n\n* Entry Fee : Rs. 200 per team *",
            rules: [
                "The team must consist of 5 players.",
                "A total of 16 teams can participate in this event.",
                "The registrations will be closed once 16 teams have registered.",
                "Every match is a knockout match.",
                "Every innings will be for 5 overs.",
                "Timings for each match will be for 30 minutes (maximum).",
                "Every team should bring their own bat.",
                "Umpire's decision will be final.",
                "Ball type : Mercury+ (tennis ball)",
            ],
            roundDescriptions: [],
            type: "Team Event (Exactly 5 players)",
            eligibility: "Open to all departments",
            organizers: [
                {
                    name: "Sabarish Abishek",
                    event: "+91 70102 04983",
                    image: "Master The Blaster/Master the Blaster - Sabarish Abishek W R.jpg",
                },
                {
                    name: "Riyazuddin",
                    event: "+91 93614 98467",
                    image: "Master The Blaster/Master the Blaster - Riyazuddin R.jpg",
                },
                {
                    name: "Sabarish VU",
                    event: "+91 98401 82224",
                    image: "Master The Blaster/Master the Blaster - Sabarish V U.jpg",
                },
                {
                    name: "Santhosh R",
                    event: "+91 63827 04684",
                    image: "Master The Blaster/Master the Blaster - Santhosh R.jpg",
                },
                {
                    name: "Sasidharan S",
                    event: "+91 86681 82011",
                    image: "Master The Blaster/Master the blaster-Sasidharan S.jpg",
                },
            ],
            link: "https://forms.gle/Lj5yAWDXzZvYW3HE7",
        },
        {
            name: "Kodak",
            info: "Photograph",
            icon: "https://img.icons8.com/ios-glyphs/90/ffffff/compact-camera.png",
            route: "/kodak",
            description:
                "The art of capturing moments is called photography.This is your chance to showcase your talent and creativity in photography.This is an individual event which consists of 2 rounds . The theme of the first round (selection round) will be pet animals / vehicals. All the registered participants will be asked to select one Theme and submit their picture only in JPEG / PNG format .The pictures will be evaluated and shortlisted for the second round.\n\n Selected participants should be present in the campus .The second round (Final round) will have 2 sub divisions. Each participant will be asked to submit 2 picture based on macro photography and 3 pictures of other ongoing bootup events in the campus. pictures submitted will be evaluated and winner will be announced.\n",
 
            short_description: "Single round (online submission) Participants should be present in campus",
            rules: [
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
                "Participants can use any kind of device to capture pictures.",
                "The photograph must be original and no watermark of any kind should be on the photograph.",
                "The photograph must be of the highest resolution possible.",
                "The photograph that has been digitally altered beyond standard optimization (dust removal, cropping, color, contrast, etc.) will be disqualified.",
                "For final round submission, both macro photography submission and event photography submissions are required.",
                "Photographs should be submitted in JPEG and PNG format; other formats are not valid and will be disqualified.",
                "The file Name should be the candidate name and phone number.",
                "The Panel's decision is final.",
            ],
            roundDescriptions: [
                "1. This will be conducted offline in the college premises.\n\n2. Participants are encouraged to stroll around the campus and capture the magic of the symposium.\n\n3. The participants are asked to submit two photos based on the theme of macro photography and a minimum of 4 photos of other events conducted in BOOTUP'23.",
            ],
            type: "Individual Event",
            eligibility: "1 Round",
            organizers: [
                {
                    name: "Sharveshwaran",
                    event: "+91 73972 45931",
                    image: "Kodak/Kodak_Sharveshwaran.jpg",
                },
                {
                    name: "Shwetha M",
                    event: "+91 73582 78497",
                    image: "Kodak/Kodak_Shwetha.jpg",
                },
                {
                    name: "Santoshkumar",
                    event: "+91 91501 59685",
                    image: "Kodak/Kodak_Santoshkumar.jpg",
                },
            ],
            link: "https://www.rajalakshmi.org/bootup23/",
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
                "You can register and participate in a total of 6 events with the entry fee of 150 rupees. The events excluded in this entry are: Ready Player One, Master The Blaster.",
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
                    event: "+91 98403 88293",
                    image: "She Boss/She Boss-Varsha P.jpg",
                },
                {
                    name: "Urjha MB",
                    event: "+91 93614 79789",
                    image: "She Boss/She Boss-Urjha M B.jpg",
                },
                {
                    name: "Pooja V",
                    event: "+91 90256 62885",
                    image: "She Boss/She_boss_-_Pooja_V.jpg",
                },
            ],
            link: "https://www.rajalakshmi.org/bootup23/",
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
            <div className="flex mx-2 gap-4 items-center justify-center">
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
