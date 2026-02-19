import { LinearGradient } from "react-text-gradients";
import { motion } from "framer-motion";

const certs = [
  {
    img: "certs/awssaa.png",
    alt: "AWS Certified Solutions Architect – Associate",
    label: "Solutions Architect",
    issuer: "AWS",
    url: "https://www.credly.com/badges/5eae90df-976d-4cd5-aaef-fcef4ecc2c76/",
  },
  {
    img: "certs/awsdev.png",
    alt: "AWS Certified Developer – Associate",
    label: "Developer",
    issuer: "AWS",
    url: "https://www.credly.com/badges/fcbccb43-cb90-4221-8807-217d76e0b903/",
  },
  {
    img: "certs/awsdata.png",
    alt: "AWS Certified Data Engineer – Associate",
    label: "Data Engineer",
    issuer: "AWS",
    url: "https://www.credly.com/badges/f6ec73a9-cab2-42f1-9bac-81f256356183/",
  },
  {
    img: "certs/sfca.png",
    alt: "Salesforce Certified Administrator",
    label: "Administrator",
    issuer: "Salesforce",
    url: "https://www.salesforce.com/trailblazer/syedfawad",
  },
  {
    img: "certs/comptia_secplus.png",
    alt: "CompTIA Security+",
    label: "Security+",
    issuer: "CompTIA",
    url: "https://www.credly.com/badges/4c2ed259-f10d-4a51-b178-221bcc4c61e1/public_url",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="w-full flex justify-center mb-20 px-4"
    >
      <div className="flex flex-col w-full max-w-7xl items-center justify-start">
        <div className="w-full mb-10">
          <motion.h2
            className="xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Certifications
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full justify-items-center">
          {certs.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-[#ff9720]/50 hover:shadow-[0_0_20px_rgba(255,151,32,0.2)] transition-all duration-300 w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={cert.img}
                alt={cert.alt}
                className="h-36 w-auto object-contain"
                loading="lazy"
              />
              <div className="text-center">
                <p className="text-white text-sm font-semibold">{cert.label}</p>
                <p className="text-neutral-400 text-xs">{cert.issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
