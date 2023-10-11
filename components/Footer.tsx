import React from "react";
import { SiGmail, SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import DarkModeSwitch from "./DarkModeSwitch";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="mb-3">
          <DarkModeSwitch />
        </div>
        <div className="flex mb-3 space-x-4">
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jungChulOh"
          >
            <span className="sr-only">github</span>
            <SiGithub size="2rem" />
          </a>
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jungchuloh"
          >
            <span className="sr-only">Linkedin</span>
            <SiLinkedin size="2rem" />
          </a>
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href="`mailto:jungjob1114@gmail.com`"
          >
            <span className="sr-only">mail</span>
            <SiGmail size="2rem" />
          </a>
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/chul_five"
          >
            <span className="sr-only">instagram</span>
            <SiInstagram size="2rem" />
          </a>
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Copyright © {new Date().getFullYear()}</div>
          <div>• Iron.J Portfolio</div>
          {/* <a href="/test">o-it s blog - wowwow pops</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
