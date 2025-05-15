
import React from 'react';
import QRCode from 'qrcode.react';

interface SwissBannerProps {
  title: string;
  subtitle: string;
  principles: string[];
  phone1: string;
  phone2: string;
  website: string;
  squareMeters?: string;
  variant?: 'standard' | 'fullWidth' | 'minimal';
}

const SwissBanner: React.FC<SwissBannerProps> = ({
  title,
  subtitle,
  principles,
  phone1,
  phone2,
  website,
  squareMeters,
  variant = 'standard'
}) => {
  return (
    <div className="relative bg-swiss-white border border-swiss-black overflow-hidden">
      <div className={`grid ${variant === 'fullWidth' ? 'grid-cols-1' : 'grid-cols-12'} gap-0 min-h-[500px]`}>
        {/* Left column - Swiss style grid */}
        <div className={`${variant === 'fullWidth' ? 'col-span-1' : 'col-span-8'} p-8 flex flex-col justify-between relative`}>
          <div className="flex flex-col gap-6">
            {/* Title */}
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold tracking-tight">
              {title}
            </h1>
            
            {/* Subtitle */}
            <div className="pt-2">
              <p className="font-sourceSans text-lg tracking-wider uppercase">
                {subtitle}
              </p>
            </div>
            
            {/* Square meters if provided */}
            {squareMeters && (
              <div className="font-montserrat text-xl mt-4">
                {squareMeters}
              </div>
            )}
            
            {/* Design principles - Swiss style horizontal layout */}
            <div className="mt-6">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {principles.map((principle, index) => (
                  <li key={index} className="font-sourceSans uppercase tracking-wide">
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Contact information - Swiss style bottom alignment */}
          <div className="mt-auto pt-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-sourceSans">{phone1}</p>
                <p className="font-sourceSans">{phone2}</p>
              </div>
              <div className="text-right">
                <p className="font-sourceSans">{website}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right column - Logo and QR code */}
        <div className={`${variant === 'fullWidth' ? 'absolute top-8 right-8' : 'col-span-4'} p-8 flex flex-col justify-between items-end`}>
          <div className="logo-houzz mb-auto">
            {/* Placeholder for houzz logo */}
            <div className="h-10 w-28 bg-swiss-black text-swiss-white flex items-center justify-center">
              <span className="font-montserrat text-sm">Лого houzz</span>
            </div>
          </div>
          
          <div className="mt-auto">
            <QRCode value={`https://${website}`} size={120} />
            <p className="text-xs mt-2 text-right font-sourceSans">{website}</p>
          </div>
        </div>
      </div>
      
      {/* Swiss style decorative element - vertical line */}
      <div className="absolute top-0 left-24 h-full w-[1px] bg-swiss-black opacity-10"></div>
      
      {/* Swiss style decorative element - horizontal line */}
      <div className="absolute bottom-24 left-0 h-[1px] w-full bg-swiss-black opacity-10"></div>
    </div>
  );
};

export default SwissBanner;
