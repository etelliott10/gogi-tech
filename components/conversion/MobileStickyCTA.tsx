import { Button } from '@/components/ui/Button';

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-bg-elevated/95 p-3 backdrop-blur md:hidden">
      <Button href="/book" size="lg" className="w-full justify-center">
        Book Free Call
      </Button>
    </div>
  );
}
