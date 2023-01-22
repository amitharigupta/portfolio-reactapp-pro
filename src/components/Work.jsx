import React from "react"
import projects from "../assets/projects.json";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Work = () => {
  return (
    <div id="work">
        <h2>WORK</h2>
        <section>
            <article>
                <Carousel 
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={2000}
                >
                    {projects.map((i) => {
                        return <div key={i.id} className="workItem">
                            <img src={i.imgsrc} alt={i.title} />
                            <aside>
                                <h3>{i.title}</h3>
                                <p>{i.description}</p>
                                <a href={i.url} target="blank">
                                    View Demo
                                </a>
                            </aside>
                        </div>
                    })}
                </Carousel>
            </article>
        </section>
    </div>
  )
}

export default Work