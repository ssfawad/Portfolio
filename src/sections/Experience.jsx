import { LinearGradient } from "react-text-gradients";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workExperiences } from "../constants/data";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#32303a", color: "fff" }}
      contentArrowStyle={{ borderRight: "7px solid #fc0865" }}
      date={experience.duration}
      dateClassName="text-white"
      iconStyle={{ background: "#32303a", color: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white font-bold">{experience.position}</h3>
        <p className=" text-gray-300 font-mono" style={{ margin: 0 }}>
          {experience.company}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.duties.map((duty, index) => (
          <li
            key={`duty-point-${index}`}
            className="text-white pl-1 tracking-wider"
          >
            {duty}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <>
      <section className="w-full flex justify-center mb-20" id="experience">
        <div className="flex flex-col w-full max-w-7xl items-center justify-start">
          <div className="w-full">
            <p className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal">
              <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
                Work Experience
              </LinearGradient>
            </p>
          </div>

          <VerticalTimeline lineColor={"#fc0865"}>
            {workExperiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
              ></ExperienceCard>
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default Experience;
