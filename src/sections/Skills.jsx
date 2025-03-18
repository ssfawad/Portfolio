import { LinearGradient } from "react-text-gradients";
import SkillsSphere from "../components/SkillsSphere";

const Skills = () => {
  return (
    <>
      <section className="w-full flex justify-center" id="skills">
        <div className="flex flex-col w-full max-w-7xl items-center justify-start">
          <div className="w-full">
            <p className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal">
              <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
                Skills
              </LinearGradient>
            </p>
          </div>
          <div className="flex w-full justify-center">
            <SkillsSphere />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
