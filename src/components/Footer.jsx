import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Modal, Button } from './UIComponents'; // Ensure this import is correct


const PrivacyPolicyModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <h1 className="text-3xl font-bold mb-4">Privacy Policy for Dronan Weddings</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p>At Dronan Weddings, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or engage with our services.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Personal Information:</strong> When you contact us or book services, we may collect personal information such as your name, email address, phone number, and event details.</li>
          <li><strong>Usage Data:</strong> We may collect information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on our site.</li>
          <li><strong>Cookies:</strong> Our website may use cookies to enhance user experience. You can manage cookie preferences through your browser settings.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To communicate with you about our services</li>
          <li>To process bookings and payments</li>
          <li>To improve our website and services</li>
          <li>To send you promotional materials, if you have opted in</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Data Sharing and Disclosure</h2>
        <p>We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>With service providers who assist us in operating our website or providing services to you</li>
          <li>If required by law or to protect our rights or the rights of others</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Data Security</h2>
        <p>We implement reasonable security measures to protect your personal information from unauthorized access or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access the personal information we hold about you</li>
          <li>Request corrections to your information</li>
          <li>Withdraw consent for us to use your information for marketing purposes</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Third-Party Links</h2>
        <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites, and we encourage you to review their privacy policies.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website with an updated effective date.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:dronanmedia@gmail.com" className="text-blue-600 hover:underline">dronanmedia@gmail.com</a></p>
      </section>
    <Button onClick={onClose} className="w-full bg-olivine-500 hover:bg-olivine-600">
      Close
    </Button>
  </Modal>
);

const Footer = () => {
  const [isPrivacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);

  return (
    <footer className="bg-white text-black py-4 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 w-full sm:w-auto">
            <p className="text-sm">© 2023 Dronan Media. All rights reserved.</p>
            <button 
              onClick={() => setPrivacyPolicyOpen(true)} 
              className="text-sm hover:bg-olivine-200 px-3 py-1 rounded transition-colors duration-300"
            >
              Privacy Policy
            </button>
          </div>
          
          <div className="flex justify-center gap-4 pr-10 ">
            {[
              { href: "https://www.facebook.com/profile.php?id=61567868939863", icon: FaFacebookF, hoverColor: "hover:bg-[#405de6] hover:text-white" },              
              { href: "https://www.instagram.com/dronanweddings/", icon: FaInstagram, hoverColor: "hover:bg-gradient-to-tr from-[#fcaf45] via-[#e1306c] to-[#833ab4] hover:text-white" },          
              { href: " https://youtu.be/gCWY5SRnrZQ", icon: FaYoutube, hoverColor: "hover:bg-[#FF0000] hover:text-white" },
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
      {isPrivacyPolicyOpen && (
        <PrivacyPolicyModal 
          isOpen={isPrivacyPolicyOpen} 
          onClose={() => setPrivacyPolicyOpen(false)} 
        />
      )}
    </footer>
  );
};

export default Footer;