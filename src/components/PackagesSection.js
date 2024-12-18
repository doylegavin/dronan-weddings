import React, { useState } from 'react';
import { Modal, Button } from './UIComponents';
import { Camera, Video, Mic, Speech, Users, Clock, Film, Gift, Clapperboard, PersonStanding, Notebook, ScanEye, Bell, Heart, MicVocal, Airplay, Ticket, TicketCheck } from 'lucide-react';
const packages = [
  {
    id: 1,
    title: 'Bronze',
    description: 'Perfect for couples who want to capture the essence of their day',
    price: '€1,500',
    features: [
      'Bride and Groom Preparations',
      'Guests arriving',
      'Reception',
      'Speeches',
      'First Dance',
      'Dancing',
      'Drone Footage',
      'First Look - 1 Minute (within 48 hours)',
      'Highlight Film (3-4 Minutes)'
    ],
    image: '/Media/LandingPage/LandingPage8.jpg',
    video: '/Media/Videos/BrendanandRuth(FirstLook).mp4'
  },
  {
    id: 2,
    title: 'Silver',
    description: 'For those who want a more comprehensive coverage of their special day',
    price: '€2,250',
    features: [
        'Bride and Groom Preparations',
        'Guests arriving',
        'Reception',
        'Speeches',
        'First Dance',
        'Dancing',
        'Drone Footage',
        'First Look - 1 Minute (within 48 hours)',
        'Highlight Film (3-4 Minutes)',
      'Cinematic Feature Film (18-23 minutes)'
    ],
    image: '/Media/LandingPage/LandingPage5.jpg',
    video: '/Media/Videos/BrendanandRuth(FirstLook).mp4'
  },
  {
    id: 3,
    title: 'Gold',
    description: 'Our most comprehensive package for the ultimate wedding video experience',
    price: '€2,500',
    features: [
      'Bride and Groom Preparations',
        'Guests arriving',
        'Reception',
        'Speeches',
        'First Dance',
        'Dancing',
        'Drone Footage',
        'First Look - 1 Minute (within 48 hours)',
        'Highlight Film (3-4 Minutes)',
      '2 Videographers',
      'Cinematic Feature Film (18-23 minutes)',
      'Full Speeches',
      'Full Ceremony'
    ],
    image: '/Media/LandingPage/LandingPage6.jpg',
    video: '/Media/Videos/BrendanandRuth(FirstLook).mp4'
  }
];

const PackageCard = ({ pkg, onLearnMore }) => (
    <div className="p-6 bg-olivine-100 rounded-lg shadow-lg flex flex-col h-full">
      <img src={pkg.image} alt={pkg.title} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl  mb-2 font-bold">{pkg.title}</h3>
      <p className="mb-4 flex-grow ">{pkg.description}</p>
      {/* <p className="text-lg font-bold mb-4 font-serif">{pkg.price}</p> */}
      <Button onClick={() => onLearnMore(pkg)} className="w-full py-2 bg-olivine-300 hover:bg-olivine-400">
        <span className="mr-2">Learn More</span>
        <Gift size={18} className="inline-block" />
      </Button >
    </div>
  );

  const PackageModal = ({ isOpen, onClose, pkg }) => {
    // Map package titles to their respective YouTube video URLs
    const packageVideos = {
      'Bronze': 'https://www.youtube.com/embed/LwG0tPy1vbQ?autoplay=1',
    'Silver': 'https://www.youtube.com/embed/h0mi5o9EY7I?autoplay=1',
    'Gold': 'https://www.youtube.com/embed/9RiEgdrhlL0?autoplay=1'
  };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2 className="text-3xl mb-4 font-bold">{pkg.title} Package</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            src={packageVideos[pkg.title]}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            title="YouTube video player"
            className="w-full h-full rounded"
          ></iframe>
        </div>
        <ul className="list-none pl-5 mb-4">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="mr-2">
                {feature.includes('Preparations') && <Camera size={18} />}
                {feature.includes('Drone') && <Clapperboard size={18} />}
                {feature.includes('Speeches') && !feature.includes('Full Speeches') && <Speech size={18} />}
                {feature.includes('Full Speeches') && <MicVocal size={18} />}
                {feature.includes('Guests') && <Users size={18} />}
                {feature.includes('Dancing') && <PersonStanding size={18} />}
                {feature.includes('Ceremony') && <Bell size={18} />}
                {feature.includes('First Dance') && <Heart size={18} />}
                {feature.includes('Reception') && <TicketCheck size={18} />}
                {feature.includes('Videographers') && <Users size={18} />}
                {feature.includes('Cinematic') && <Film size={18} />}
                {feature.includes('Highlight') && <Airplay size={18} />}
                {feature.includes('First Look') && <ScanEye size={18} />}
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <Button onClick={onClose} className="w-full bg-olivine-500 hover:bg-olivine-600">Close</Button>
      </Modal>
    );
  };
  
  

const PackageComparison = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="p-2 border">Feature</th>
          {packages.map(pkg => (
            <th key={pkg.id} className="p-2 border">{pkg.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {['Preparations', 'Reception', 'Drone Footage', 'Highlight Film', '2 Videographers', 'Feature Film', 'Ceremony', 'Full Speeches', 'Full Ceremony'].map(feature => (
          <tr key={feature}>
            <td className="p-2 border">{feature}</td>
            {packages.map(pkg => (
              <td key={pkg.id} className="p-2 border text-center">
                {pkg.features.some(f => f.includes(feature)) ? '✓' : '-'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PackageSection = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);
  
    return (
      <section className="py-12 bg-white" id="packages">
        <div className="container mx-auto">
          <h2 className="text-4xl text-center mb-8 font-semibold">Our Wedding Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 p-4">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onLearnMore={setSelectedPackage} />
            ))}
          </div>
         {/*  <h3 className="text-3xl font-serif text-center mb-4">Package Comparison</h3>
          <PackageComparison /> */}
          {selectedPackage && (
            <PackageModal
              isOpen={!!selectedPackage}
              onClose={() => setSelectedPackage(null)}
              pkg={selectedPackage}
            />
          )}
        </div>
      </section>
    );
};

export default PackageSection;
