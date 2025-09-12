"use client";

import { useState, useEffect, useCallback } from 'react';
import { TemplateConfig, SectionConfig } from '@/lib/templates/types';
import { templateRenderer } from '@/lib/templates/renderer';

interface UseTemplateReturn {
  template: TemplateConfig | null;
  loading: boolean;
  error: string | null;
  reload: () => Promise<void>;
  updateSection: (sectionId: string, updates: Partial<SectionConfig>) => void;
}

export function useTemplate(templateId: string): UseTemplateReturn {
  const [template, setTemplate] = useState<TemplateConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTemplate = useCallback(async () => {
    if (!templateId) {
      setError('ID do template não fornecido');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const loadedTemplate = await templateRenderer.loadTemplate(templateId);
      
      if (loadedTemplate) {
        setTemplate(loadedTemplate);
      } else {
        setError(`Template ${templateId} não encontrado`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar template');
    } finally {
      setLoading(false);
    }
  }, [templateId]);

  const reload = useCallback(async () => {
    await loadTemplate();
  }, [loadTemplate]);

  const updateSection = useCallback((sectionId: string, updates: Partial<SectionConfig>) => {
    if (!template) return;

    setTemplate(prevTemplate => {
      if (!prevTemplate) return prevTemplate;

      const updatedSections = prevTemplate.sections.map(section =>
        section.id === sectionId
          ? { ...section, ...updates }
          : section
      );

      return {
        ...prevTemplate,
        sections: updatedSections
      };
    });
  }, [template]);

  useEffect(() => {
    loadTemplate();
  }, [loadTemplate]);

  return {
    template,
    loading,
    error,
    reload,
    updateSection
  };
}

export function useTemplateList() {
  const [templates, setTemplates] = useState<TemplateConfig[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Em produção, isso seria uma chamada para uma API
    const loadTemplates = async () => {
      try {
        setLoading(true);
        // Simular carregamento de templates
        const mockTemplates: TemplateConfig[] = [
          {
            id: 'emotional-dependency-dark',
            name: 'Diagnóstico de Dependência Emocional - Tema Escuro',
            layout: '2column',
            theme: {
              primary: '#1a4d4d',
              secondary: '#2d7d7d',
              background: '#0a1a1a',
              text: '#ffffff',
              accent: '#ff6b35'
            },
            sections: [],
            metadata: {
              title: '',
              description: '',
              ogImage: ''
            }
          },
          {
            id: 'emotional-dependency-light',
            name: 'Diagnóstico de Dependência Emocional - Tema Claro',
            layout: '1column',
            theme: {
              primary: '#2d7d7d',
              secondary: '#4a9e9e',
              background: '#f8f6f1',
              text: '#2d2d2d',
              accent: '#8b4513'
            },
            sections: [],
            metadata: {
              title: '',
              description: '',
              ogImage: ''
            }
          },
          {
            id: 'emotional-dependency-3section',
            name: 'Diagnóstico de Dependência Emocional - 3 Seções',
            layout: '3section',
            theme: {
              primary: '#1a4d4d',
              secondary: '#2d7d7d',
              background: '#ffffff',
              text: '#2d2d2d',
              accent: '#d4af37'
            },
            sections: [],
            metadata: {
              title: '',
              description: '',
              ogImage: ''
            }
          }
        ];

        setTemplates(mockTemplates);
      } catch (error) {
        console.error('Erro ao carregar lista de templates:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTemplates();
  }, []);

  return { templates, loading };
}
