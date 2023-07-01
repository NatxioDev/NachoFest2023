import { Image, Center, SimpleGrid, ScaleFade } from "@chakra-ui/react";
import { motion } from "framer-motion";

import NameBanner from "../assets/NachoFest.svg";
import NachoKukis from "../assets/NachoKukis.png";

function Header() {
  return (
    <>
      <Center>
        <SimpleGrid columns={1}>
          <ScaleFade in={true} align={"center"}>
            <Center align={"center"}>
              <div>
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
