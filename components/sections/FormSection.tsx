import React from 'react';
import { FormSectionContent } from '@/lib/templates/types';

interface FormSectionProps {
  content: FormSectionContent;
  theme: any;
}

export function FormSection({ content, theme }: FormSectionProps) {
  const { title, fields, submitText, eventDetails } = content;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
    console.log('Formulário enviado');
  };

  return (
    <div className="py-8">
      <h2 
        className="text-2xl font-semibold mb-6 text-center"
        style={{ color: theme.primary }}
      >
        {title}
      </h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        {fields.map((field, index) => (
          <div key={index}>
            <label 
              className="block text-sm font-medium mb-2"
              style={{ color: theme.text }}
            >
              {field.label}
            </label>
            
            {field.type === 'whatsapp' ? (
              <div className="flex">
                <select 
                  className="px-3 py-2 border rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ backgroundColor: theme.background, color: theme.text }}
                >
                  <option value="+55">🇧🇷 +55</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
                <input
                  type="tel"
                  placeholder={field.placeholder}
                  required={field.required}
                  className="flex-1 px-3 py-2 border rounded-r-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ backgroundColor: theme.background, color: theme.text }}
                />
              </div>
            ) : (
              <input
                type={field.type === 'email' ? 'email' : 'text'}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: theme.background, color: theme.text }}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: theme.primary,
            color: '#ffffff'
          }}
        >
          {submitText}
        </button>
      </form>

      {eventDetails && (
        <div className="mt-6 text-center text-sm opacity-80">
          <span className="font-semibold">100% GRATUITO</span>
          {eventDetails.dates && (
            <>
              <span className="mx-2">|</span>
              <span>{eventDetails.dates}</span>
            </>
          )}
          {eventDetails.time && (
            <>
              <span className="mx-2">|</span>
              <span>{eventDetails.time}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
