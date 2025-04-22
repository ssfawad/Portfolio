import { motion } from "framer-motion";
import { LinearGradient } from "react-text-gradients";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex justify-center mb-20 px-4"
    >
      <motion.div
        className="flex flex-col w-full max-w-7xl items-center justify-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Header stays the same */}
        <div className="w-full text-left">
          <motion.h2
            className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Get in touch
            </LinearGradient>
          </motion.h2>
        </div>

        {/* Alternative contact block */}
        <div className="flex flex-col items-center justify-center w-full max-w-lg bg-[#32303a] sm:p-8 p-6 rounded-xl text-white">
          <motion.a
            href="mailto:syedsfawad@gmail.com"
            className="bg-[#ff9720] text-black py-3 px-6 rounded-lg font-bold inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Send me an email
          </motion.a>

          <div className="flex mt-6 gap-6">
            {/* GitHub icon with hover */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <SocialIcon
                url="https://github.com/ssfawad"
                fgColor="#fff"
                bgColor="transparent"
                style={{ height: 40, width: 40 }}
                target="_blank"
              />
            </motion.div>

            {/* LinkedIn icon with hover */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <SocialIcon
                url="https://linkedin.com/in/ssfawad"
                fgColor="#fff"
                bgColor="transparent"
                style={{ height: 40, width: 40 }}
                target="_blank"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
