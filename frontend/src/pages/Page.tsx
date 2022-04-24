import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import { getURL } from "../api";

const Page: React.FC = () => {
  const { token } = useParams();
  let navigate = useNavigate();

  const getData = async () => {
    if (!token) return;
    const res = await getURL(token);
    if (res) {
      setTimeout(() => location.replace(res), 10000);
    } else {
      navigate("/error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box display="flex" flexDirection="column" pt={8} alignItems="center">
      <Heading>You will be redirected to the site in 10 seconds...</Heading>
    </Box>
  );
};

export default Page;
