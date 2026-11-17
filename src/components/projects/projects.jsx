import "./projects.css";
import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { IoIosLink } from "react-icons/io";

import Pdf from "../../paper/ICAC353642.2021.pdf";

const items = [
  {
    id: 1,
    img: "/stock.png",
    title: "Stock Search",
    desc: "Stock Search is a complete Webs and iOS Application designed to simulate stock trading, providing users with real-time market data, stock details, and a comprehensive suite of trading tools. The app allows users to manage a virtual portfolio, execute buy/sell orders, track stocks via watchlists, and analyze stock performance through interactive charts.",
    bullets: [
      "Developed using Swift for iOS and AngularJS/Node.js for the web, delivering a smooth and consistent experience across all devices.",
      "Connected to leading financial APIs (Finnhub, Polygon.io, Yahoo!) for up-to-the-second stock quotes, news, and market trends.",
      "Monitor your virtual portfolio with dynamic profit/loss tracking and comprehensive performance insights.",
    ],
    tech: [
      "AngularJS",
      "Node.js",
      "MongoDB",
      "Google Cloud Platform",
      "Swift",
      "Xcode",
      "Polygon.io",
      "Finnhub.io",
      "HighCharts",
    ],
    button: "View Project",
    imgs: [
      { src: "stock_p/sm0.png" },
      { src: "stock_p/sm1.png" },
      { src: "stock_p/sm2.png" },
      { src: "stock_p/sm3.png" },
      { src: "stock_p/sm4.png" },
      { src: "stock_p/sm5.png" },
      { src: "stock_p/sm6.png" },
      { src: "stock_p/sw0.png" },
      { src: "stock_p/sw1.png" },
      { src: "stock_p/sw2.png" },
      { src: "stock_p/sw3.png" },
      { src: "stock_p/sw4.png" },
      { src: "stock_p/sw5.png" },
      { src: "stock_p/sw6.png" },
    ],
  },
  {
    id: 2,
    img: "/cresc.png",
    title: "Crescendo 2k21",
    desc: "A robust web application developed in Python Django, Jinja2, and MongoDB, it was designed to streamline the organization of an inter-college technical festival with over 1,500 participants. The system handled key aspects such as participant registration, payment processing, event scheduling, score tracking, and leaderboard management, ensuring a smooth and efficient experience for organizers and participants alike.",
    bullets: [
      "Built with Python Django and MongoDB, providing a scalable and efficient platform to manage over 1,500 participants and 17 events simultaneously.",
      "Integrated with secure payment gateways (Stripe) for hassle-free registration fee processing and real-time payment status updates.",
      "Enabled real-time score tracking and dynamic leaderboards, ensuring transparent and up-to-date results for participants and organizers alike.",
    ],
    tech: ["Jinja2", "Bootstrap", "Django", "MongoDB", "Heroku", "Stripe", "JWT", "EmailJS"],
    button: "View Project",
    imgs: [
      { src: "cres_p/c1.png" },
      { src: "cres_p/c2.png" },
      { src: "cres_p/c3.png" },
      { src: "cres_p/c4.png" },
      { src: "cres_p/c5.png" },
    ],
  },
  {
    id: 3,
    img: "/tira.png",
    title: "Tiramisu.tech",
    desc: "This company website for Tiramisu.tech, a dynamic startup focused on helping clients develop Minimum Viable Products (MVPs), was developed using WordPress, leveraging its flexibility and ease of use to create a professional, responsive, and visually appealing platform and help this up-and-coming organization establish their brand identity and market presence.",
    bullets: [
      "The website serves as a digital showcase of Tiramisu's services, portfolio, and expertise, while also providing a seamless user experience for potential clients.",
      "Built with a mobile-first approach to ensure the website is fully responsive across all devices (desktop, tablet, and mobile).",
      "Provided Tiramisu with a scalable platform to showcase their services and grow their client base while also increasing online visibility and lead generation through SEO optimization and engaging content",
    ],
    tech: ["WordPress", "Elementor", "HTML5", "CSS3", "Figma", "AWS", "PHP", "SMTP", "Framer"],
    button: "View Project",
    imgs: [
      { src: "tira_p/t1.png" },
      { src: "tira_p/t2.png" },
      { src: "tira_p/t3.png" },
      { src: "tira_p/t4.png" },
      { src: "tira_p/t5.png" },
      { src: "tira_p/t6.png" },
      { src: "tira_p/t7.png" },
    ],
  },
  {
    id: 4,
    img: "/abby.png",
    title: "Abby Illustrates",
    desc: "This portfolio website for a freelance digital artist aims to showcase her artwork, attract potential clients, and establish a professional online presence. The website was built using React.js, ensuring a fast, interactive, and scalable user experience. The website was updated several times with new client testimonials, new product offerings and mailing list services.",
    bullets: [
      "Designed a sleek, responsive portfolio website for a freelance digital artist enhancing her online presence and client engagement.",
      "Implemented an interactive portfolio gallery with smooth animations (Framer Motion) and optimized image rendering, ensuring a visually appealing and seamless user experience.",
      "Integrated a mailing list feature to boost client engagement and marketing efforts, enabling automated updates on new artwork, commission openings, and exclusive promotions.",
    ],
    tech: [
      "ReactJS",
      "Tailwind",
      "Framer Motion",
      "Netlify",
      "Mailchimp",
      "EmailJS",
      "Stripe",
      "WooCommerce",
    ],
    button: "View Project",
    imgs: [
      { src: "abby_p/a1.png" },
      { src: "abby_p/a2.png" },
      { src: "abby_p/a3.png" },
      { src: "abby_p/a4.png" },
      { src: "abby_p/a5.png" },
    ],
  },
  {
    id: 5,
    img: "/rpt.png",
    title: "Report - IT",
    desc: "This project is a mobile app and web platform for real-time crime reporting, missing persons tracking, and emergency response. The Android app lets users report crimes, get alerts, and contact services. The web platform lets law enforcement view reports, respond, and issue announcements. It uses Google Maps, location services, and real-time database sync.",
    bullets: [
      "Developed a real-time crime reporting mobile app using Android Studio, Google Maps API, and Firebase, enabling users to report incidents, track missing persons, and receive emergency alerts.",
      "Built a web-based law enforcement dashboard with React.js and Node.js, allowing authorities to manage crime reports, respond to emergencies, and issue public safety announcements",
      "Implemented geospatial crime mapping and emergency response features, integrating live location tracking, push notifications, and one-click emergency contact calling for improved public safety",
    ],
    tech: [
      "Android Studio",
      "Java",
      "ReactJS",
      "Tailwind",
      "Django",
      "Firebase",
      "JWT",
      "Google Maps API",
      "Google Location Services",
    ],
    button: "Read Paper",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opactiy: 1,
    transition: {
      duraion: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 5500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opactiy: 1,
    transition: {
      duraion: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [open, setOpen] = useState(false);

  return (
    <div className="pItem" ref={ref}>
      {item.button === "View Project" ? (
        <motion.div
          variants={imgVariants}
          animate={isInView ? "animate" : "initial"}
          className="pImg"
          onClick={() => setOpen(true)}
        >
          <img src={item.img} alt="" />
        </motion.div>
      ) : (
        <motion.div
          variants={imgVariants}
          animate={isInView ? "animate" : "initial"}
          className="pImg"
          onClick={() => window.open(Pdf, "_blank", "noopener,noreferrer")}
        >
          <img src={item.img} alt="" />
        </motion.div>
      )}
      <motion.div
        className="pText"
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.ul className="bullets">
          {item?.bullets?.map((bul, index) => (
            <li key={index} className="bullet">
              {bul}
            </li>
          )) ?? <span></span>}
        </motion.ul>
        <motion.div className="techStackP">
          {item?.tech?.map((skill, index) => (
            <span key={index} className="skill">
              {skill}
            </span>
          )) ?? <span></span>}
        </motion.div>
        {item.button === "View Project" ? (
          <>
            <Lightbox
              plugins={[Thumbnails]}
              open={open}
              close={() => setOpen(false)}
              slides={item.imgs}
            />
            <div className="tooltip-wrapper">
              <button className="projBtn" onClick={() => setOpen(true)}>
                <span>{item.button}</span>
                <span>
                  <IoIosLink />
                </span>
              </button>
              <span className="tooltip">Please reach out to view Source Code</span>
            </div>
          </>
        ) : (
          <>
            <button
              className="projBtn"
              onClick={() => window.open(Pdf, "_blank", "noopener,noreferrer")}
            >
              <span>{item.button}</span>
              <span>
                <IoIosLink />
              </span>
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

const Project = () => {
  const [contDist, setContDist] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px" });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContDist(rect.left);
    }
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * items.length]);
  return (
    <div className="project" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div className="empty" style={{ width: window.innerWidth - contDist }} />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />

      {isInView && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="projHead"
          id="project"
        >
          <span>MY</span>
          <br />
          Past Work
        </motion.div>
      )}
      {isInView && (
        <motion.div
          className="pProgress"
          initial={{ opacity: 1 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <svg width="100%" height="100%" viewBox="0 0 160 160">
            <motion.circle cx="80" cy="80" r="70" fill="none" stroke="#ddd" strokeWidth={20} />
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#22223b"
              strokeWidth={20}
              style={{ pathLength: scrollYProgress }}
              transform="rotate(-90 80 80)"
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
};

export default Project;
