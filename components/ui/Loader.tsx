import { Flex, Spinner } from '@radix-ui/themes';

export function Loader() {
  return (
    <Flex justify="center" py="6">
      <Spinner size="3" />
    </Flex>
  );
}
