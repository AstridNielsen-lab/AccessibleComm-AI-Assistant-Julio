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
      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      aria-label={`Contact via ${label}`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}