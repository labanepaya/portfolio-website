import React from 'react';
import { LocationMarkerIcon, PhoneIcon, MailIcon } from '@heroicons/react/outline';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div>
          <span>LOGO</span>
          <p className="text-slate-600">All rights reserved</p>
        </div>
        <div className="flex flex-col justify-end">
          <div className="mb-2 flex items-center">
            <LocationMarkerIcon className="h-5 w-5 mr-3" />
            <p>Mapako Street, Orapa</p>
          </div>
          <div className="mb-2 flex items-center">
            <PhoneIcon className="h-5 w-5 mr-3" />
            <p>+26776989710</p>
          </div>
          <div className="mb-2 flex items-center">
            <MailIcon className="h-5 w-5 mr-3" />
            <p>payalabane@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

