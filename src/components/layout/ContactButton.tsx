import React, { ReactNode } from 'react';

interface ContactButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export function ContactButton({ href, icon, label }: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
      aria-label={`Contact via ${label}`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </a>
  );
}