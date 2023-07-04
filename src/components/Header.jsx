import { Image, Center, SimpleGrid, ScaleFade, Text } from "@chakra-ui/react";

import NameBanner from "../assets/NachoFest.svg";
import NachoKukis from "../assets/NachoDuko.webp";
import SEO from "./SEO";

function Header() {
  return (
    <>
      <SEO />
      <Center>
        <SimpleGrid columns={1}>
          <ScaleFade in={true} align={"center"}>
            <Center align={"center"}>
              <div>
                <Text
                  fontSize={["3xl", "6xl", "6xl", "7xl"]}
                  mt={"10"}
                  color={"white"}
                  fontFamily={"Titillium Web, Montserrat, sans-serif"}
                >
                  <strong>ESTÁS INVITAD@ AL</strong>
                </Text>
                <Image
                  src={NachoKukis}
                  width={[500, 500]}
                  style={{ zIndex: 1 }}
                />
                <Image
                  src={NameBanner}
                  width={[300, 500, 500, 700]}
                  marginTop={-150}
                  style={{ zIndex: 10 }}
                ></Image>
              </div>
            </Center>
          </ScaleFade>
        </SimpleGrid>
      </Center>
    </>
  );
}

export default Header;
