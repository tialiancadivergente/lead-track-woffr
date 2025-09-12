import React from 'react';
import { HeroSectionContent } from '@/lib/templates/types';
import Image from 'next/image';

interface HeroSectionProps {
  content: HeroSectionContent;
  theme: any;
  styling?: any;
}

export function HeroSection({ content, theme, styling }: HeroSectionProps) {
  const {
    logo,
    title,
    subtitle,
    description,
    ctaText,
    eventDetails
  } = content;

  return (
    <div 
      className="text-center py-12"
      style={{
        textAlign: styling?.textAlign || 'center',
        maxWidth: styling?.maxWidth || '100%'
      }}
    >
      {logo && (
        <div className="mb-8">
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={80}
            className="mx-auto"
          />
        </div>
      )}

      <h1 
        className="text-4xl md:text-6xl font-bold mb-4"
        style={{ color: theme.primary }}
      >
        {title}
      </h1>

      {subtitle && (
        <h2 
          className="text-2xl md:text-4xl font-semibold mb-6"
          style={{ color: theme.accent }}
        >
          {subtitle}
        </h2>
      )}

      <p 
        className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
        style={{ color: theme.text }}
      >
        {description}
      </p>

      <button
        className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: theme.primary,
          color: '#ffffff'
        }}
      >
        {ctaText}
      </button>

      {eventDetails && (
        <div className="mt-6 text-sm opacity-80">
          <span className="font-semibold">100% GRATUITO</span>
          {eventDetails.dates && (
            <>
              <span className="mx-2">|</span>
              <span>{eventDetails.dates}</span>
            </>
          )}
          {eventDetails.time && (
            <>
              <span className="mx-2">|</span>
              <span>{eventDetails.time}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
