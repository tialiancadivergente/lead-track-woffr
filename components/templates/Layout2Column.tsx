import React from 'react';
import { TemplateConfig } from '@/lib/templates/types';

interface Layout2ColumnProps {
  template: TemplateConfig;
  children: React.ReactNode;
}

export function Layout2Column({ template, children }: Layout2ColumnProps) {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
