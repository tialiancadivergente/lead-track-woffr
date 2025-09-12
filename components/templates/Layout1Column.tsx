import React from 'react';
import { TemplateConfig } from '@/lib/templates/types';

interface Layout1ColumnProps {
  template: TemplateConfig;
  children: React.ReactNode;
}

export function Layout1Column({ template, children }: Layout1ColumnProps) {
  const { theme } = template;

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundColor: theme.background,
        color: theme.text
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
