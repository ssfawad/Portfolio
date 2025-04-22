import { LinearGradient } from "react-text-gradients";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/facebook";
import MouseScroll from "../components/MouseScroll";
import { socialLinks } from "../constants/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';


const Hero = () => {
  const [waveTrigger, setWaveTrigger] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveTrigger(true);
      setTimeout(() => setWaveTrigger(false), 1000); // Reset after animation
    }, 4000); // Wave every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="min-h-screen w-full flex flex-col relative items-center justify-center px-4"
        id="home"
      >
        <div className="max-w-7xl mx-auto flex flex-col c-space gap-7 items-center">
          <h2 className="sm:text-3xl md:text-4xl text-2xl font-medium text-white text-center">
            Hi, my name is{" "}
            <span className="inline-block sm:text-7xl md:text-8xl text-6xl">
              <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
                 Syed Fawad
              </LinearGradient>
            </span>
          </h2>

          <h2 className="mt-2 text-4xl md:text-6xl font-bold flex items-baseline justify-center gap-7">
            <span className="text-white">I am a  </span>
            <span className="inline-block text-red-500">
              <Typewriter
                options={{
                  strings: ['Cloud Engineer', 'Developer', 'Chai Lover', 'Fast Learner', 'Nap Taker'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000,
                  deleteSpeed: 50,
                  delay: 75,
                }}
              />
            </span>
          </h2>



        </div>
        <motion.div
          className="flex flex-row gap-4 justify-center mt-10 max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={
                waveTrigger
                  ? {
                      y: [0, -10, 0], // Wave motion
                      transition: {
                        delay: index * 0.1,
                        duration: 0.6,
                        ease: "easeInOut",
                      },
                    }
                  : {}
              }
            >
              <SocialIcon className="heroIcon" url={link.url} />
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute bottom-5">
          <MouseScroll />
        </div>
      </section>
    </>
  );
};

export default Hero;
