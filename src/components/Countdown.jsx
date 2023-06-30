import { useEffect, useState } from "react";
import {
  Button,
  ScaleFade,
  Card,
  Grid,
  CardBody,
  GridItem,
  Text,
} from "@chakra-ui/react";

function Countdown() {
  const birthdayDate = new Date(2023, 6, 22, 15, 0, 0);
  let today = new Date();

  let difference;

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  //

  const getDateDiference = () => {
    today = new Date();
    difference = birthdayDate - today;

    setDay(Math.floor(difference / (1000 * 60 * 60 * 24)));
    setHour(Math.floor((difference / (1000 * 60 * 60)) % 24));
    setMinute(Math.floor((difference / 1000 / 60) % 60));
    setSecond(Math.floor((difference / 1000) % 60));
  };

  useEffect(() => {
    getDateDiference();

    const timer = setInterval(() => {
      getDateDiference();
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <ScaleFade direction="top" in={true}>
      <Card align={"center"} background={"#333"} mx={[1, 10, 100, 400]} my={[1, 5]}>
        <CardBody color={"#fff"}>
          <Grid templateColumns="repeat(4, 1fr)" gap={10}>
            <GridItem align="center">
              <Button cursor={"default"}>{day}</Button>
              <Text>Días</Text>
            </GridItem>
            <GridItem align="center">
              <Button cursor={"default"}>{hour}</Button>
              <Text>Horas</Text>
            </GridItem>
            <GridItem align="center">
              <Button cursor={"default"}>{minute}</Button>
              <Text>Minutos</Text>
            </GridItem>
            <GridItem align="center">
              <Button cursor={"default"}> {second}</Button>
              <Text>Segundo(s)</Text>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </ScaleFade>
  );
}

export default Countdown;
