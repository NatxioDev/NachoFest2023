import { useEffect, useState } from "react";
import {
  Button,
  ScaleFade,
  Card,
  Grid,
  CardBody,
  GridItem,
  Text,
  Box,
  CardHeader,
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

    let day = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hour = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minute = Math.floor((difference / 1000 / 60) % 60);
    let second = Math.floor((difference / 1000) % 60);

    if (day < 10) day = "0" + day;
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;

    setDay(day);
    setHour(hour);
    setMinute(minute);
    setSecond(second);
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
      <Card
        align={"center"}
        background={"#f15a24"}
        mx={[5, 10, 100, 400]}
        my={[1, 5]}
      >
        <CardHeader marginBottom={"-20px"}>
          <Text fontSize={["xl", "xl", "3xl", "3xl"]} fontWeight={"bold"} color={"#fff"}>
            22 de Julio del 2023 | 15:00Hr
          </Text>
        </CardHeader>
        <CardBody color={"#fff"}>
          <Grid templateColumns="repeat(4, 1fr)" gap={[5, 10]}>
            <GridItem align="center">
              <Box>
                <Button fontWeight={"bold"} cursor={"default"}>
                  {day}
                </Button>
                <Text>
                  <strong>Días</strong>
                </Text>
              </Box>
            </GridItem>
            <GridItem align="center">
              <Button fontWeight={"bold"} cursor={"default"}>
                {hour}
              </Button>
              <Text>
                <strong>Horas</strong>
              </Text>
            </GridItem>
            <GridItem align="center">
              <Button fontWeight={"bold"} cursor={"default"}>
                {minute}
              </Button>
              <Text>
                <strong>Minutos</strong>
              </Text>
            </GridItem>
            <GridItem align="center">
              <Button fontWeight={"bold"} cursor={"default"}>
                {" "}
                {second}
              </Button>
              <Text>
                <strong>Segundo(s)</strong>
              </Text>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </ScaleFade>
  );
}

export default Countdown;
