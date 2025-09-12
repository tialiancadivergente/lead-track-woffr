import React from 'react';
import { TemplateConfig, SectionConfig } from '@/lib/templates/types';
import { Layout1Column } from './Layout1Column';
import { Layout2Column } from './Layout2Column';
import { Layout3Section } from './Layout3Section';
import { HeroSection } from '../sections/HeroSection';
import { FormSection } from '../sections/FormSection';

interface TemplateRendererProps {
  template: TemplateConfig;
}

function getLayoutComponent(layout: string) {
  switch (layout) {
    case '1column':
      return Layout1Column;
    case '2column':
      return Layout2Column;
    case '3section':
      return Layout3Section;
    default:
      return Layout1Column;
  }
}

function getSectionComponent(sectionType: string) {
  switch (sectionType) {
    case 'hero':
      return HeroSection;
    case 'form':
      return FormSection;
    default:
      return HeroSection;
  }
}

export function TemplateRenderer({ template }: TemplateRendererProps) {
  const Layout = getLayoutComponent(template.layout);
  
  // Ordenar seções por ordem
  const sortedSections = [...template.sections].sort((a, b) => a.order - b.order);

  const renderSection = (section: SectionConfig) => {
    const SectionComponent = getSectionComponent(section.type);
    
    return (
      <SectionComponent
        key={section.id}
        content={section.content as any}
        theme={template.theme}
        styling={section.styling}
      />
    );
  };

  return (
    <Layout template={template}>
      {sortedSections.map(renderSection)}
    </Layout>
  );
}
