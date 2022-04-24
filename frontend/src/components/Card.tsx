import { useCallback } from "react";
import { Box, Text, Link, Button, useToast } from "@chakra-ui/react";
import { ExternalLinkIcon, CopyIcon } from "@chakra-ui/icons";
import { useClipboard } from "use-clipboard-copy";

interface CardProps {
  url: string;
  token: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { url, token } = props;
  const clipboard = useClipboard();
  const toast = useToast();

  const onCopyClick = useCallback(() => {
    clipboard.copy(url);
    toast({
      position: "top-right",
      title: "Copied!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }, [clipboard.copy]);

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
        <Button
          size="sm"
          colorScheme="green"
          leftIcon={<CopyIcon />}
          onClick={onCopyClick}
        >
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
