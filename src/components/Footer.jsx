import { Container, Image, Stack, Text } from "@chakra-ui/react";

import ssj from "../assets/ssj.png";

function Footer() {
  return (
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Image
            src={
              "https://spice.com.ar/storage/works/June2020/SLMZLbV7caVhvnlAfHL9.png"
            }
            width={50}
          />
          <Image src={ssj} width={50} />
        </Stack>
        <Text color="#fff" fontSize="sm">
          &copy; {new Date().getFullYear()} Made with ❤️ by {"Nacho"} and{" "}
          {"Giugas"}
        </Text>
      </Stack>
    </Container>
  );
}

export default Footer;
