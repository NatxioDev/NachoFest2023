import { Card, Heading, Button, Text, Center } from "@chakra-ui/react";

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
        <Heading size="md" align="center">
          Dirección
        </Heading>
        <Text>Obrajes. Entre Calle 12 y 13 #50709</Text>

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
        >
          Ver Mapa
        </Button>
      </Card>
    </Center>
  );
}

export default Maps;
