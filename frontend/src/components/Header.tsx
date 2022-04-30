import {
  Box,
  Flex,
  Button,
  Text,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <img src="/logo.png" />
          <Text fontSize="2xl" px={2} className="noSelect">
            Lnkr
          </Text>
        </Box>

        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
