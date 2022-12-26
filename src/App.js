import ParticlesBackground from "./components/ParticlesBackground";
import EventCard from "./components/EventCard";
const App = () => {
  const goToTop = () => {
    window.location.href = "#events-technical"
  };
  return (
    <div className="App bg-black">
      <ParticlesBackground />

      <div id="landing" className="flex flex-col py-7  text-white min-h-screen  justify-between">
        <div className="flex flex-row justify-center">
          <img src={require('./assets/REC.png')} className="h-15 w-40" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <img src={require('./assets/BootUp_23Logo-White.png')} className="max-w-xs md:max-w-md lg:max-w-lg" alt="" />
          <p className="mt-2 mb-1 tracking-widest font-semibold text-lg ">BROUGHT TO YOU BY</p>
          <p className="font-semibold text-lg tracking-widest px-2">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</p>
        </div>
        <div className="flex flex-row justify-center">
          <button onClick={goToTop} className="border-solid border-2 border-white px-4 py-2 w-fit tracking-widest transition duration-700  hover:bg-violet-500 ">
            EXPLORE
          </button>
        </div>
      </div>
      <div id="events-technical" className="flex flex-col py-7 bg-black text-white min-h-screen ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl tracking-widest">EVENTS</h1>
          <p className="text-gray-400 my-2 text-xl tracking-widest">TECHNICAL</p>
        </div>
        <div className="flex-wrap mx-10 sm:mx-0 justify-center sm:flex gap-10 mt-4">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>

      </div>
      <div id="events-non-technical" className="flex flex-col py-7 bg-black text-white min-h-screen ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl tracking-widest">EVENTS</h1>
          <p className="text-gray-400 my-2 text-xl tracking-widest">NON-TECHNICAL</p>
        </div>
        <div className="flex-wrap mx-10 sm:mx-0 justify-center sm:flex gap-10 mt-4">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
      <div id="sponsers-and-organizers" className="flex flex-col py-7 bg-black text-white min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl tracking-widest">SPONSERS</h1>
          <div className="flex flex-col items-center md:flex-row md:justify-around w-full my-10 flex-wrap">
            <img src={require('./assets/csiCert.png')} className="w-52 h-52  " alt="" />
            <img src={require('./assets/ieeeCert.png')} className="w-52 h-52  " alt="" />
            <img src={require('./assets/acmCert.png')} className="w-52 h-52  " alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl tracking-widest">ORGANIZERS</h1>
          <div className="flex flex-row justify-around w-full my-10">
            NAMES OF ORGANIZERS GOES HERE!
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
