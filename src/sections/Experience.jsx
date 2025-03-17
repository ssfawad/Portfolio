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
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <>
      <section className="w-full flex justify-center">
        <div className="flex flex-col w-full max-w-7xl items-center justify-start">
          <div className="w-full">
            <p className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal">
              <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
                Experience
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
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={icon}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement> */}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default Experience;
