import { IoPersonSharp } from "react-icons/io5";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
// import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";

const Sidebar = ({ activeLink, onLinkClick }) => {
  
  
  return (
    <div id="sidebar">
      <div className={styles.sidebarContainer}>
        <div className={`${styles.sidebarIcon} ${activeLink === "hero" ? styles.active : ""}` }  onClick={() => onLinkClick('hero')}>
          <span className="px-3 flex flex-col items-center">
            <IoPersonSharp className="w-6 h-6"></IoPersonSharp>
            <span>About</span>
          </span>
        </div>
        <div className={`${styles.sidebarIcon} ${activeLink === "resume" ? styles.active : ""}` }  onClick={() => onLinkClick('resume')}>
          <span className="px-3 flex flex-col items-center">
            <IoDocumentTextSharp className="w-6 h-6"></IoDocumentTextSharp>
            <span>Resume</span>
          </span>
        </div>
        <div className={`${styles.sidebarIcon} ${activeLink === "projects" ? styles.active : ""}` }  onClick={() => onLinkClick('projects')}>
          <span className="px-3 flex flex-col items-center">
            <FaGithub className="w-6 h-6"></FaGithub>
            <span>Projects</span>
          </span>
        </div>
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  activeLink: PropTypes.string.isRequired,
  onLinkClick: PropTypes.string.isRequired,
};

export default Sidebar;
