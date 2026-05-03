import { forwardRef } from 'react';
import { TextField, Text } from '@radix-ui/themes';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, id, ...props },
  ref
) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {label ? (
        <Text as="label" htmlFor={id} size="2" weight="medium">
          {label}
        </Text>
      ) : null}
      <TextField.Root
        id={id}
        ref={ref}
        size="2"
        variant="surface"
        color={error ? 'red' : undefined}
        {...(props as React.ComponentPropsWithoutRef<typeof TextField.Root>)}
      />
      {error ? (
        <Text size="1" color="red">
          {error}
        </Text>
      ) : null}
    </div>
  );
});
