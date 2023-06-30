import { Card, CardBody, Slide } from "@chakra-ui/react";

function Header() {
  return (
    <Slide direction='top' in={true}>
      <Card background={"#333"} m={100}>
        <CardBody color={"#fff"}>
          <h1>View a summary of all your customers over the last month.</h1>
        </CardBody>
      </Card>
    </Slide>
  );
}

export default Header;
