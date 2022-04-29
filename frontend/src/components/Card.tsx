import { useCallback } from "react";
import {
  Box,
  Text,
  Link,
  Button,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { MdContentCopy, MdOpenInNew } from "react-icons/md";
import { useClipboard } from "use-clipboard-copy";

import QrModal from "./QrModal";

import IUrls from "../types/urls";
import { getFavicon } from "../utils";
import { defaultDomain } from "../config";

const Card: React.FC<IUrls> = (props) => {
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
        <Box display="flex" gap={2} alignItems="center" maxWidth="200px">
          <Box pt={1}>
            <img src={getFavicon(url)} />
          </Box>
          <Text fontSize="md" color="teal" isTruncated>
            {url}
          </Text>
        </Box>
        <Link href={shortUrl} isExternal>
          <Box display="flex" gap={2} alignItems="center">
            Go linkr <MdOpenInNew />
          </Box>
        </Link>
      </Box>
      <Box display="flex" gap={2} pt={4}>
        <Button
          size="sm"
          colorScheme="green"
          leftIcon={<MdContentCopy />}
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
