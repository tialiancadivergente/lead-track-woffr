import React from 'react';
import { TemplateConfig } from '@/lib/templates/types';

interface Layout3SectionProps {
  template: TemplateConfig;
  children: React.ReactNode;
}

export function Layout3Section({ template, children }: Layout3SectionProps) {
  const { theme } = template;

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundColor: theme.background,
        color: theme.text
      }}
    >
      <div className="space-y-0">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="w-full">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
