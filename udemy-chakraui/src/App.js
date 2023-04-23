import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./themes/theme";

function App() {
return (
  <ChakraProvider theme={theme}>
    <Button colorScheme="teal">ボタン</Button>
  </ChakraProvider>
);
}

export default App;
