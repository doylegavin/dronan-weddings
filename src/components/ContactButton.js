import { MessageCircle } from 'lucide-react';
import React from 'react'

const ContactButton = () => {
  return (
 <div className="fixed bottom-4 right-4">
 <button className="bg-green-300 text-white p-4 rounded-full shadow-lg hover:bg-green-500 transition duration-300 animate-pulse-slow">
   <MessageCircle size={24} />
 </button>
</div>
  )
}

export default ContactButton



