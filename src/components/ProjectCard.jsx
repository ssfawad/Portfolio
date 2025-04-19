import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="flex flex-col gap-5 relative rounded-lg sm:p-7 py-5 px-5 shadow-2xl shadow-black-200 bg-[#32303a] transition-all duration-200"
      whileHover={{ scale: 1.04, rotate: 2 }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
      style={{ transformOrigin: "center" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Project Image & Social Icon */}
      <div className="backdrop-filter backdrop-blur-3xl w-full rounded-lg relative">
        <img src={project.logo} alt="logo" className="rounded-lg" />
        <div className="absolute inset-0 flex justify-end m-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <SocialIcon className="heroIcon" url={project.source} />
          </motion.div>
        </div>
      </div>

      {/* Project Details */}
      <div className="flex flex-col gap-5 text-white-600 my-2">
        <h2 className="text-xl font-semibold mb-2 text-white font-generalsans">
          {project.title}
        </h2>
        <p className="text-[#afb0b6] text-base font-generalsans">
          {project.desc}
        </p>
        <p className="text-[#afb0b6] text-base font-generalsans">
          {project.subdesc}
        </p>
      </div>

      {/* Tags & Demo Link */}
      <div className="flex flex-col items-start justify-between flex-wrap gap-5">
        <div className="flex flex-wrap items-center gap-3 w-full overflow-hidden">
          {project.tags.map((tag, index) => (
            <div
              key={index}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center"
            >
              <img src={tag.path} alt={tag.name} className="w-6 sm:w-8" />
            </div>
          ))}
        </div>
        <motion.a
          className="flex items-center gap-2 cursor-pointer text-white-600"
          href={project.href}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <p className="text-white">Demo</p>
          <img src="arrow-up.png" alt="arrow" className="w-3 h-3" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    subdesc: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
