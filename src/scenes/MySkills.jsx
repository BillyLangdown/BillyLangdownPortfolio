import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import computerSkills from "../assets/computerSkills.png";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  return (
    <div id="skills" className="pt-10 pb-10">
      {/* header image section */}

      <div className="md:flex md:justify-between md:gap-16  mt-32">
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 10, x: 0 },
          }}
        >
          <p className="font-playFair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Throughout my life, I've amassed a wide array of skills that can be
            seamlessly applied to the software engineering realm. Continuously
            seeking opportunities for growth, I'm committed to enhancing both my
            technical expertise and interpersonal abilities. My aspiration is to
            not only expand my own capabilities but also to impart my knowledge
            to empower my team in the future.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
             before:w-full before:h-full before:border-2 before:border-blue before:z-[-1] "
            >
              <img
                alt="Computer Skills"
                className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                src={computerSkills}
              />
            </div>
          ) : (
            <img
              alt="Computer Skills"
              className="z-10 w-full max-w-[400px] md:max-w-[600px] "
              src={computerSkills}
            />
          )}
        </div>
      </div>

      {/* skills section */}

      <div className="md:flex md:justify-between mt-16 gap-32 ">
        <motion.div
          className="md:w-1/2 mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 10, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playFair font-semibold text-5xl">01</p>
              <p className="font-playFair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
            <p className="mt-5">
              this is some information about this skill that i have . it is long
              anad boring but could provide some value.. i dont know
            </p>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 10, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playFair font-semibold text-5xl">02</p>
              <p className="font-playFair font-semibold text-3xl mt-3">
                Innovation 
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
            <p className="mt-5">
              this is some information about this skill that i have . it is long
              anad boring but could provide some value.. i dont know
            </p>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 10, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playFair font-semibold text-5xl">03</p>
              <p className="font-playFair font-semibold text-3xl mt-3">
                Creative 
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
            <p className="mt-5">
              this is some information about this skill that i have . it is long
              anad boring but could provide some value.. i dont know
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MySkills;
