import { Box, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  let navigate = useNavigate();

  const onBack = () => {
    navigate("/");
  };

  return (
    <Box display="flex" flexDirection="column" pt={8} alignItems="center">
      <Heading mb={4}>There doesn't seem to be anything here...</Heading>
      <Button size="lg" onClick={onBack}>
        Back to home
      </Button>
    </Box>
  );
};

export default NotFound;
