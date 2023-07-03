import { Container, Grid, GridItem, Center, Text, Box } from "@chakra-ui/react";

function Rules() {
  return (
    <Container width={"90%"}>
      <Text
        fontSize={["2xl", "xl", "3xl", "3xl"]}
        fontWeight={"bold"}
        color={"#fff"}
        fontFamily={"Montserrat, sans-serif"}
        align={"center"}
      >
        <strong>REGLAS:</strong>
      </Text>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6}>
        <GridItem bg="#444" rounded={"5px"} padding={"10px"}>
          <Box>
            <Text
              fontSize={["2xl"]}
              fontWeight={"bold"}
              color={"#fff"}
              fontFamily={"system-ui"}
              align={"center"}
            >
              Sin Malacopear
            </Text>
            <Center>
              {/* <Image src={malaCopa} width={"150px"} margin={"2"}></Image> */}
            </Center>
            <Text align={"center"} color={"white"}>
              (Bueno quizas alguno)
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </Container>
  );
}

export default Rules;
