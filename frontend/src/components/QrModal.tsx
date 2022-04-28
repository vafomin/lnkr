import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
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

  const onClickSave = () => {
    saveSvg("#urlQR");
    onClose();
  };

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
