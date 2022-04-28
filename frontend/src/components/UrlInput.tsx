import { useState, useEffect } from "react";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

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

  const onHandleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") handleClick();
  };

  return (
    <FormControl isInvalid={isInvalid}>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Enter url..."
          value={url}
          onChange={onChange}
          onKeyDown={onHandleKey}
          errorBorderColor="red.500"
          focusBorderColor={isInvalid ? "red.500" : "green.500"}
        />
        <InputRightElement width="4.5rem">
          <Button
            colorScheme="green"
            h="1.75rem"
            size="sm"
            onClick={handleClick}
          >
            Short
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>
        {url.trim() === "" ? "URL is required" : "URL is not valid"}
      </FormErrorMessage>
    </FormControl>
  );
};

export default UrlInput;
