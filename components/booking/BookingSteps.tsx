import { cn } from '@/lib/utils';

const labels = ['Select Service', 'Pick Time', 'Your Details'];

interface BookingStepsProps {
  currentStep: 1 | 2 | 3;
}

export function BookingSteps({ currentStep }: BookingStepsProps) {
  return (
    <div className="rounded-2xl border border-border bg-bg-card p-4">
      <div className="flex items-center gap-2">
        {labels.map((label, index) => {
          const step = (index + 1) as 1 | 2 | 3;
          return (
            <div key={label} className="flex flex-1 items-center gap-2">
              <span
                className={cn(
                  'inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold',
                  step <= currentStep ? 'bg-primary text-white' : 'bg-bg-elevated text-text-muted'
                )}
              >
                {step}
              </span>
              <span className={cn('hidden text-xs md:inline', step <= currentStep ? 'text-text-primary' : 'text-text-muted')}>
                {label}
              </span>
              {step < 3 ? <span className="h-[1px] flex-1 bg-border" /> : null}
            </div>
          );
        })}
      </div>

      <div className="mt-4 h-2 rounded-full bg-bg-elevated">
        <div className={cn('h-full rounded-full bg-primary transition-all duration-300', currentStep === 1 ? 'w-1/3' : currentStep === 2 ? 'w-2/3' : 'w-full')} />
      </div>
    </div>
  );
}
