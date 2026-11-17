import "./exp.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";

import Pdf1 from "../../paper/ICAC353642.2021.pdf";
import Pdf2 from "../../paper/1006-7043.pdf";

let timelineElements = [
  {
    id: 1,
    title: "USC, University Advancement",
    location: "Los Angeles, CA",
    role: "Business Intelligence Student Worker",
    description:
      "Engineered and implemented a SharePoint intranet portal to enhance team collaboration, developed responsive Tableau dashboards optimizing UI/UX design, and improved IBM Cognos reports, reducing execution time by 40% for faster data retrieval and enhanced analytical insights.",
    date: "May 2024 - Present",
    icon: "work",
    tech: [
      "MS SharePoint",
      "Figma",
      "Tableau",
      "IBM Cognos",
      "SQL Server",
      "Salesforce",
      "Power Automate",
    ],
  },
  {
    id: 2,
    title: "Tokenizing The Future: Advancing Asset Management",
    role: "ISSN: 1006-7043",
    description:
      "Presented at the 1st International Conference on Integration of Computational Intelligent Systems 2023 and published in Harbin Engineering University Journal (Vol 44 No. 9), this paper describes an Asset Management system enabling tamper-free registration, sale, and transfer of up to 50 million assets without brokers or inspectors.",
    buttonText: "Read Paper",
    date: "September 2023",
    icon: "publish",
    tech: ["Blockchain", "Remix IDE", "Solidity", "Ganache", "MetaMask", "Web3.js", "IPFS", "Git"],
  },
  {
    id: 3,
    title: "University of Southern California",
    location: "Los Angeles, CA",
    role: "Master of Science in Computer Science",
    description:
      "Relevant Coursework: Web Technologies, Database Systems, Requirements Engineering, Analysis of Algorithms, Applied Natural Language Processing, Machine Learning for Data Science, Deep Learning",
    date: "August 2023 - Present",
    icon: "school",
    tech: ["Viterbi School of Engineering", "3.7/4 GPA"],
  },
  {
    id: 4,
    title: "Creative Ideas Simple Solutions, Inc",
    location: "Clarksville, MD (Remote)",
    role: "Software Development Intern",
    description:
      "Led market research to integrate data and customer feedback into product decisions, enhanced the digital experience for three major mobile projects, and revamped the web services test framework, cutting debugging time by 70%",
    date: "April 2023 - June 2023",
    icon: "work",
    tech: ["AWS EC2", "MySQL", "PowerBI", "Figma", "Sketch", "Git", "GitLab", "Bitbucket"],
  },
  {
    id: 5,
    title: "Verbal Agreement Signing with Speech Recognition",
    role: "Patent No : 20232105188",
    description:
      "Granted by the Office of the Controller General of Patents, Designs, and Trade Marks for 20 years, this project created a blockchain-hosted Speech Recognition and Contract Generation software, enhancing the legality and enforceability of verbal agreements across over 5000 blocks",
    date: "April 2023",
    buttonText: "View Patent",
    icon: "pulish",
    tech: [
      "Blockchain",
      "MFCC",
      "Gaussian Mixture Model",
      "NLTK",
      "PyTorch",
      "DeepSpeech",
      "Ganache",
      "IPFS",
      "Git",
    ],
  },
  {
    id: 6,
    title: "Linedata",
    location: "Mumbai, India",
    role: "Intern, Innovation Labs",
    description:
      "Completed four business-focused projects, proposed data-driven solutions, accelerated reconciliation operations by 60% with batch processing scripts, and developed automation solutions reducing workload by 1 FTE",
    date: "December 2021 - March 2022",
    icon: "work",
    tech: ["Python FastAPI", "ReactJS", "MS SQL", "Azure DevOps", "Docker", "Bash"],
  },
  {
    id: 7,
    title: "Interactive Map Application for Real-Time Crime Reporting",
    role: "DOI : 10.1109/ICAC353642.2021.9697179",
    description:
      "Presented at ICAC3'21: IEEE International Conference on Advances in Computing, Communication, and Control (Scopus indexed in IEEE Xplore Digital Library), this project engineered a solution for instant crime reporting, evidence submission, and emergency assistance requests, significantly improving response times for law enforcement agencies",
    date: "February 2022",
    buttonText: "Read Paper",
    icon: "pulish",
    tech: ["Django", "Jinja2", "Android Studio", "Firebase", "MaterialUI", "Git"],
  },
  {
    id: 8,
    title: "University of Mumbai",
    location: "Mumbai, India",
    role: "Bachelor of Engineering in Computer Engineering",
    description:
      "Relevant Coursework: Software Engineering, Cloud Computing, Mobile Computing, Data Structures and Algorithms, Big Data Analysis, Distributed Computing, Machine Learning, Artificial Intelligence",
    date: "February 2022",
    icon: "school",
    tech: ["9.71/10 GPA", "Fr. CRCE, Bandra"],
  },
];

const Exp = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="exp">
      <div className="expHead">
        <span>MY</span>
        <br />
        Journey Here
      </div>
      <VerticalTimeline className="myTimeline" lineColor="#22223b">
        {timelineElements.map((element) => {
          let showTech = element.tech !== undefined;

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={
                element.icon === "work"
                  ? { background: "#22223b" }
                  : element.icon === "school"
                    ? { background: "#4a4e69" }
                    : { background: "#9a8c98" }
              }
              icon={
                element.icon === "work" ? (
                  <MdWork style={{ color: "#fff" }} />
                ) : element.icon === "school" ? (
                  <IoSchool style={{ color: "#fff" }} />
                ) : (
                  <GrCertificate style={{ color: "#fff" }} />
                )
              }
            >
              <h3 className="vertical-timeline-element-title">{element.title}</h3>
              <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
              <h5 className="vertical-timeline-element-role">{element.role}</h5>
              <p id="description">{element.description}</p>
              {element.id == 7 && (
                <a className="btn" href={Pdf1} target="_blank" rel="noopener noreferrer">
                  {element.buttonText}
                </a>
              )}
              {element.id == 2 && (
                <a className="btn" href={Pdf2} target="_blank" rel="noopener noreferrer">
                  {element.buttonText}
                </a>
              )}
              {element.id == 5 && (
                <>
                  <button type="button" className="btn" onClick={() => setOpen(true)}>
                    {element.buttonText}
                  </button>
                  <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[{ src: "/patent.png" }]}
                  />
                </>
              )}
              {showTech && (
                <div className="techStack">
                  {element.tech.map((skill, index) => (
                    <span key={index} className="skill">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Exp;
