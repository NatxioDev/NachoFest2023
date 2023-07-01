import { Container, Image, Stack, Text, Link } from "@chakra-ui/react";

import ssj from "../assets/ssj.png";

import tgs from "../assets/tgs.svg";

const fernetBrancaLogo =
  "https://spice.com.ar/storage/works/June2020/SLMZLbV7caVhvnlAfHL9.png";

const singaniLogo =
  "https://www.singanicasareal.com/wp-content/uploads/2019/05/singani-casa-real-isotipo.png";

const spotifyLogo =
  "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png";
function Footer() {
  return (
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Image src={fernetBrancaLogo} width={50} />
          <Image src={singaniLogo} width={50} />
          <Image src={tgs} width={50} />
          <Image src={spotifyLogo} width={100} />
          <Image src={ssj} width={50} />
        </Stack>
        <Text color="#fff" fontSize="sm">
          &copy; {new Date().getFullYear()} Made with ❤️ by{" "}
          <Link color="teal.500" href="https://www.instagram.com/nacho.svg">
            @Nacho
          </Link>{" "}
          and{" "}
          <Link color="teal.500" href="https://www.instagram.com/giugas.ds3">
            @Giugas
          </Link>
        </Text>
      </Stack>
    </Container>
  );
}

export default Footer;
