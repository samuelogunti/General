import PropTypes from "prop-types";
//import styles from "./About.module.css";
import Hero from "./sections/Hero";
import Resume from "./sections/Resume";
import Projects from "./sections/Projects";

const About = ({ activeLink }) => {
  return (
    <div className="flex-1 h-full bg-white rounded-2xl flex justify-center items-center shadow-lg overflow-hidden" >
     
          {activeLink === "hero" && <Hero />}
          {activeLink === "resume" && <Resume />}
          {activeLink === "projects" && <Projects />}
       
    </div>
  );
};
About.propTypes = {
  activeLink: PropTypes.string.isRequired,
};
export default About;
