import { Box, GridItem, Text, Image, Center } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function RuleCard({ rule, description, image, imageSize }) {
  return (
    <>
      <GridItem bg="#444" rounded={"5px"} padding={"10px"}>
        <Box>
          <Text
            fontSize={["2xl"]}
            fontWeight={"bold"}
            color={"#fff"}
            fontFamily={"system-ui"}
            align={"center"}
          >
            {rule}
          </Text>
          <Text align={"center"} alignContent={"center"} color={"white"}>
            {description}
            <Center>
              {image ? <Image src={image} width={imageSize} margin={-5} padding={0}  /> : null}
            </Center>
          </Text>
        </Box>
      </GridItem>
    </>
  );
}

export default RuleCard;
