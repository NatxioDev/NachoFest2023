import { Button, Text, Center } from "@chakra-ui/react";

import { FaWhatsapp } from "react-icons/fa";

function Asistance() {
  return (
    <Center>
      <Text fontSize='xl' fontFamily={"system-ui"} color={"white"}>Confirma tu asistencia:</Text>
      <Button
        as={"a"}
        href="https://api.whatsapp.com/send?phone=59169766811&text=Confirmo%20asistencia%20%3A)"
        colorScheme="whatsapp"
        leftIcon={<FaWhatsapp />}
        marginLeft={"10px"}
      >
        Whatsapp
      </Button>
    </Center>
  );
}

export default Asistance;
