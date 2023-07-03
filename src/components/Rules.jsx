import {
  Container,
  Grid,
  GridItem,
  Center,
  Text,
  Image,
} from "@chakra-ui/react";

import RuleCard from "./RuleCard";

import chemsad from "../assets/3zdlcl.webp";
import catkiss from "../assets/catkiss.gif";

function Rules() {
  return (
    <Container width={"90%"}>
      <Text
        fontSize={["2xl", "xl", "3xl", "3xl"]}
        fontWeight={"bold"}
        color={"#fff"}
        fontFamily={"Montserrat, sans-serif"}
        align={"center"}
        mb={2}
      >
        <strong>REGLAS:</strong>
      </Text>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6}>
        <RuleCard
          rule={"Sin Malacopear"}
          description={"*Opcional"}
        />
        <RuleCard
          rule={"Besar al cumpleañero"}
          description={"*Obligatorio"}
        />
        <RuleCard
          rule={"Se puntual"}
          description={"*Te igualas si llegas tarde, ni modo"}
        />
        <RuleCard
          rule={"Traen cariño/regalo"}
          description={"*o no me quieren?"}
          image={chemsad}
          imageSize={"100px"}
        />
        {/* <RuleCard
          rule={"Invitacion personal"}
          description={"Avisen si traen a alguien mas"}
          image={catkiss}
          imageSize={"100px"}
        /> */}
        <GridItem bg="#444" rounded={"5px"} padding={"10px"}>
          <Grid
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={2}
          >
            <GridItem rowSpan={1} colSpan={3}>
              <Text
                fontSize={["2xl"]}
                fontWeight={"bold"}
                color={"#fff"}
                fontFamily={"system-ui"}
                align={"center"}
              >
                {"Invitacion personal"}
              </Text>
            </GridItem>
            <GridItem rowSpan={3} colSpan={1}>
              <Center>
                {<Image src={catkiss} width={"100px"} margin={0} padding={0} />}
              </Center>
            </GridItem>
            <GridItem rowSpan={3} colSpan={2}>
              <Text align={"center"} alignContent={"center"} color={"white"}>
                {"Avisen si traen a alguien mas :)"}
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Rules;
