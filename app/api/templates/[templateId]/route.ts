import { NextRequest, NextResponse } from 'next/server';
import { TemplateConfig } from '@/lib/templates/types';

// Templates mockados - em produção, isso viria de um banco de dados
const templates: Record<string, TemplateConfig> = {
  'emotional-dependency-dark': {
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
    sections: [
      {
        id: 'hero',
        type: 'hero',
        order: 1,
        content: {
          logo: '/images/logo-resgate-dos-otimistas.png',
          title: 'FAÇA SEU DIAGNÓSTICO DE DEPENDÊNCIA EMOCIONAL GRATUITO',
          description: 'Descubra como AUMENTAR O SEU NÍVEL DE PERMISSÃO e melhorar seus resultados nas finanças, nos relacionamentos e na saúde.',
          ctaText: 'PARTICIPAR GRATUITAMENTE',
          eventDetails: {
            isFree: true,
            dates: '01, 02 E 03/09',
            time: '19H55'
          }
        },
        styling: {
          textAlign: 'left',
          maxWidth: '600px'
        }
      },
      {
        id: 'form',
        type: 'form',
        order: 2,
        content: {
          title: 'Preencha os campos abaixo agora:',
          fields: [
            {
              type: 'email',
              label: 'Melhor e-mail',
              placeholder: 'Melhor e-mail...',
              required: true
            },
            {
              type: 'whatsapp',
              label: 'DDD + Whatsapp',
              placeholder: 'DDD + Whatsapp...',
              required: true
            }
          ],
          submitText: 'PARTICIPAR GRATUITAMENTE'
        }
      },
      {
        id: 'illustration',
        type: 'hero',
        order: 3,
        content: {
          image: '/images/man-bound-ropes.png',
          alt: 'Homem amarrado por cordas vermelhas'
        }
      },
      {
        id: 'footer',
        type: 'footer',
        order: 4,
        content: {
          copyright: '©2024. All rights reserved. Politica de Privacidade'
        }
      }
    ],
    metadata: {
      title: 'Diagnóstico de Dependência Emocional Gratuito',
      description: 'Descubra como aumentar seu nível de permissão e melhorar seus resultados',
      ogImage: '/images/emotional-dependency-og.png'
    }
  },
  'emotional-dependency-light': {
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
    sections: [
      {
        id: 'hero',
        type: 'hero',
        order: 1,
        content: {
          logo: '/images/logo-resgate-dos-otimistas.png',
          title: 'FAÇA SEU DIAGNÓSTICO DE DEPENDÊNCIA EMOCIONAL',
          subtitle: 'GRATUITO',
          description: 'Descubra como AUMENTAR O SEU NÍVEL DE PERMISSÃO e melhorar seus resultados nas finanças, nos relacionamentos e na saúde.',
          ctaText: 'PARTICIPAR GRATUITAMENTE',
          eventDetails: {
            isFree: true,
            dates: '01, 02 E 03/09',
            time: '19H55'
          }
        },
        styling: {
          textAlign: 'center',
          maxWidth: '800px'
        }
      },
      {
        id: 'form',
        type: 'form',
        order: 2,
        content: {
          title: 'Preencha os campos abaixo agora:',
          fields: [
            {
              type: 'email',
              label: 'Seu melhor e-mail:',
              placeholder: 'Seu melhor e-mail...',
              required: true
            },
            {
              type: 'whatsapp',
              label: 'Seu WhatsApp:',
              placeholder: 'Seu WhatsApp...',
              required: true
            }
          ],
          submitText: 'PARTICIPAR GRATUITAMENTE'
        }
      },
      {
        id: 'footer',
        type: 'footer',
        order: 3,
        content: {
          copyright: '© 2024. All rights reserved. Política de Privacidade'
        }
      }
    ],
    metadata: {
      title: 'Diagnóstico de Dependência Emocional Gratuito',
      description: 'Descubra como aumentar seu nível de permissão e melhorar seus resultados',
      ogImage: '/images/emotional-dependency-light-og.png'
    }
  }
};

export async function GET(
  request: NextRequest,
  { params }: { params: { templateId: string } }
) {
  const { templateId } = params;

  if (!templateId) {
    return NextResponse.json(
      { error: 'ID do template não fornecido' },
      { status: 400 }
    );
  }

  const template = templates[templateId];

  if (!template) {
    return NextResponse.json(
      { error: `Template ${templateId} não encontrado` },
      { status: 404 }
    );
  }

  return NextResponse.json(template);
}
