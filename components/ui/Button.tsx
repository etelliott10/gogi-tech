'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { Button as RadixButton, Spinner } from '@radix-ui/themes';

type RadixVariant = 'solid' | 'soft' | 'outline' | 'ghost' | 'surface';
type RadixSize = '1' | '2' | '3';

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
  style?: React.CSSProperties;
}

const variantMap: Record<NonNullable<ButtonProps['variant']>, RadixVariant> = {
  primary: 'solid',
  secondary: 'soft',
  ghost: 'ghost',
  outline: 'outline'
};

const sizeMap: Record<NonNullable<ButtonProps['size']>, RadixSize> = {
  sm: '1',
  md: '2',
  lg: '2',
  xl: '3'
};

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
  type = 'button',
  style
}: ButtonProps) {
  const radixVariant = variantMap[variant];
  const radixSize = sizeMap[size];

  const content = (
    <>
      {loading ? <Spinner /> : null}
      {!loading && icon && iconPosition === 'left' ? icon : null}
      {children}
      {!loading && icon && iconPosition === 'right' ? icon : null}
    </>
  );

  if (href && !disabled && !loading) {
    return (
      <RadixButton
        variant={radixVariant}
        size={radixSize}
        radius="full"
        className={className}
        style={style}
        asChild
      >
        <Link href={href}>{content}</Link>
      </RadixButton>
    );
  }

  return (
    <RadixButton
      type={type}
      variant={radixVariant}
      size={radixSize}
      radius="full"
      disabled={disabled || loading}
      onClick={onClick}
      className={className}
      style={style}
    >
      {content}
    </RadixButton>
  );
}
