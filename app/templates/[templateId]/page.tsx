import React from 'react';
import { Metadata } from 'next';
import { TemplateRenderer } from '@/components/templates/TemplateRenderer';
import { useTemplate } from '@/hooks/useTemplate';
import { templateRenderer } from '@/lib/templates/renderer';

interface TemplatePageProps {
  params: { templateId: string };
}

// Função para gerar metadados dinamicamente
export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const template = await templateRenderer.loadTemplate(params.templateId);
  
  if (!template) {
    return {
      title: 'Template não encontrado',
      description: 'O template solicitado não foi encontrado'
    };
  }

  return {
    title: template.metadata.title,
    description: template.metadata.description,
    openGraph: {
      images: [template.metadata.ogImage]
    }
  };
}

// Componente da página
function TemplatePageContent({ templateId }: { templateId: string }) {
  const { template, loading, error } = useTemplate(templateId);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-lg">Carregando template...</p>
        </div>
      </div>
    );
  }

  if (error || !template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Erro ao carregar template</h1>
          <p className="text-gray-600">{error || 'Template não encontrado'}</p>
        </div>
      </div>
    );
  }

  return <TemplateRenderer template={template} />;
}

export default function TemplatePage({ params }: TemplatePageProps) {
  return <TemplatePageContent templateId={params.templateId} />;
}
