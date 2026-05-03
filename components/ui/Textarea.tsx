import { forwardRef } from 'react';
import { TextArea, Text } from '@radix-ui/themes';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
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
      <TextArea
        id={id}
        ref={ref}
        size="2"
        variant="surface"
        color={error ? 'red' : undefined}
        {...(props as React.ComponentPropsWithoutRef<typeof TextArea>)}
      />
      {error ? (
        <Text size="1" color="red">
          {error}
        </Text>
      ) : null}
    </div>
  );
});
