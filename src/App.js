import ParticlesBackground from "./components/ParticlesBackground";
import EventCard from "./components/EventCard";
const App = () => {
  const goToTechnical = () => {
    window.location.href = "#events-technical"
  };
  const technicalEvents = [
    {
      name: "Silicon Valley",
      info: "Project Expo",
      icon: "https://img.icons8.com/windows/96/ffffff/profitable-idea.png",
      route: "/silicon-valley",
      description: "",
    },
    {
      name: "The Revolution",
      info: "Paper Presentation",
      icon: "https://img.icons8.com/windows/96/ffffff/presentation-screen.png",
      route: "/the-revolution",
      description: "",
    },
    {
      name: "404 Not Found",
      info: "Bug Hunting",
      icon: "https://img.icons8.com/ios/100/ffffff/bug.png",
      route: "/404-not-found",
      description: "",
    },
    {
      name: "iCatching",
      info: "Web Development",
      icon: "https://img.icons8.com/ios/100/ffffff/web.png",
      route: "/icatching",
      description: "",
    },
    {
      name: "Halt and Catch Fire",
      info: "Code Relay",
      icon: "https://img.icons8.com/ios/100/ffffff/keyboard.png",
      route: "/halt-and-catch-fire",
      description: "",
    },
    {
      name: "The Perfect Exploit",
      info: "Capture the flag",
      icon: "https://img.icons8.com/ios/100/ffffff/flag--v1.png",
      route: "/the-perfect-exploit",
      description: "",
    },
    {
      name: "The Office",
      info: "Interview",
      icon: "https://img.icons8.com/ios-filled/100/ffffff/briefcase.png",
      route: "/the-office",
      description: "",
    },
    {
      name: "Machine Impossible",
      info: "PC Assembling",
      icon: "https://img.icons8.com/ios/100/ffffff/workstation.png",
      route: "/machine-impossible",
      description: "",
    },
    {
      name: "Ex Machina",
      info: "RPA",
      icon: "https://img.icons8.com/material-rounded/96/ffffff/bot.png",
      route: "/ex-machina",
      description: "",
    },
    {
      name: "Fly High",
      info: "Drone Event",
      icon: "https://img.icons8.com/material-rounded/96/ffffff/drone.png",
      route: "/fly-high",
      description: "",
    },
  ]
  const nonTechnicalEvents = [
    {
      name: "#Vanmam",
      info: "Rant Talk",
      icon: "https://img.icons8.com/ios-filled/100/ffffff/voice-recognition-scan.png",
      route: "/vanmam",
      description: "",
    },
    {
      name: "Ready Player One",
      info: "(Valorant)",
      icon: "https://img.icons8.com/ios/100/ffffff/valorant.png",
      route: "/ready-player-one-valorant",
      description: "",
    },
    {
      name: "Ready Player One",
      info: "(BGMI)",
      icon: "https://img.icons8.com/ios-glyphs/90/ffffff/pubg.png",
      route: "/ready-player-one-bgmi",
      description: "",
    },
    {
      name: "Oru Naal President",
      info: "Presidential Campaign",
      icon: "https://img.icons8.com/external-others-pike-picture/100/ffffff/external-President-democracy-others-pike-picture-3.png",
      route: "/oru-naal-president",
      description: "",
    },
    {
      name: "Fandom Wars",
      info: "Fandom Quiz",
      icon: "https://img.icons8.com/ios-filled/100/ffffff/fandom.png",
      route: "/fandom-quiz",
      description: "",
    },
    {
      name: "Naduvula Konjam Audio-va Kaanom",
      info: "Audio Dubbing",
      icon: "https://img.icons8.com/material-sharp/96/ffffff/micro.png",
      route: "/naduvula-konjam-audiova-kaanom",
      description: "",
    },
    {
      name: "Tiki-Taka",
      info: "Football",
      icon: "https://img.icons8.com/ios-glyphs/90/ffffff/beach-soccer.png",
      route: "/tiki-taka",
      description: "",
    },
    {
      name: "Master the Blaster",
      info: "Box Cricket",
      icon: "https://img.icons8.com/ios/100/ffffff/cricket.png",
      route: "/master-the-blaster",
      description: "",
    },
    {
      name: "Kodak",
      info: "Photograph",
      icon: "https://img.icons8.com/ios-glyphs/90/ffffff/compact-camera.png",
      route: "/kodak",
      description: "",
    },
    {
      name: "She Boss!",
      info: "Exclusive to WOMEN",
      icon: "https://img.icons8.com/ios-filled/100/ffffff/woman-head.png",
      route: "/she-boss",
      description: "",
    },
  ]

  const technicalEventsMap = technicalEvents.map((e) => {
    return <EventCard name={e.name} info={e.info} icon={e.icon} />
  })
  const nonTechnicalEventsMap = nonTechnicalEvents.map((e) => {
    return <EventCard name={e.name} info={e.info} icon={e.icon} />
  })
  return (
    <div className="App ">
      <ParticlesBackground />

      <div id="landing" className="flex flex-col py-7  text-white min-h-screen  justify-between">
        <div className="flex flex-row justify-center">
          <img src={require('./assets/REC.png')} className="h-15 w-40" alt="" />
        </div>
        <div id="logo-and-line" className="flex flex-col items-center justify-center text-center">
          <img src={require('./assets/BootUp_23Logo-White.png')} className="max-w-xs md:max-w-md lg:max-w-lg" alt="" />
          <p className="mt-2 mb-1 wide-text font-semibold text-md ">BROUGHT TO YOU BY</p>
          <p className="font-semibold wide-text text-md  px-2">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</p>
        </div>
        <div className="flex flex-row justify-center">
          <button id="explore-button" onClick={goToTechnical} className="border-solid border-2 wide-text border-white px-4 py-2 w-fit tracking-widest transition duration-700  hover:bg-blue-400 ">
            EXPLORE
          </button>
        </div>
      </div>
      <div id="events-technical" className="flex flex-col py-7 sm:px-6 bg-black text-white min-h-screen ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold wide-text">EVENTS</h1>
          <p className="text-gray-400 my-2 font-semibold text-xl wide-text">TECHNICAL</p>
        </div>
        <div className="flex-wrap mx-10 sm:mx-0 justify-center sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10  mt-4">
          {technicalEventsMap}
        </div>

      </div>
      <div id="events-non-technical" className="flex flex-col py-7 sm:px-6 bg-black text-white min-h-screen ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl wide-text">EVENTS</h1>
          <p className="text-gray-400 my-2 text-xl wide-text">NON-TECHNICAL</p>
        </div>
        <div className="flex-wrap mx-10 sm:mx-0 justify-center sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10  mt-4">
          {nonTechnicalEventsMap}
        </div>
      </div>
      <div id="sponsers-and-organizers" className="flex flex-col py-7 bg-black text-white min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl wide-text">SPONSERS</h1>
          <div className="flex flex-col items-center md:flex-row md:justify-around w-full my-10 flex-wrap">
            <img src={require('./assets/csiCert.png')} className="w-52 h-52  " alt="" />
            <img src={require('./assets/ieeeCert.png')} className="w-52 h-52  " alt="" />
            <img src={require('./assets/acmCert.png')} className="w-52 h-52  " alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl wide-text">ORGANIZERS</h1>
          <div className="flex flex-row justify-around w-full my-10">
            NAMES OF ORGANIZERS GOES HERE!
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
