import { SocialIcon } from "react-social-icons";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-5 relative rounded-lg sm:p-7 py-5 px-5 shadow-2xl shadow-black-200 bg-[#32303a]">
      <div className="backdrop-filter backdrop-blur-3xl w-full rounded-lg">
        <img src={project.logo} alt="logo" className="rounded-lg" />
        <div className="absolute inset-0 flex justify-end m-3">
          <SocialIcon className="heroIcon" url={project.source} />
        </div>
      </div>
      <div className="flex flex-col gap-5 text-white-600 my-2 ">
        <p className="text-xl font-semibold mb-2 text-white font-generalsans">
          {project.title}
        </p>
        <p className="text-[#afb0b6] text-base font-generalsans">
          {project.desc}
        </p>
        <p className="text-[#afb0b6] text-base font-generalsans">
          {project.subdesc}
        </p>
      </div>
      <div className="flex flex-col items-start justify-between flex-wrap gap-5">
        <div className="flex items-center gap-3">
          {project.tags.map((tag, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center"
            >
              <img src={tag.path} alt={tag.name} />
            </div>
          ))}
        </div>
        <a
          className="flex items-center gap-2 cursor-pointer text-white-600"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-white">Demo</p>
          <img src="arrow-up.png" alt="arrow" className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
