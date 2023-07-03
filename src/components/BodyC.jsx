import { Container, Text, Image, Center } from "@chakra-ui/react";

import queSeRepita from "../assets/queSeRepita.gif";

function BodyC() {
  return (
    <Container alignItems={"center"}>
      <Text
        align={"center"}
        color={"white"}
        fontFamily={"montserrat, system-ui"}
        fontSize="2xl"
        fontWeight={"600"}
      >
        #QueSeRepita2.0
      </Text>
      <Center>
        <Image src={queSeRepita} width={200}></Image>
      </Center>
    </Container>
  );
}

export default BodyC;
