import { MessageCircle } from 'lucide-react';
import React from 'react';

const ContactButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    const header = document.querySelector('.fixed'); // Assuming the header has a class 'fixed'
    if (contactSection && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-green-300 text-white p-4 rounded-full shadow-lg hover:bg-green-500 transition duration-300 animate-pulse-slow"
        onClick={scrollToContact}
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default ContactButton;



