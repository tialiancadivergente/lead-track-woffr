import { TemplateConfig, SectionConfig } from './types';

export class TemplateRenderer {
  private static instance: TemplateRenderer;
  private templates: Map<string, TemplateConfig> = new Map();

  private constructor() {}

  public static getInstance(): TemplateRenderer {
    if (!TemplateRenderer.instance) {
      TemplateRenderer.instance = new TemplateRenderer();
    }
    return TemplateRenderer.instance;
  }

  public async loadTemplate(templateId: string): Promise<TemplateConfig | null> {
    try {
      // Em produção, isso poderia ser uma chamada para uma API
      const response = await fetch(`/api/templates/${templateId}`);
      if (!response.ok) {
        throw new Error(`Template ${templateId} não encontrado`);
      }
      
      const template: TemplateConfig = await response.json();
      this.templates.set(templateId, template);
      return template;
    } catch (error) {
      console.error(`Erro ao carregar template ${templateId}:`, error);
      return null;
    }
  }

  public getTemplate(templateId: string): TemplateConfig | null {
    return this.templates.get(templateId) || null;
  }

  public getLayoutComponent(layout: string): string {
    switch (layout) {
      case '1column':
        return 'Layout1Column';
      case '2column':
        return 'Layout2Column';
      case '3section':
        return 'Layout3Section';
      default:
        return 'Layout1Column';
    }
  }

  public getSectionComponent(sectionType: string): string {
    switch (sectionType) {
      case 'hero':
        return 'HeroSection';
      case 'form':
        return 'FormSection';
      case 'mentor':
        return 'MentorSection';
      case 'journey':
        return 'JourneySection';
      case 'footer':
        return 'FooterSection';
      default:
        return 'HeroSection';
    }
  }

  public validateTemplate(template: TemplateConfig): boolean {
    if (!template.id || !template.layout || !template.sections) {
      return false;
    }

    if (template.sections.length === 0) {
      return false;
    }

    // Verificar se todas as seções têm IDs únicos
    const sectionIds = template.sections.map(s => s.id);
    const uniqueIds = new Set(sectionIds);
    
    if (sectionIds.length !== uniqueIds.size) {
      return false;
    }

    return true;
  }

  public getTemplateMetadata(templateId: string) {
    const template = this.getTemplate(templateId);
    if (!template) return null;

    return {
      title: template.metadata.title,
      description: template.metadata.description,
      ogImage: template.metadata.ogImage,
      theme: template.theme
    };
  }
}

export const templateRenderer = TemplateRenderer.getInstance();
