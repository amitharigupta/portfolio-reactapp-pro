import React from 'react'
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from "react-icons/ai"

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <img src={""} alt={"github"} />
        <h2>Amit Gupta</h2>
        <p>Motivation is temporay, but discipline last forever.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
    </footer>
  )
}

export default Footer