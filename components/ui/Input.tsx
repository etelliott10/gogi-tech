import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, className, id, ...props },
  ref
) {
  return (
    <div className="space-y-2">
      {label ? (
        <label htmlFor={id} className="text-sm font-medium text-text-primary">
          {label}
        </label>
      ) : null}
      <input
        id={id}
        ref={ref}
        className={cn(
          'h-11 w-full rounded-xl border border-border bg-bg-card px-3 text-sm text-text-primary outline-none transition',
          'placeholder:text-text-muted focus:border-primary-light focus:ring-2 focus:ring-primary/20',
          className
        )}
        {...props}
      />
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
});
