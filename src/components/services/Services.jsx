import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I Focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" />
          <h1>
            <b>Skills</b> I Know
          </h1>
        </div>
        <div className="title">
          <h1>
            That can enhance your<b> Business</b>
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <h2>Languages</h2>
          <p>
          Python<img src="/python.png"/><br/>
          JavaScript<img src="/Js.png"/><br/>
          HTML<img src="/html.png"/><br/>
          CSS<img src="/css.png"/><br/>
          </p>
          <button>Github</button>
        </div>
        <div className="box">
          <h2>Frameworks</h2>
          <p>
          ReactJS<img src="/react.png"/><br/>
          TensorFlow<img src="/tensorflow.png"/><br/>
          PyTorch<img src="/pytorch.png"/><br/>
          </p>
          <button>Github</button>
        </div>
        <div className="box">
          <h2>Libraries</h2>
          <p>
          Numpy<img src="/numpy.png"/><br/>
          Scikit<img src="/scikit.png"/><br/>
          OpenCV<img src="/opencv.svg"/><br/>
          Seaborn<img src="/seaborn.svg"/><br/>
          </p>
          <button>Github</button>
        </div>
        <div className="box">
          <h2>Backend</h2>
          <p>
          MySQL<img src="/sql.png"/><br/>
          NodeJs<img src="/node.png"/><br/>
          MongoDB<img src="/mongodb.png"/><br/>
          </p>
          <button>Github</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
