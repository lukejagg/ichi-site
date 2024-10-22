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
    <>
        <Box
          backgroundColor="gray.700"
          minH="40vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
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
                SPECK!
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
                Applied AI Lab
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
      </Box>

      <Box
        mt="0"
        w="100vw"
        h="auto"
        minH="60vh"
        backgroundColor={"gray.900"}
      >
        <Box
        py="32px"
        px="32px"
        w="100%"
        maxW="2xl"
        mx="auto"
        >
          <Text
            as="h2"
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "3xl", md: "3xl" }}
            textAlign="center"
            mb={4}
            textColor={"white"}
          >
            How did we register this?
          </Text>

          <Text
            fontSize={{ base: "lg", sm: "lg", md: "lg" }}
            textAlign="left"
            mb={8}
            textColor={"white"}

          >
            We registered the domain <Link href="https://一.io" color="blue.500">一.io</Link>. 
          </Text>

          <Text
            fontSize={{ base: "lg", sm: "lg", md: "lg" }}
            textAlign="left"
            mb={8}
            textColor={"white"}

          >
            Under the hood, this links to the domain <Link href="https://xn--4gq.io/" color="blue.500">xn--4gq.io</Link>. It is converted using <Link href="https://www.punycoder.com/" color="blue.500">Punycode</Link>, which is a way to represent Unicode with the limited character subset of ASCII.
          </Text>

          <Text
            fontSize={{ base: "lg", sm: "lg", md: "lg" }}
            textAlign="left"
            mb={8}
            textColor={"white"}

          >
            Certain Top-Level Domains (TLDs) support certain characters. For example, the .io TLD supports characters from languages like Chinese, Korean, and Arabic.
          </Text>

          <Text
            fontSize={{ base: "lg", sm: "lg", md: "lg" }}
            textAlign="left"
            mb={8}
            textColor={"white"}

          >
            These unicode names fall under something known as Internationalized Domain Names (IDNs), originally created in 1990. The obvious question is whether or not this is a security risk. The answer is yes, but modern browsers prevent these so-called <Link href="https://www.malwarebytes.com/blog/news/2017/10/out-of-character-homograph-attacks-explained" color="blue.500">homograph attacks</Link> in a variety of ways. Chrome, in particular, showns the unicode for valid domains, but alerts the users when the domain could be a homograph attack.
          </Text>

          <Text
            fontSize={{ base: "lg", sm: "lg", md: "lg" }}
            textAlign="left"
            mb={8}
            textColor={"white"}

          >
            Namecheap created a comprehensive table of <Link href="https://www.namecheap.com/support/knowledgebase/article.aspx/238/35/do-you-support-idn-domains-and-emojis/" color="blue.500">TLDs that support IDNs</Link>.
          </Text>

          <Text
            fontSize={{ base: "lg", sm: "lg", md: "lg" }}
            textAlign="left"
            mb={8}
            textColor={"white"}
          >
              Originally inspired by <Link href="https://💀🎺.tk" color="blue.500">💀🎺.tk</Link>. 
          </Text>

          <Text
            fontSize={{ base: "lg", sm: "lg", md: "lg" }}
            textAlign="left"
            mb={8}
            textColor={"white"}
          >
              If you have any questions or comments, please reach out to us at i@一.io
          </Text>
        </Box>
      </Box>
    </>
  );
}


export default App;
