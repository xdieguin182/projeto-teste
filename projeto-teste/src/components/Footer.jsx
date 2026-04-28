import React from "react";

import { FaCat } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-dark text-white text-center p-1 mt-auto">
      <footer className="bg-dark text-white text-center p-1 m-auto">
        <p className="copyright mb-0">Diego Martins | 2026 </p> 
        <p>
          <a className="link" href="https://github.com/xdieguin182" target="_blank" rel="noreferrer"> <FaGithub className="git text-light"/> Github 
          </a> | <a className="link" href="https://www.instagram.com/martins_diego92" target="blank" rel="noreferrer">Instagram <FaInstagram className="insta text-light"/> </a>
        </p>
        <h4><FaCat/></h4>
        
        
      </footer>
    </div>
  );
}

export default Footer;
