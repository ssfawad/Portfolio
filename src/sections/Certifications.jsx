import { LinearGradient } from "react-text-gradients";
import { motion } from "framer-motion";

const certs = [
    {
      img: "/certs/awssaa.png",
      alt: "AWS Certified Solutions Architect – Associate",
      url: "https://www.credly.com/badges/5eae90df-976d-4cd5-aaef-fcef4ecc2c76/",
    },
    {
      img: "/certs/awsdev.png",
      alt: "AWS Certified Developer – Associate",
      url: "https://www.credly.com/badges/fcbccb43-cb90-4221-8807-217d76e0b903/",
    },
    {
      img: "/certs/awsdata.png",
      alt: "AWS Certified Data Engineer – Associate",
      url: "https://www.credly.com/badges/f6ec73a9-cab2-42f1-9bac-81f256356183/",
    },
    {
        img: "/certs/sfca.png",
        alt: "Salesforce Certified Administrator",
        url: "https://www.salesforce.com/trailblazer/syedfawad",
    },
  ];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="w-full flex justify-center mb-20 px-4"
    >
      <div className="flex flex-col w-full max-w-7xl items-center justify-start">
        <div className="w-full">
          <motion.h2
            className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Certifications
            </LinearGradient>
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full justify-items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {certs.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={cert.img}
                alt={cert.alt}
                className="h-36 w-auto object-contain"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
