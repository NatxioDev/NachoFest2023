import { Container, Grid, Text } from "@chakra-ui/react";

import RuleCard from "./RuleCard";

import chemsad from "../assets/3zdlcl.webp";

import yuca from "../assets/yuca.png";
import ana from "../assets/ana.png";
import pedro from "../assets/pedro.png";

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
          rule={"Traen su regalo en litros"}
          description={"*Obligatorio"}
          image={ana}
          imageSize={"100px"}
          margin={0}
        />
        <RuleCard
          rule={"Sin malacopear"}
          description={"*Opcional"}
          image={yuca}
          imageSize={"100px"}
        />
        <RuleCard
          rule={"Besar al cumpleañero"}
          description={"*Obligatorio"}
          image={"https://i.giphy.com/media/3oz8xsaLjLVqVXr3tS/giphy.webp"}
          imageSize={"100px"}
          margin={0}
        />
        <RuleCard
          rule={"Sé puntual"}
          description={"Te igualas si llegas tarde, ni modo"}
          image={chemsad}
          imageSize={"150px"}
          margin={-8}
        />

        <RuleCard
          rule={"Invitación personal"}
          description={"Avisen si traen a alguien más"}
          image={"https://i.giphy.com/media/E7lPfCwl7DPpuY8TF0/giphy.webp"}
          imageSize={"100px"}
          margin={0}
        />
        {/* <RuleCard
          rule={"Sin hacer webadas"}
          description={"Esta va pal Llanqui y el Giugas"}
          image={pedro}
          imageSize={"100px"}
          margin={0}
        /> */}
      </Grid>
    </Container>
  );
}

export default Rules;
