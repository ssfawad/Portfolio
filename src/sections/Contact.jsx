import { motion } from "framer-motion";
import { LinearGradient } from "react-text-gradients";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="w-full flex justify-center mb-20 px-4">
      <motion.div
        className="flex flex-col w-full max-w-7xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="w-full mb-10">
          <motion.h2
            className="xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Get in touch
            </LinearGradient>
          </motion.h2>
          <motion.div
            className="h-1 w-16 bg-[#ff9720] rounded-full mt-3"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Contact card */}
        <div className="bg-[#32303a] sm:p-8 p-6 rounded-xl text-white max-w-lg border border-white/10 mx-auto flex flex-col items-center text-center">
          <p className="text-neutral-400 text-lg mb-6">
            Whether you have a question or just want to say hi — my inbox is always open.
          </p>

          <motion.a
            href="mailto:syedsfawad@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#ff9720] text-black font-bold w-fit mb-2"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            Send me an email
          </motion.a>

          <p className="text-neutral-400 text-sm mb-6 hover:text-white transition-colors duration-200 cursor-default">
            syedsfawad@gmail.com
          </p>

          <div className="border-t border-white/10 w-full mb-6" />

          <div className="flex gap-3">
            <motion.a
              href="https://github.com/ssfawad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-neutral-300 text-sm font-medium hover:bg-white/5 transition-colors duration-200"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <FaGithub size={14} />
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/syed-fawad/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-neutral-300 text-sm font-medium hover:bg-white/5 transition-colors duration-200"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <FaLinkedin size={14} />
              LinkedIn
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
