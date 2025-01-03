import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title: string;
}

export function Card({ children, title }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}