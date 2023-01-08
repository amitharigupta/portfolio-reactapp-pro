import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import AmitLogo from "../assets/amit-logo.jpeg";


const Home = () => {

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0
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
                <motion.h1 initial={{ x: "-100%", opacity: 0 }}>
                    Hi, I am <br/> Amit Gupta
                </motion.h1>

                <Typewriter options={{ 
                    strings: ["A Developer", "A Designer", "A Programmer"], 
                    autoStart: true, 
                    loop:true,
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
                        +<span>100</span>
                    </p>
                    <span>Clients WorldWide</span>
                </article>

                <aside>
                    <article>
                        <p>
                            +<span>50</span>
                        </p>
                        <span>Projects Made</span>
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