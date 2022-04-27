import { useState } from "react";
import { Box, Container, Stack } from "@chakra-ui/react";
import { useLocalStorage } from "usehooks-ts";
import UrlInput from "../components/UrlInput";
import Card from "../components/Card";

import IUrls from "../types/urls";
import { shortURL } from "../api";

const Home: React.FC = () => {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useLocalStorage<Array<IUrls>>("myUrls", []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const onShortUrl = async () => {
    const res = await shortURL(url);
    setUrls([{ url: res.url, token: res.token }, ...urls]);
    setUrl("");
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" pt={8}>
        <UrlInput url={url} onChange={handleChange} onClick={onShortUrl} />

        <Stack spacing={2} pt={4}>
          {urls ? (
            urls.map((el, i) => (
              <Card key={`card_number_${i}`} url={el.url} token={el.token} />
            ))
          ) : (
            <></>
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
