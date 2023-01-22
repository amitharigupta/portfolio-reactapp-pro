import { useState } from "react";
import { BiSend } from "react-icons/bi";
import vg from "../assets/contact-us.jpeg";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {

    const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
    const changeHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        console.log(inputs)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        toast.success("Message Sent");
    }

    const animations = {
        form: {
            initial : {
                x: "-100%",
                opacity: 0,
            },
            whileInView : {
                x: 0,
                opacity: 1,
            }
        },
        button: {
            initial : {
                x: "-100%",
                opacity: 0,
            },
            whileInView : {
                x: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.5
            }
        }
    }
  return (
    <div id="contact">
        <section>
            <motion.form onSubmit={submitHandler} {...animations.form}>
                <h2>Contact Me</h2>
                <input type="text" value={inputs.name} name="name" placeholder="Your Name" onChange={changeHandler} required />
                <input type="email" value={inputs.email} name="email" placeholder="Your Email" onChange={changeHandler} required />
                <textarea type="text" value={inputs.message} name="message" placeholder="Your Message" onChange={changeHandler} required />
                <motion.button type="submit" {...animations.button}><BiSend /></motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={vg} alt={"Graphics"} />
        </aside>
    </div>
  )
}

export default Contact