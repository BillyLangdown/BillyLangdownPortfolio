import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import displayPicture from "../assets/Billy_display_picture.jpg";
import SocialMediaIcons from '../components/SocialMediaIcons';

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-10">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 before:absolute before:-top-32 before:-left-36
            before:rounded-[200px] before:w-[350px] max-w-[400px] before:h-[350px] before:bg-gradient-to-tl  before:from-deepGreen before:to-brightOrange before:z-[-1] "
          >
            <div
              className="relative z-0 before:absolute before:-bottom-32 before:-right-40
              before:rounded-[300px] before:w-[400px] max-w-[400px] before:h-[400px] before:bg-gradient-to-tl  before:from-brown before:to-deepGreen before:z-[-1] "
            >
              <img
                alt="A black and white portrait photograph of Billy Langdown"
                className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-lg "
                src={displayPicture}
              />
            </div>
          </div>
        ) : (
          <div>
            <img
              alt="A black and white portrait photograph of Billy Langdown"
              className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-sm"
              src={displayPicture}
            />
          </div>
        )}
      </div>
      {/* main section */}

      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* header section */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 10, x: 0 },
          }}
        >
          <p className="text-6xl font-playFair font-bold z-10 text-center md:text-start text-lightBrown">
            Billy{" "} <br/>
            <span className="xs:relative xs:font-bold text-brown z-20">Langdown</span>
          </p>
          <p className=" text-text-grey mt-10 mb-7 text-sm text-center md:text-start">
            Passionate about technology and with a background in branding and
            media production, I'm seeking a role that fuses creativity with my
            love for programming – let's chat if you're looking for a valuable
            addition to your team.
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 10, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-to-r from-brightOrange via-darkBrown to-deepGreen text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => {
              setSelectedPage("contact");
            }}
            href="#contact"
          >
            Contact me
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 10, x: 0 },
          }}
        >
          <SocialMediaIcons/>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
