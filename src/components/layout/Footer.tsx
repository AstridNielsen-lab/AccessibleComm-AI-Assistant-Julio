import { FaWhatsapp, FaGlobe } from 'react-icons/fa';
import { ContactButton } from './ContactButton';

export function Footer() {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img 
              src="https://static.wixstatic.com/media/ef3e67_051e5ffb7c6d471fb4d8a71b831a7d19~mv2.png"
              alt="Like Look Solutions Logo"
              className="h-12 w-auto sm:h-16"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <ContactButton
              href="https://wa.me/5511970603441"
              icon={<FaWhatsapp className="text-xl" />}
              label="WhatsApp"
            />
            <ContactButton
              href="https://likelook.wixsite.com/solutions"
              icon={<FaGlobe className="text-xl" />}
              label="Website"
            />
          </div>
        </div>

        <div className="text-center mt-4 space-y-1">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Like Look Solutions. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Developed by Julio Campos Machado
          </p>
        </div>
      </div>
    </footer>
  );
}