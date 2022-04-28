import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";

import Home from "./pages/Home";
import Page from "./pages/Page";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/u/:token" element={<Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default App;
