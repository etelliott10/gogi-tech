import { Flex, Text } from '@radix-ui/themes';

const labels = ['Select Service', 'Pick Time', 'Your Details'];

interface BookingStepsProps {
  currentStep: 1 | 2 | 3;
}

export function BookingSteps({ currentStep }: BookingStepsProps) {
  return (
    <div style={{ borderRadius: '1rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '1rem' }}>
      <Flex align="center" gap="2">
        {labels.map((label, index) => {
          const step = (index + 1) as 1 | 2 | 3;
          const active = step <= currentStep;
          return (
            <Flex key={label} align="center" gap="2" style={{ flex: 1 }}>
              <span style={{
                display: 'inline-flex',
                height: '2rem',
                width: '2rem',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                fontSize: '0.75rem',
                fontWeight: 600,
                flexShrink: 0,
                backgroundColor: active ? 'var(--color-primary)' : 'var(--color-bg-elevated)',
                color: active ? 'white' : 'var(--color-text-muted)'
              }}>
                {step}
              </span>
              <Text size="1" style={{ display: 'none', color: active ? 'var(--color-text-primary)' : 'var(--color-text-muted)' }} className="step-label">
                {label}
              </Text>
              {step < 3 ? (
                <span style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border)' }} />
              ) : null}
            </Flex>
          );
        })}
      </Flex>

      <div style={{ marginTop: '1rem', height: '0.5rem', borderRadius: '9999px', backgroundColor: 'var(--color-bg-elevated)' }}>
        <div style={{
          height: '100%',
          borderRadius: '9999px',
          backgroundColor: 'var(--color-primary)',
          transition: 'width 0.3s',
          width: currentStep === 1 ? '33.33%' : currentStep === 2 ? '66.66%' : '100%'
        }} />
      </div>
    </div>
  );
}
