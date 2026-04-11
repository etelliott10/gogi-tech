import { ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { AvatarGroup } from '@/components/booking/BookingTeamAvatars';

export function BookingSidebar() {
  return (
    <div className="space-y-4">
      <Card variant="elevated" className="space-y-3 p-5">
        <p className="font-semibold">What happens next</p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li>1. We review your form and goals.</li>
          <li>2. We arrive with a custom recommendation path.</li>
          <li>3. You get a clear implementation plan.</li>
        </ul>
      </Card>

      <Card className="space-y-3 p-5">
        <p className="text-sm text-text-muted">You’ll speak with</p>
        <div className="flex items-center gap-3">
          <AvatarGroup />
          <p className="text-sm">
            Strategy Team
            <span className="block text-xs text-text-muted">AI + Automation Specialists</span>
          </p>
        </div>
        <p className="text-sm text-text-muted">If it’s not a fit, we’ll tell you honestly.</p>
      </Card>

      <Card className="space-y-2 p-5">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <ShieldCheck className="h-4 w-4 text-primary-light" />
          SSL secured booking
        </div>
        <p className="text-xs text-text-muted">Your data is used only to schedule and prepare your strategy call.</p>
      </Card>
    </div>
  );
}
