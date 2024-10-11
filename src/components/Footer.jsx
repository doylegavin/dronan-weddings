import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 w-full sm:w-auto">
            <p className="text-sm">© 2023 Dronan Media. All rights reserved.</p>
            <a href="/privacy" className="text-sm  hover:bg-olivine-200  px-3 py-1 rounded transition-colors duration-300">
              Privacy Policy
            </a>
          </div>
          
          <div className="flex justify-center gap-4 ">
            {[
              { href: "https://www.facebook.com/gavin.doyle.7/", icon: FaFacebookF, hoverColor: "hover:bg-[#405de6] hover:text-white" },
              { href: "https://x.com/GavinDDoyle", icon: FaTwitter, hoverColor: "hover:bg-[#1DA1F2] hover:text-white" },
              { href: "https://www.instagram.com/gavinthecraic/", icon: FaInstagram, hoverColor: "hover:bg-gradient-to-tr from-[#fcaf45] via-[#e1306c] to-[#833ab4] hover:text-white" },
              { href: "https://www.linkedin.com/in/gavin-doyle-a35543188/", icon: FaLinkedinIn, hoverColor: "hover:bg-[#0077B5] hover:text-white" },
              { href: "https://youtu.be/dQw4w9WgXcQ?si=UsSCNOvWaAJHgXuQ", icon: FaYoutube, hoverColor: "hover:bg-[#FF0000] hover:text-white" },
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                className={`text-xl p-2 rounded-full ${social.hoverColor} hover:-translate-y-1 bg-color-50 transition-all duration-300`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;