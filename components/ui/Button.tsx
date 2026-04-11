import type { ReactNode } from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variantStyles = {
  primary: 'bg-[#C0152A] text-white hover:bg-[#8B0D1E] shadow-[0_0_20px_rgba(192,21,42,0.4)]',
  secondary: 'bg-[#1C1C21] text-white border border-[#2A2A32] hover:border-[#C0152A]',
  ghost: 'bg-transparent text-[#C0152A] hover:bg-[rgba(192,21,42,0.1)]',
  outline: 'border-2 border-[#C0152A] text-[#C0152A] hover:bg-[#C0152A] hover:text-white'
};

const sizeStyles = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
  xl: 'h-14 px-8 text-lg'
};

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark focus-visible:ring-primary-light';

function ButtonContent({ children, icon, iconPosition, loading }: Pick<ButtonProps, 'children' | 'icon' | 'iconPosition' | 'loading'>) {
  return (
    <>
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
      {!loading && icon && iconPosition === 'left' ? icon : null}
      {children}
      {!loading && icon && iconPosition === 'right' ? icon : null}
    </>
  );
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  loading,
  disabled,
  onClick,
  href,
  className,
  type = 'button'
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    'disabled:cursor-not-allowed disabled:opacity-60',
    className
  );

  if (href && !disabled && !loading) {
    return (
      <Link href={href} className={classes}>
        <ButtonContent icon={icon} iconPosition={iconPosition} loading={loading}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  if (href && (disabled || loading)) {
    return (
      <span className={cn(classes, 'pointer-events-none opacity-60')}>
        <ButtonContent icon={icon} iconPosition={iconPosition} loading={loading}>
          {children}
        </ButtonContent>
      </span>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={classes}>
      <ButtonContent icon={icon} iconPosition={iconPosition} loading={loading}>
        {children}
      </ButtonContent>
    </button>
  );
}
