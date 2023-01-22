import { animate, motion, MotionConfig } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import AmitLogo from "../assets/amit-logo.jpeg";
import { useRef } from "react";

const Home = () => {
    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientCounts = () => {
        animate(0, 3, {
            duration: 1,
            onUpdate: (v) => {
                clientCount.current.textContent = v.toFixed()
            }
        })
    }

    const animationProjectCounts = () => {
        animate(0, 10, {
            duration: 1,
            onUpdate: (v) => {
                projectCount.current.textContent = v.toFixed()
            }
        })
    }

    const animations = {
        h1: {
            initial: {
                // x: "-100%",
                // opacity: 0
            },
            whileInview: {
                x: 0,
                opacity: 1,
            }
        }
    };

  return (
    <div id="home">
        <section>
            <div>
                <motion.h1 {...animations.h1}>
                    Hi, I am <br/> Amit Gupta
                </motion.h1>

                <Typewriter options={{ 
                    strings: ["A Developer", "A Designer", "A Programmer"], 
                    autoStart: true, 
                    loop:true,
                    cursor: "",
                    wrapperClassName: "typewriterpara",
                    }} 
                />

                <div>
                    <a href="mailto:amitgt9967@gmail.com">Hire Me</a>
                    <a href="#work">
                        Projects <BsArrowUpRight />
                    </a>
                </div>

                <article>
                    <p>
                        +<motion.span whileInView={animationClientCounts} ref={clientCount}>{}</motion.span>
                    </p>
                    <span>Clients WorldWide</span>
                </article>

                <aside>
                    <article>
                        <p>
                            +<motion.span whileInView={animationProjectCounts} ref={projectCount}>{}</motion.span>
                        </p>
                        <span>Projects Done</span>
                    </article>
                    <article data-special>
                        <p>
                            Contact
                        </p>
                        <span>amitgt9967@gmail.com</span>
                    </article>
                </aside>
            </div>
        </section>
        <section>
            <img src={AmitLogo} alt={"Amit Gupta"} />
        </section>
        <BsChevronDown />
    </div>
  )
}

export default Home