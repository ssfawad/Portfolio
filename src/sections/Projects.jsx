import { LinearGradient } from "react-text-gradients";
import { myProjects } from "../constants/data";

const Projects = () => {
  const currentProject = myProjects[0];
  return (
    <section className="w-full flex justify-center mb-20">
      <div className="flex flex-col w-full max-w-7xl items-center justify-start">
        <div className="w-full">
          <p className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal">
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Projects
            </LinearGradient>
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
          <div className="flex flex-col gap-5 relative sm:p-10 py-10 px=5 shadow-2xl shadow-black-200">
            <div className="absolute top-0 right-0">
              <img
                src={currentProject.spotlight}
                alt="spotlight"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div
              className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
              style={myProjects[0].logoStyle}
            >
              <img
                src={currentProject.logo}
                alt="logo"
                className="w-10 h-10 shadow-sm"
              />
            </div>
            <div className="flex flex-col gap-5 text-white-600 my-5">
              <p className="text-white text-2xl font-semibold animatedText">
                {currentProject.title}
              </p>
              <p className="animatedText">{currentProject.desc}</p>
              <p className="animatedText">{currentProject.subdesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
