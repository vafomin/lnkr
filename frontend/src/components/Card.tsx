import { Box, Text, Link, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface CardProps {
  url: string;
  token: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { url, token } = props;

  return (
    <Box w="100%" p={4} borderRadius="lg" borderWidth="1px">
      <Box display="flex" gap={4}>
        <Text fontSize="md" color="teal" isTruncated>
          {url}
        </Text>
        <Link href={`http://localhost:3001/u/${token}`} isExternal>
          Go linkr <ExternalLinkIcon mx="2px" />
        </Link>
      </Box>
      <Box display="flex" gap={2} pt={4}>
        <Button size="sm" colorScheme="green">
          Copy link
        </Button>
        <Button size="sm" colorScheme="teal">
          QR-code
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
