import { useState } from "react";
import { Container, Center } from "@chakra-ui/react";
import UrlInput from "../components/UrlInput";

import { shortURL } from "../api";

const Home: React.FC = () => {
  const [url, setUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const onShortUrl = async () => {
    const res = await shortURL(url);
    console.log(res);
  };

  return (
    <Container>
      <Center pt={8}>
        <UrlInput url={url} onChange={handleChange} onClick={onShortUrl} />
      </Center>
    </Container>
  );
};

export default Home;
