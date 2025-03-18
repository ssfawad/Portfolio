import { LinearGradient } from "react-text-gradients";
import { myProjects } from "../constants/data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="w-full flex justify-center mb-20" id="projects">
      <div className="flex flex-col w-full max-w-7xl items-center justify-start">
        <div className="w-full">
          <p className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal">
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Projects
            </LinearGradient>
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md-grid-cols-2 sm-grid-cols-1 gap-5 w-full">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
