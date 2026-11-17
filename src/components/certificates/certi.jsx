import * as React from "react";
import { motion, useInView } from "motion/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "./certi.css";
import Pdf from "../../paper/resume.pdf";

import { FaCircleChevronRight } from "react-icons/fa6";
import {
  FaAws,
  FaHtml5,
  FaCss3,
  FaExternalLinkAlt,
  FaWordpress,
  FaBootstrap,
  FaFlask,
  FaReact,
  FaAngular,
  FaVuejs,
  FaDocker,
  FaJava,
} from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiDjango, SiExpress, SiMongodb } from "react-icons/si";
import { MdStars } from "react-icons/md";
import { VscAzure } from "react-icons/vsc";
import { IoLogoNodejs, IoLogoJavascript } from "react-icons/io5";

const bentoVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
      scale: { type: "spring", visualDuration: 0.7, bounce: 0.3 },
    },
  },
};

const Certi = () => {
  const ref = React.useRef();
  const [open, setOpen] = React.useState(false);
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="certi" ref={ref}>
      <div className="certiHead">
        <span>Skills</span>
        <br />& Certificates
      </div>
      <motion.div
        variants={bentoVariants}
        animate={isInView ? "animate" : "initial"}
        ref={ref}
        className="bcontainer"
      >
        <div className="column">
          <motion.div className="card c1" variants={bentoVariants}>
            <div className="cardText">
              <h3>Tech</h3>
              <h1>Stack</h1>
            </div>
            <div className="techCar">
              <span className="techSkillCont">
                <FaReact size={25} />
              </span>
              <span className="techSkillCont">
                <FaAngular size={25} />
              </span>
              <span className="techSkillCont">
                <SiDjango size={25} />
              </span>
              <span className="techSkillCont">
                <IoLogoNodejs size={25} />
              </span>
              <span className="techSkillCont">
                <IoLogoJavascript size={25} />
              </span>
              <span className="techSkillCont">
                <FaWordpress size={25} />
              </span>
              <span className="techSkillCont">
                <FaBootstrap size={25} />
              </span>
              <span className="techSkillCont">
                <FaJava size={25} />
              </span>
              <span className="techSkillCont">
                <FaAws size={25} />
              </span>
              <span className="techSkillCont">
                <VscAzure size={25} />
              </span>
              <span className="techSkillCont hide2">
                <FaVuejs size={25} />
              </span>
              <span className="techSkillCont hide2">
                <SiTailwindcss size={25} />
              </span>
              <span className="techSkillCont hide2">
                <FaFlask size={25} />
              </span>
              <span className="techSkillCont hide2">
                <SiExpress size={25} />
              </span>
              <span className="techSkillCont hide1">
                <FaDocker size={25} />
              </span>
              <span className="techSkillCont hide1">
                <SiMongodb size={25} />
              </span>
              <span className="techSkillCont hide1">
                <FaHtml5 size={25} />
              </span>
              <span className="techSkillCont hide1">
                <FaCss3 size={25} />
              </span>
              <span className="techSkillCont hide1">
                <SiMysql size={25} />
              </span>
            </div>
          </motion.div>
          <motion.div className="card c2" variants={bentoVariants}>
            <div className="webCertHead">
              <h1>Accreditations</h1>
            </div>
            <button
              type="button"
              aria-label="View accreditations"
              className="certCaroCont"
              onClick={() => setOpen(true)}
            >
              <div className="empty">Lance</div>
            </button>
          </motion.div>
        </div>
        <div className="column">
          <motion.div className="card c3" variants={bentoVariants}>
            <div className="skillRow">
              <div className="skillHead">Web Development</div>
              <div className="skillExp">
                <MdStars />
                <MdStars />
                <MdStars />
                <MdStars />
                <MdStars />
              </div>
            </div>
            <div className="skillRow">
              <div className="skillHead">Business Intelligence & Analytics</div>
              <div className="skillExp">
                <MdStars />
                <MdStars />
                <MdStars />
                <MdStars />
                <MdStars className="nope" />
              </div>
            </div>
            <div className="skillRow">
              <div className="skillHead">Database Management</div>
              <div className="skillExp">
                <MdStars />
                <MdStars />
                <MdStars />
                <MdStars className="nope" />
                <MdStars className="nope" />
              </div>
            </div>
            <div className="skillRow">
              <div className="skillHead">Software Development</div>
              <div className="skillExp">
                <MdStars />
                <MdStars />
                <MdStars />
                <MdStars />
                <MdStars />
              </div>
            </div>
          </motion.div>
          <motion.div className="card c4" variants={bentoVariants}>
            <div className="resText">
              Take a copy of my <br />
              <span>Resume</span>
              <br />
              <div className="resIcon">
                <a href={Pdf} target="_blank" rel="noopener noreferrer">
                  <FaCircleChevronRight size={30} className="resIconI" />
                </a>
              </div>
            </div>

            <div className="resCont">
              <a className="resBtn" href={Pdf} target="_blank" rel="noopener noreferrer">
                <div className="imgContainer">
                  <img src="/resume.jpg" alt="Resume" />
                  <div className="overlay">
                    <FaExternalLinkAlt className="icon" />
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Lightbox
        plugins={[Thumbnails]}
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "certi/1.jpg" },
          { src: "certi/2.jpg" },
          { src: "certi/3.jpg" },
          { src: "certi/4.jpg" },
          { src: "certi/5.jpg" },
          { src: "certi/6.jpg" },
          { src: "certi/7.jpg" },
        ]}
      />
    </div>
  );
};

export default Certi;
