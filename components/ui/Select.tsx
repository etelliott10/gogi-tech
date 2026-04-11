import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Option[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, className, options, id, ...props },
  ref
) {
  return (
    <div className="space-y-2">
      {label ? (
        <label htmlFor={id} className="text-sm font-medium text-text-primary">
          {label}
        </label>
      ) : null}
      <select
        id={id}
        ref={ref}
        className={cn(
          'h-11 w-full rounded-xl border border-border bg-bg-card px-3 text-sm text-text-primary outline-none transition',
          'focus:border-primary-light focus:ring-2 focus:ring-primary/20',
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
});
