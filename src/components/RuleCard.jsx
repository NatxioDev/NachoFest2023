import { Box, GridItem, Text, Image, Center } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function RuleCard({ rule, description, image, imageSize, margin }) {
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
            margin={0}
          >
            {rule}
          </Text>
          <Text align={"center"} alignContent={"center"} color={"white"} marginBottom={2}>
            {description}
          </Text>
            <Center>
              {image ? <Image src={image} width={imageSize} margin={margin} padding={0}  /> : null}
            </Center>
        </Box>
      </GridItem>
    </>
  );
}

export default RuleCard;
