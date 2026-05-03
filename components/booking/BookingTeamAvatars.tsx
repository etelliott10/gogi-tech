import { Avatar, Flex } from '@radix-ui/themes';

export function AvatarGroup() {
  return (
    <Flex style={{ marginLeft: '0.5rem' }}>
      {['AG', 'KP', 'LM'].map((initials) => (
        <div key={initials} style={{ marginLeft: '-0.5rem' }}>
          <Avatar
            size="2"
            fallback={initials}
            variant="solid"
            color="crimson"
            style={{ border: '2px solid var(--color-bg-card)' }}
          />
        </div>
      ))}
    </Flex>
  );
}
