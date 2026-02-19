import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="flex flex-col gap-5 relative rounded-lg sm:p-7 py-5 px-5 shadow-2xl bg-[#32303a] border border-white/10 hover:border-[#ff9720]/50 hover:shadow-[0_0_20px_rgba(255,151,32,0.2)] transition-all duration-300"
      whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: "easeInOut" } }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Project Image */}
      <div className="backdrop-filter backdrop-blur-3xl w-full rounded-lg">
        <img src={project.logo} alt="logo" className="rounded-lg w-full" loading="lazy" />
      </div>

      {/* Project Details */}
      <div className="flex flex-col gap-3 my-2">
        <h2 className="text-xl font-semibold text-white font-generalsans">
          {project.title}
        </h2>
        <p className="text-[#afb0b6] text-base font-generalsans">
          {project.desc}
        </p>
        <p className="text-neutral-500 text-sm font-generalsans">
          {project.subdesc}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-3 w-full overflow-hidden">
        {project.tags.map((tag, i) => (
          <div
            key={i}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center"
          >
            <img src={tag.path} alt={tag.name} className="w-6 sm:w-8" loading="lazy" />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        {project.href && (
          <motion.a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff9720]/50 text-[#ff9720] text-sm font-medium hover:bg-[#ff9720]/10 transition-colors duration-200"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <FaExternalLinkAlt size={11} />
            Live Demo
          </motion.a>
        )}
        <motion.a
          href={project.source}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-neutral-300 text-sm font-medium hover:bg-white/5 transition-colors duration-200"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <FaGithub size={14} />
          Source
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
    href: PropTypes.string,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
