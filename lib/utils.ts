import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const separators = [') ', '-'];

export const phoneFormatter = (phone: string | null) => {
  if (!phone) return '';
  
  // Remove todos os caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Se não há números, retorna vazio
  if (!cleanPhone) return '';

  const isCellphone = cleanPhone.length === 11;
  let slices;

  if (isCellphone) {
    slices = [cleanPhone.slice(0, 2), cleanPhone.slice(2, 7), cleanPhone.slice(7)];
  } else {
    slices = [cleanPhone.slice(0, 2), cleanPhone.slice(2, 6), cleanPhone.slice(6)];
  }

  const result = slices.filter(Boolean).reduce((acc, slice, index) => {
    return acc ? `${acc}${separators[index - 1]}${slice}` : slice;
  }, '');

  return `(${result}`;
};