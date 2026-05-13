import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string; // Para ajustes pontuais de margem, etc.
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  // Base de estilos que nunca muda
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-full cursor-pointer';

  const variants = {
    primary:
      'bg-brand-gradient text-white shadow-lg hover:shadow-brand-start/20 hover:-translate-y-0.5',
    secondary: 'bg-surface-raised text-foreground hover:bg-surface',
    outline:
      'border-2 border-brand-start text-brand-start hover:bg-brand-start/10',
    ghost: 'text-muted hover:text-foreground hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm rounded-pill',
    md: 'px-8 py-3 text-base rounded-pill',
    lg: 'px-10 py-4 text-lg rounded-pill',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
