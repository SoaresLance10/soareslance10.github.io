import "./about.css";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { RiAddCircleFill } from "react-icons/ri";
import Typer from "./typer";
import Back from "./back";

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const aboutVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const contactVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    },
  },
};

const About = () => {
  return (
    <div className="about">
      <div className="aSection left">
        <motion.h1
          className="aTitle"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Lance Garrick Soares <br />
          <span className="aSubTitle">Software Developer</span>
        </motion.h1>
        <motion.div
          variants={aboutVariants}
          initial="initial"
          animate="animate"
          className="aSummary"
        >
          <motion.h2 variants={aboutVariants} className="aboutMe">
            About Me
          </motion.h2>
          <motion.p variants={aboutVariants}>
            An astute and dedicated Software Developer with proven Software Design expertise in
            creating high performance web applications, dedication to excellence, strong
            problem-solving abilities, and outstanding communication skills.
          </motion.p>
        </motion.div>
        <motion.a
          animate={{ y: [0, 15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#project"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="#22223bff"
              strokeWidth="1"
            />
            <path d="M12 5V8" stroke="#22223bff" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </motion.a>
      </div>
      <div className="aSection right">
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="social"
        >
          <motion.a variants={followVariants} href="tel:+13235297028">
            <FaPhone />
          </motion.a>
          <motion.a variants={followVariants} href="mailto:soareslance10@gmail.com">
            <IoMdMail />
          </motion.a>
          <motion.a
            variants={followVariants}
            href="https://www.linkedin.com/in/lance-garrick-soares/"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a variants={followVariants} href="https://github.com/SoaresLance10">
            <FaGithub />
          </motion.a>
          <motion.div variants={followVariants} href="#contact" className="socialTextCont">
            <div className="socialText">GET IN TOUCH</div>
          </motion.div>
        </motion.div>
        <div className="typeWriter">
          <div className="typeCnst">I am</div>
          <div className="typerCont">
            <Typer />
          </div>
        </div>
        <a href="#contact" className="contactLink">
          <motion.div
            variants={contactVariants}
            initial="initial"
            animate="animate"
            whileInView={{ rotate: [0, 360] }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            }}
            className="contactButton"
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="#4a4e69ff" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <motion.text variants={contactVariants} className="circleText">
                <textPath href="#innerCirclePath" fill="#f2e9e4ff">
                  Hire Now •
                </textPath>
              </motion.text>
              <motion.text variants={contactVariants} className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%" fill="#f2e9e4ff">
                  Contact Me •
                </textPath>
              </motion.text>
            </svg>
            <motion.div variants={contactVariants} className="arrow">
              <RiAddCircleFill />
            </motion.div>
          </motion.div>
        </a>
      </div>
      <div className="bg">
        <Canvas>
          <Back />
        </Canvas>
        <div className="aImg">
          <img src="/about.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
