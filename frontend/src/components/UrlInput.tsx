import { useState, useEffect } from "react";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";

interface UrlInputProps {
  url: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const UrlInput: React.FC<UrlInputProps> = (props) => {
  const { url, onChange, onClick } = props;
  const [isInvalid, setIsInvalid] = useState(false);

  const urlRegex =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/;

  useEffect(() => {
    setIsInvalid(false);
  }, [url]);

  const handleClick = () =>
    urlRegex.test(url) ? onClick() : setIsInvalid(true);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Enter url..."
        value={url}
        onChange={onChange}
        isInvalid={isInvalid}
        errorBorderColor="red.500"
      />
      <InputRightElement width="4.5rem">
        <Button colorScheme="green" h="1.75rem" size="sm" onClick={handleClick}>
          Short
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default UrlInput;
