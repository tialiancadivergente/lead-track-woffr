"use client"
import { Label } from "@/components/ui/label"

interface CustomRadioProps {
  options: Array<{ value: string; label: string; weight?: number }>
  value: string
  onChange: (value: string) => void
  className?: string,
  style?: React.CSSProperties
}

export function CustomInputRadio({ options, value, onChange, className, style }: CustomRadioProps) {
  return (
    <div className={className} style={style}>
      {options.map((option) => (
        <div
          key={option.value}
          className={`
            relative cursor-pointer mb-3 px-4 py-2 rounded-lg border transition-all duration-200 text-left
            ${value === option.value 
              ? "border-[#C0964B] bg-[#C0964B]/10 shadow-md" 
              : "border-gray-600 bg-transparent hover:border-gray-500"
            }
          `}
          onClick={() => onChange(option.value)}
        >
          {/* Input radio invisível */}
          <input
            type="radio"
            name="radio-options"
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="absolute opacity-0 pointer-events-none"
          />
          
          {/* Conteúdo da opção */}
          <Label className={`
            text-white cursor-pointer text-sm md:text-base font-medium
            ${value === option.value ? "text-blue-50" : "text-white"}
          `}>
            {option.label}
          </Label>
        </div>
      ))}
    </div>
  )
}

