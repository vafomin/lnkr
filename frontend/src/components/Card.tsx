import { useCallback } from "react";
import {
  Box,
  Text,
  Link,
  Button,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { ExternalLinkIcon, CopyIcon } from "@chakra-ui/icons";
import { useClipboard } from "use-clipboard-copy";

import QrModal from "./QrModal";

import { defaultDomain } from "../config";

interface CardProps {
  url: string;
  token: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { url, token } = props;
  const clipboard = useClipboard();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const shortUrl = `${defaultDomain}/u/${token}`;

  const onCopyClick = useCallback(() => {
    clipboard.copy(shortUrl);
    toast({
      position: "top-right",
      title: "Copied!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }, [clipboard.copy]);

  const onQrClick = () => {
    onOpen();
  };

  return (
    <Box w="100%" p={4} borderRadius="lg" borderWidth="1px">
      <Box display="flex" gap={4}>
        <Box maxWidth="200px">
          <Text fontSize="md" color="teal" isTruncated>
            {url}
          </Text>
        </Box>
        <Link href={shortUrl} isExternal>
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
        <Button size="sm" colorScheme="teal" onClick={onQrClick}>
          QR-code
        </Button>
      </Box>
      <QrModal url={shortUrl} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Card;
