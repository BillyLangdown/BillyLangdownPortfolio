import LineGradient from "../components/LineGradient"
import {useForm} from "react-hook-form"
import {motion} from "framer-motion"
import contact from "../assets/contact.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () =>{
    const {
        register, 
        trigger, 
        formState: {errors}
    } = useForm();

    const onSubmit = async (e)=>{
       const isValid = await trigger()
       if(!isValid){
        e.preventDefault()
       }
    }
    return(
        <section id="contact" className="py-32">
            {/* headings */}
            <motion.div
          className="flex justify-end w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 10, x: 0 },
          }}
        >
            <div>
          <p className="font-playFair font-semibold text-4xl text-lightBrown">
            CONTACT<span className="text-brightOrange"> ME</span>
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="mx-auto w-full"/>
          </div>

            </div>
          
        </motion.div>

        {/* form and image  */}

        <div className="md:flex md:justify-between gap-16 mt-5">
            <motion.div
            className="basis-1/2 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 10, y: 0 },
            }}
            >
                 <FontAwesomeIcon icon={faEnvelope} className=" text-[10rem] md:text-[18rem]" />
                
            </motion.div>

            <motion.div
            className="basis-1/2, mt-10 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, amount: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 10, y: 0 },
                    }}
            
            >
                <form target="_blank" onSubmit={onSubmit} action="https://formsubmit.co/624dd2fa4ea1a50b1cbc96cd51712cea" method="POST">
                    <input className="w-full bg-blue font-semibold placeholder-opaque-black p-3" type="text" name="name" placeholder="NAME" {...register("name", {required:true, maxLength: 100})}/> 
                    {errors.name && (
                        <p className="text-red mt-1">
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Max length is 100 char."}
                        </p>
                    )}
                    <input  className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5" type="text" name="email" placeholder="EMAIL" {...register("email", {required:true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} /> 
                    {errors.email && (
                        <p className="text-red mt-1">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                    )}
                     <textarea  className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5" type="text" name="message" placeholder="MESSAGE"  rows="4" cols="50" {...register("message", {required:true, maxLength:2000})} /> 
                    {errors.message && (
                        <p className="text-red mt-1">
                            {errors.message.type === "required" && "This field is required."}
                            {errors.message.type === "maxLength" && "Max length is 2000 char."}
                        </p>
                    )}

                    <button type="submit" className=" mt-6 bg-gradient-to-r from-brightOrange via-darkBrown to-brown text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500">
                        SEND 
                    </button>
                </form>

            </motion.div>

        </div>
        </section>
    )
}

export default Contact