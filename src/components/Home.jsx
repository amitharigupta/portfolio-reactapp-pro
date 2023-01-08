import { motion } from "framer-motion";

const Home = () => {

    const animationHome = {
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
            </div>
        </section>
    </div>
  )
}

export default Home