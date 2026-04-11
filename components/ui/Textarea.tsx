import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
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
      <textarea
        id={id}
        ref={ref}
        className={cn(
          'w-full rounded-xl border border-border bg-bg-card px-3 py-2.5 text-sm text-text-primary outline-none transition',
          'placeholder:text-text-muted focus:border-primary-light focus:ring-2 focus:ring-primary/20',
          className
        )}
        {...props}
      />
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
});
