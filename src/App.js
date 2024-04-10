import './App.css';
import { Image, Box, Link, Button, Text } from "@chakra-ui/react";
import './App.css';
import { FaDiscord } from 'react-icons/fa';

function Discord() {
  return (
      <Link
          href="https://discord.gg/speck"
          style={{ textDecoration: "none" }}
          target="_blank"
      >
          <Button
              variant="outline"
              bg={"white"} // Change the background color to white
              rounded={"full"}
              px={6}
              size="lg"
              _hover={{
                  bg: "rgba(255,255,255,0.2)",
              }}
          >
              <FaDiscord style={{ marginRight: "-16px", marginLeft: "-16px", fontSize: "32px" }} /> {/* Set the font size to 24px */}
          </Button>
      </Link>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box
          width="4xl"
          height="auto"
          
        >
          <Link href="https://speck.bot">
            <Text
                as="h1"
                fontWeight={600}
                fontSize={{ base: "7xl", sm: "7xl", md: "7xl" }}
                bgGradient="linear(to-b, rgba(255, 255, 255, 1), rgba(230, 230, 230, 0.8))"
                bgClip="text"
                textAlign="center"
                pb="0.1em"
                mt={-4}
                mb="-0.1em"
                // Change spacing between lines
                lineHeight="105%"
                maxWidth="4xl"
            >
              Speck
            </Text>
            </Link>

            <Text
                paddingTop="20px"
                as="h1"
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
                bgGradient="linear(to-b, rgba(255, 255, 255, 1), rgba(230, 230, 230, 0.8))"
                bgClip="text"
                textAlign="center"
                pb="0.1em"
                mt={-4}
                mb="16px"
                // Change spacing between lines
                lineHeight="105%"
                maxWidth="8xl"
            >
              Automate your browser.
            </Text>
        </Box>

        <Box>
          <Discord />
        </Box>

        <Image mt="-32px" src="/Mascot_Popup_256.gif" alt="Image" />
        <Box
          width={256}
          height={16}
          bgGradient="linear(to-b, gray.900, transparent)"

        >
        </Box>
      </header>
    </div>
  );
}


export default App;
