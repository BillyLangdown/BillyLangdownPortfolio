import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import balance from "/Users/billylangdown/Desktop/coding-projects/react-portfolio/src/assets/balance.png";
import cultureconnect from "/Users/billylangdown/Desktop/coding-projects/react-portfolio/src/assets/cultureconnect.png";
import ncnews from "/Users/billylangdown/Desktop/coding-projects/react-portfolio/src/assets/ncnews.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
  const overlayStyles =
    "absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue";
  const projectTitle = title.split(" ").join("").toLowerCase();

  let imageSource;
  switch (projectTitle) {
    case "balance":
      imageSource = balance;
      break;
    case "cultureconnect":
      imageSource = cultureconnect;
      break;
    case "ncnews":
      imageSource = ncnews;
      break;
  }

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playFair">{title}</p>
        <p className="mt-5"> {subtitle} </p>
      </div>
      <img src={imageSource} alt={projectTitle} />
    </motion.div>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-48">
      {/* headings */}

      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 10, y: 0 },
        }}
      >
        <div>
          <p className="font-playFair font-semibold text-4xl ">
            <span className="text-red">WO</span>RK
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Throughout my life, I've amassed a wide array of skills that can be
          seamlessly applied to the software engineering realm. Continuously
          seeking opportunities for growth, I'm committed to enhancing both my
          technical expertise and interpersonal abilities. My aspiration is to
          not only expand my own capabilities but also to impart my knowledge to
          empower my team in the future.
        </p>
      </motion.div>

      {/* projects  */}

      <div className="flex justify-center">
        <motion.div
          className="sm: grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
    
          <Project
            title="Balance"
            subtitle="A food delivery app for fitness enthusiasts."
          />

          <Project
            title="CultureConnect"
            subtitle="An app for connecting communities though culture."
          />

          <Project
            title="NC News"
            subtitle="A full stack web app for users to read and upload news."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
