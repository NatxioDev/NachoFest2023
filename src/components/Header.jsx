import { Image, Center, SimpleGrid, ScaleFade, Text } from "@chakra-ui/react";

import NameBanner from "../assets/NachoFest.svg";
import NachoKukis from "../assets/NachoDuko.png";

function Header() {
  return (
    <>
      <Center>
        <SimpleGrid columns={1}>
          <ScaleFade in={true} align={"center"}>
            <Center align={"center"}>
              <div>
                <Text
                  fontSize={["3xl", "6xl", "6xl", "7xl"]}
                  mt={"10"}
                  color={"white"}
                  fontFamily={"Montserrat, sans-serif"}
                >
                  <strong>ESTAS INVITADO A</strong>
                </Text>
                <Image src={NachoKukis} width={[500, 500]} />
                <Image
                  src={NameBanner}
                  width={[300, 500, 500, 700]}
                  marginTop={-150}
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
