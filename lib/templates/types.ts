export interface TemplateConfig {
  id: string;
  name: string;
  layout: '1column' | '2column' | '3section';
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  sections: SectionConfig[];
  metadata: {
    title: string;
    description: string;
    ogImage: string;
  };
}

export interface SectionConfig {
  id: string;
  type: 'hero' | 'form' | 'mentor' | 'journey' | 'footer';
  content: Record<string, any>;
  styling?: Record<string, any>;
  order: number;
}

export interface HeroSectionContent {
  logo: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  eventDetails?: {
    isFree: boolean;
    dates: string;
    time: string;
  };
}

export interface FormSectionContent {
  title: string;
  fields: FormField[];
  submitText: string;
  eventDetails?: {
    isFree: boolean;
    dates: string;
    time: string;
  };
}

export interface FormField {
  type: 'email' | 'whatsapp' | 'text' | 'select';
  label: string;
  placeholder: string;
  required: boolean;
  validation?: string;
}

export interface MentorSectionContent {
  title: string;
  mentorName: string;
  mentorTitle: string;
  mentorImage: string;
  mentorBio: string;
  ctaText: string;
}

export interface JourneySectionContent {
  title: string;
  description: string;
  backgroundImage?: string;
  ctaText: string;
}

export interface FooterSectionContent {
  copyright: string;
  privacyPolicy: string;
  termsOfUse?: string;
  logo?: string;
}
