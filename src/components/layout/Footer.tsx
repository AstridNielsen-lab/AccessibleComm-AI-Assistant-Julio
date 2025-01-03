import React from 'react';
import { FaWhatsapp, FaGlobe } from 'react-icons/fa';
import { ContactButton } from './ContactButton';

export function Footer() {
  return (
    <footer className="bg-white shadow-md mt-8">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://static.wixstatic.com/media/ef3e67_051e5ffb7c6d471fb4d8a71b831a7d19~mv2.png/v1/fill/w_387,h_387,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20like%20look%20solutions%20trasparent.png"
              alt="Like Look Solutions Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Contact Buttons */}
          <div className="flex gap-3">
            <ContactButton
              href="https://wa.me/5511970603441"
              icon={<FaWhatsapp />}
              label="WhatsApp"
            />
            <ContactButton
              href="https://likelook.wixsite.com/solutions"
              icon={<FaGlobe />}
              label="Website"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Like Look Solutions. All rights reserved.</p>
          <p>Developed by Julio Campos Machado</p>
        </div>
      </div>
    </footer>
  );
}