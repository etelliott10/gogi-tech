import { Select as RadixSelect, Text } from '@radix-ui/themes';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  error?: string;
  options: Option[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  name?: string;
}

export function Select({ label, error, options, value, onValueChange, placeholder, name }: SelectProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {label ? (
        <Text as="label" size="2" weight="medium">
          {label}
        </Text>
      ) : null}
      <RadixSelect.Root value={value} onValueChange={onValueChange} name={name}>
        <RadixSelect.Trigger
          variant="surface"
          placeholder={placeholder ?? 'Select…'}
          style={{ width: '100%' }}
        />
        <RadixSelect.Content>
          {options.map((option) => (
            <RadixSelect.Item key={option.value} value={option.value}>
              {option.label}
            </RadixSelect.Item>
          ))}
        </RadixSelect.Content>
      </RadixSelect.Root>
      {error ? (
        <Text size="1" color="red">
          {error}
        </Text>
      ) : null}
    </div>
  );
}
