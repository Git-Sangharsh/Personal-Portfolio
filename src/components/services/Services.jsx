import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, {margin: '-100px'})

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
    //   animate="animate"
    // whileInView='animate'
    ref = {ref}
    animate = {isInView && 'animate'}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I Focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" />
          <h1>
            <motion.b whileHover={{color: 'orange'}}>Skills</motion.b> I Know
          </h1>
        </div>
        <div className="title">
          <h1>
            That can enhance your<motion.b whileHover={{color: 'orange'}}> Business</motion.b>
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Languages</h2>
          <p>
            Python
            <img src="/python.png" />
            <br />
            JavaScript
            <img src="/Js.png" />
            <br />
            HTML
            <img src="/html.png" />
            <br />
            CSS
            <img src="/css.png" />
            <br />
          </p>
          <button>Github</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Frameworks</h2>
          <p>
            ReactJS
            <img src="/react.png" />
            <br />
            TensorFlow
            <img src="/tensorflow.png" />
            <br />
            PyTorch
            <img src="/pytorch.png" />
            <br />
          </p>
          <button>Github</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Libraries</h2>
          <p>
            Numpy
            <img src="/numpy.png" />
            <br />
            Scikit
            <img src="/scikit.png" />
            <br />
            OpenCV
            <img src="/opencv.svg" />
            <br />
            Seaborn
            <img src="/seaborn.svg" />
            <br />
          </p>
          <button>Github</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Backend</h2>
          <p>
            MySQL
            <img src="/sql.png" />
            <br />
            NodeJs
            <img src="/node.png" />
            <br />
            MongoDB
            <img src="/mongodb.png" />
            <br />
          </p>
          <button>Github</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
