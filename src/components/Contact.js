import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Update the import if you're using the newer version


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    location: '',
    hearAboutUs: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Replace the handleSubmit function with this:
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Initialize EmailJS with your public key
  emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY); // Get this from your EmailJS dashboard

  emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID, // Get this from EmailJS - it's your service ID
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Get this from EmailJS - it's your template ID
    {
      from_name: formData.name,
      to_name: "Your Name", // The website owner's name
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      wedding_date: formData.date,
      wedding_location: formData.location,
      hear_about_us: formData.hearAboutUs,
      reply_to: formData.email,
    }
  ).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Thank you for your message! We'll get back to you soon.");
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        date: '',
        location: '',
        hearAboutUs: ''
      });
    },
    (error) => {
      console.log("FAILED...", error);
      alert("Oops! Something went wrong. Please try again later.");
    }
  );
};

  return (
    <section id="contact" className="py-12 ">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Enquire Now</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="date"> Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="location"> Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="hearAboutUs">How did you hear about us?</label>
            <select
              id="hearAboutUs"
              name="hearAboutUs"
              value={formData.hearAboutUs}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="" disabled>Select an option</option>
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Referral">Referral</option>
              <option value="From a Friend">From a Friend</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="px-6 py-2 bg-olivine-500 text-white font-bold rounded-md hover:bg-olivine-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;