# 🏗️ Nova Arquitetura de Templates

## Visão Geral

Esta nova arquitetura foi projetada para suportar múltiplos templates de landing pages de forma flexível e escalável. O sistema permite criar, configurar e renderizar diferentes layouts e temas através de arquivos de configuração JSON.

## 🎯 Objetivos da Nova Arquitetura

1. **Flexibilidade**: Suporte a diferentes layouts (1 coluna, 2 colunas, 3 seções)
2. **Reutilização**: Componentes modulares que podem ser combinados
3. **Configurabilidade**: Temas e conteúdo definidos via JSON
4. **Escalabilidade**: Fácil adição de novos templates e seções
5. **Manutenibilidade**: Código organizado e bem estruturado

## 📁 Estrutura de Diretórios

```
lib/
├── templates/
│   ├── types.ts              # Tipos TypeScript para templates
│   ├── renderer.ts           # Sistema de renderização
│   └── configs/              # Configurações de templates
│       ├── template1.json
│       ├── template2.json
│       └── template3.json

components/
├── templates/                 # Componentes de layout
│   ├── TemplateRenderer.tsx
│   ├── Layout1Column.tsx
│   ├── Layout2Column.tsx
│   └── Layout3Section.tsx
└── sections/                  # Componentes de seção
    ├── HeroSection.tsx
    ├── FormSection.tsx
    ├── MentorSection.tsx
    ├── JourneySection.tsx
    └── FooterSection.tsx

hooks/
└── useTemplate.ts            # Hook para gerenciar templates

app/
├── api/
│   └── templates/
│       └── [templateId]/
│           └── route.ts      # API para servir templates
└── templates/
    └── [templateId]/
        └── page.tsx          # Página dinâmica de templates
```

## 🔧 Como Funciona

### 1. Sistema de Configuração

Cada template é definido por um arquivo JSON que especifica:

```json
{
  "id": "template-id",
  "name": "Nome do Template",
  "layout": "2column",
  "theme": {
    "primary": "#1a4d4d",
    "secondary": "#2d7d7d",
    "background": "#0a1a1a",
    "text": "#ffffff",
    "accent": "#ff6b35"
  },
  "sections": [
    {
      "id": "hero",
      "type": "hero",
      "order": 1,
      "content": { ... },
      "styling": { ... }
    }
  ],
  "metadata": { ... }
}
```

### 2. Componentes Modulares

- **Layouts**: Definem a estrutura geral da página
- **Seções**: Componentes reutilizáveis para diferentes tipos de conteúdo
- **Tema**: Sistema de cores e estilos aplicado dinamicamente

### 3. Renderização Dinâmica

O `TemplateRenderer` carrega a configuração e renderiza os componentes apropriados baseado no tipo de seção e layout.

## 🚀 Como Usar

### 1. Criar um Novo Template

1. Adicione um novo arquivo JSON em `lib/templates/configs/`
2. Defina as seções e conteúdo desejados
3. Configure o tema e layout

### 2. Acessar um Template

```
/templates/[templateId]
```

Exemplo: `/templates/emotional-dependency-dark`

### 3. Personalizar um Template

```typescript
import { useTemplate } from '@/hooks/useTemplate';

function MyComponent() {
  const { template, updateSection } = useTemplate('template-id');
  
  const updateHero = () => {
    updateSection('hero', {
      content: { title: 'Novo Título' }
    });
  };
  
  // ...
}
```

## 🎨 Tipos de Layout Suportados

### Layout1Column
- Layout centralizado em uma coluna
- Ideal para páginas simples e focadas

### Layout2Column
- Duas colunas lado a lado
- Perfeito para formulários com ilustrações

### Layout3Section
- Seções empilhadas verticalmente
- Ideal para páginas com múltiplas seções

## 📝 Tipos de Seção

### HeroSection
- Cabeçalho principal com título e CTA
- Suporte a logo, subtítulo e detalhes do evento

### FormSection
- Formulário de captura de leads
- Campos configuráveis (email, WhatsApp, etc.)

### MentorSection
- Seção do mentor com foto e biografia
- CTA personalizado

### JourneySection
- Seção de motivação/jornada
- Suporte a imagem de fundo

### FooterSection
- Rodapé com links e copyright
- Logo opcional

## 🔄 Fluxo de Dados

1. **Carregamento**: A página carrega o template via API
2. **Configuração**: O template é validado e processado
3. **Renderização**: Os componentes são renderizados baseado na configuração
4. **Interação**: Usuários podem interagir com formulários e CTAs

## 🚧 Próximos Passos

1. **Banco de Dados**: Migrar de JSON estático para banco de dados
2. **Editor Visual**: Interface para criar/editar templates
3. **Analytics**: Rastreamento de performance por template
4. **A/B Testing**: Sistema para testar diferentes versões
5. **Cache**: Sistema de cache para melhor performance

## 💡 Vantagens da Nova Arquitetura

- ✅ **Flexibilidade**: Fácil criação de novos templates
- ✅ **Reutilização**: Componentes compartilhados entre templates
- ✅ **Manutenção**: Mudanças centralizadas em um local
- ✅ **Performance**: Renderização otimizada
- ✅ **SEO**: Metadados dinâmicos por template
- ✅ **Escalabilidade**: Suporte a centenas de templates

## 🐛 Solução de Problemas

### Template não carrega
- Verifique se o ID do template está correto
- Confirme se o arquivo JSON está válido
- Verifique os logs do console

### Estilos não aplicam
- Confirme se as cores do tema estão em formato hexadecimal
- Verifique se o CSS está sendo carregado corretamente

### Componentes não renderizam
- Verifique se o tipo de seção está correto
- Confirme se o componente existe
- Verifique se há erros de TypeScript

## 📚 Recursos Adicionais

- [Documentação do Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
