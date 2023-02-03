import PromotionsCard from "../components/PromotionsCard/PromotionsCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import "./light.css";
import ParticlesBackground from "../components/ParticlesBackground";

const Promotions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const websiteTeam = [
    {
        name: "Suriya Prakash",
        team: "Website Team",
        image: "promotions/Website_SuriyaPrakash.jpg",
      },
    {
      name: "Mano Sanjay",
      team: "Website Team",
      image: "promotions/Website_ManoSanjay.jpg",
    },
    {
      name: "Subhash",
      team: "Website Team",
      image: "promotions/Website_SubhashB.jpg",
    },
    {
      name: "Keshav",
      team: "Website Team",
      image: "promotions/Website_keshav.jpg",
    },
  ];
  const socialmediaTeam = [
    {
      name: "Muqaddam Aaqil Sheriff",
      team: "Social Media Team",
      image: "promotions/Socialmedia_Aaqil.jpeg",
    },
    {
      name: "Supriya",
      team: "Social Media Team",
      image: "promotions/socialmedia_supriya.jpeg",
    },
    {
      name: "Kamalakshi ",
      team: "Social Media Team",
      image: "promotions/SocialMedia_Kamalakshi.jpg",
    },
  ];
  const designTeam = [
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
      name: "Chandini Devi",
      team: "Design Team",
      image: "promotions/Design team-Chandini.jpg",
    },
    {
      name: "Abirami",
      team: "Design Team",
      image: "promotions/WhatsApp Image 2023-01-31 at 8.27.33 PM.jpeg",
    },
    {
      name: "Angelin Gracia",
      team: "Design Team",
      image: "promotions/Design team - Angelin Gracia A .jpg",
    },
  ];
  const videoTeam = [
    {
      name: "Rohit Gangadhar ",
      team: "Video Team",
      image: "promotions/Rohith Gangadhar-min.JPG",
    },
    {
      name: "Rifhath Aslam ",
      team: "Video Team",
      image: "promotions/Rifhath.jpg",
    },
    {
      name: "Sai Nishit ",
      team: "Video Team",
      image: "promotions/Videoteam_R Sai Nishit.jpg",
    },
    {
      name: "Vijayakumar ",
      team: "Video Team",
      image: "promotions/Vijayakumar.jpeg",
    },
  ];
  
  
  return (
    <div>
      <ParticlesBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
        id="event-details"
        className="flex flex-col pt-7 bg-black bg-opacity-50"
      >
        <div
          class="light flex justify-center text-4xl mb-5"
          data-text="PROMOTIONS TEAM"
        >
          <h1>PROMOTIONS TEAM</h1>
        </div>
        <div
          class="light flex justify-center text-2xl mt-5"
          data-text="WEBSITE TEAM"
        >
          <h1>WEBSITE TEAM</h1>
        </div>
        <div className="flex gap-4 items-center justify-center">
          
          <div
            id="coordinators-slider"
            className="flex px-4 overflow-x-scroll overflow-hidden gap-8 py-6 scroll scroll-smooth whitespace-nowrap md:snap-x lg:flex lg:flex-wrap lg:justify-center"
          >
            {websiteTeam.map((e, index) => {
              return (
                <PromotionsCard
                  name={e.name}
                  team={e.team}
                  image={e.image}
                  index={index}
                />
              );
            })}
          </div>
          
        </div>
        <div
          class="light flex justify-center text-2xl mt-5"
          data-text="SOCIAL MEDIA TEAM"
        >
          <h1>SOCIAL MEDIA TEAM</h1>
        </div>
        <div className="flex gap-4 items-center justify-center">
          
          <div
            id="coordinators-slider"
            className="flex px-4 overflow-x-scroll overflow-hidden gap-8 py-6 scroll scroll-smooth whitespace-nowrap md:snap-x lg:flex lg:flex-wrap lg:justify-center"
          >
            {socialmediaTeam.map((e, index) => {
              return (
                <PromotionsCard
                  name={e.name}
                  team={e.team}
                  image={e.image}
                  index={index}
                />
              );
            })}
          </div>
          
        </div>
        <div
          class="light flex justify-center text-2xl mt-5"
          data-text="VIDEO TEAM"
        >
          <h1>VIDEO TEAM</h1>
        </div>
        <div className="flex  gap-4 items-center justify-center">
          
          <div
            id="coordinators-slider"
            className="flex px-4 overflow-x-scroll overflow-hidden gap-8 py-6 scroll scroll-smooth whitespace-nowrap md:snap-x lg:flex lg:flex-wrap lg:justify-center"
          >
            {videoTeam.map((e, index) => {
              return (
                <PromotionsCard
                  name={e.name}
                  team={e.team}
                  image={e.image}
                  index={index}
                />
              );
            })}
          </div>
          
        </div>
        <div
          class="light flex justify-center text-2xl mt-5"
          data-text="DESIGN TEAM"
        >
          <h1>DESIGN TEAM</h1>
        </div>
        <div className="flex  gap-4 items-center justify-center">
          
          <div
            id="coordinators-slider"
            className="flex px-4 overflow-x-scroll overflow-hidden gap-8 py-6 scroll scroll-smooth whitespace-nowrap md:snap-x lg:flex lg:flex-wrap lg:justify-center"
          >
            {designTeam.map((e, index) => {
              return (
                <PromotionsCard
                  name={e.name}
                  team={e.team}
                  image={e.image}
                  index={index}
                />
              );
            })}
          </div>
          
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Promotions;
