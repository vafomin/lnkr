import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import QRCode from "react-qr-code";

interface QrModalProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

const QrModal: React.FC<QrModalProps> = (props) => {
  const { url, isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>QR-code</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <QRCode value={url} />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QrModal;
