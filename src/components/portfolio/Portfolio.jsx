import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Machine Learning / Deep Learning Projects",
    img: "https://cdn-gcp.new.marutitech.com/robot_humanoid_using_tablet_computer_big_data_analytic_1_94eab7101e.jpg",
    desc: "Machine learning is a subset of artificial intelligence that empowers computers to learn from data and make predictions. Deep learning, a specialized form of machine learning, employs deep neural networks to excel in complex tasks like image and speech recognition, by automatically extracting intricate features from data.",
  },
  {
    id: 2,
    title: "Computer Vision Projects",
    img: "https://rapidapi.com/blog/wp-content/uploads/2017/11/t01a5ed8aab97b460c9.jpg",
    desc: "Computer vision is a field of artificial intelligence that enables computers to interpret and understand visual information from images or videos. It involves tasks like object recognition, image segmentation, and facial detection. Computer vision finds applications in self-driving cars, medical imaging, and augmented reality, among others.",
  },
  {
    id: 3,
    title: "Web Development Projects",
    img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Web development, excluding the back-end, primarily focuses on designing and building the user interface (front-end) of websites or web applications. It involves HTML, CSS, and JavaScript to create visually appealing and interactive web pages. Front-end web development is essential for user experience and interface design.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Click to explore</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
