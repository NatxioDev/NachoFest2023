import { Button, Text, Center, Container } from "@chakra-ui/react";
import React from "react";
import useSound from "use-sound";
import goteo from "../assets/sounds/goteo.mp3";
import { FaWhatsapp } from "react-icons/fa";

function Asistance() {
  // eslint-disable-next-line no-unused-vars
  const [playbackRate, setPlaybackRate] = React.useState(1);
  const [isLoading, setIsLoaded] = React.useState(false);

  const [play] = useSound(goteo, {
    playbackRate,
    volume: 1,
  });

  const handleClick = () => {
    // setIsLoaded(true);
    play();
    setTimeout(() => {
      setIsLoaded(false);
    }, 1500);
  };

  return (
    <Container>
      <Center mx={2}>
        <Text
          fontSize="xl"
          fontFamily={"Montserrat, system-ui"}
          color={"white"}
        >
          {"No olvides confirmar asistencia acá:"}
        </Text>
      </Center>

      <Center mt={"1"}>
        <Button
          as={"a"}
          isLoading={isLoading}
          href="https://api.whatsapp.com/send?phone=59169766811&text=Confirmo%20asistencia%20%3A)"
          target="_blank"
          colorScheme="whatsapp"
          leftIcon={<FaWhatsapp />}
          onClick={handleClick}
        >
          WhatsApp
        </Button>
      </Center>
    </Container>
  );
}

export default Asistance;
