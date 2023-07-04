import { Card, Heading, Button, Text, Center, Image } from "@chakra-ui/react";

import { FaMapMarkedAlt } from "react-icons/fa";

import casa from "../assets/casa.png";
function Maps() {
  return (
    <Center>
      <Card
        width={[500, 600, 550, 620]}
        mx={[5, 0, 0, 0]}
        align="center"
        padding={5}
        background={"#333"}
        border={"1px solid #f15a24"}
        color={"white"}
      >
        <Heading size="md" align="center" fontFamily={"Montserrat, sans-serif"}>
          DIRECCIÓN:
        </Heading>
        <Image src={casa} marginY={2} rounded={5} width={["100%", "80%"]} />
        <Text fontFamily={"Montserrat, sans-serif"} align={"center"}>
          Calle Hector Ormachea entre Calle 13 y 14 de Obrajes #5906
        </Text>
        <Button
          as={"a"}
          href="https://goo.gl/maps/RPvVfPsTx8cXkVnEA"
          background={"#f15a24"}
          align={"center"}
          colorScheme="blue"
          marginTop={"15px"}
          _hover={{
            background: "#333",
            color: "#f15a24",
            border: "1px solid #f15a24",
          }}
          leftIcon={<FaMapMarkedAlt />}
        >
          Ver Mapa
        </Button>
      </Card>
    </Center>
  );
}

export default Maps;
