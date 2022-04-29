import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { MdSave } from "react-icons/md";
import QRCode from "react-qr-code";

import { saveSvg } from "../utils";

interface QrModalProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

const QrModal: React.FC<QrModalProps> = (props) => {
  const { url, isOpen, onClose } = props;
  const [useModal] = useMediaQuery("(min-width: 429px)");

  const onClickSave = () => {
    saveSvg("#urlQR");
    onClose();
  };

  if (!useModal) {
    return (
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">QR-code</DrawerHeader>
          <DrawerBody>
            <Box display="flex" flexDirection="column" pt={8}>
              <QRCode id="urlQR" value={url} />

              <Button
                my={4}
                size="md"
                colorScheme="green"
                leftIcon={<MdSave />}
                onClick={onClickSave}
              >
                Save
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>QR-code</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <QRCode id="urlQR" value={url} />
        </ModalBody>
        <ModalFooter>
          <Button
            size="md"
            colorScheme="green"
            leftIcon={<MdSave />}
            onClick={onClickSave}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QrModal;
